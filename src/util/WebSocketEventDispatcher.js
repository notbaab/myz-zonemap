/*
Simplified WebSocket events dispatcher (no channels, no users)

var socket = new FancyWebSocket();

// bind to server events
socket.bind('some_event', function(data){
  alert(data.name + ' says: ' + data.message)
});

// broadcast events to all connected users
socket.send( 'some_event', {name: 'ismael', message : 'Hello world'} );
*/

class FancyWebSocket {
	constructor(url) {
		let that = this;
		this.conn = new WebSocket(url);
		this.callbacks = {};

		this.conn.onmessage = this.onMessage.bind(this);
		this.conn.onclose = function() {
			that.dispatch('close', null);
		};

		this.conn.onopen = function() {
			that.dispatch('open', null);
		};
	}

	onMessage(msg) {
		var json = JSON.parse(msg.data);
		// check if multiple events were sent in this message
		// TODO: Figure out a better convention other than, "Is this event or events?"
		// But avoid type checking....
		//
		// TODO: Also, figure out if we want to enforce ordering? Should we be able
		// to read the events in any order, pick certian ones base on the type of
		// event or just read the array in order and trust they are sent properly
		if (json.events !== undefined) {
			for (var i = 0; i < json.events.length; i++) {
				let eventName = json.events[i].event;
				let eventData = json.events[i].data;
				this.dispatch(eventName, eventData);
			}
		} else {
			this.dispatch(json.event, json.data);
		}
	}

	dispatch(event_name, data) {
		var chain = this.callbacks[event_name];
		if (typeof chain == 'undefined') {
			console.log("Un")
			return; // no callbacks for this event
		}

		for (var i = 0; i < chain.length; i++) {
			chain[i](data);
		}
	}

	bind(event_name, callback, thisBinding) {
		this.callbacks[event_name] = this.callbacks[event_name] || [];

		if (thisBinding) {
			let boundCallback = callback.bind(thisBinding);
			this.callbacks[event_name].push(callback);
		} else {
			this.callbacks[event_name].push(callback);
		}

		return this; // chainable
	}

	send(event_name, event_data) {
    // if(raw === undefined) {
    //   raw = false;
    // }
    // let payload;
    // if(raw) {
    //   // I fucking hate this, do better
    //   payload =  '{"event": "' + event_name + '",  "data": "' + JSON.stringify(event_data) + '" }';
    // } else {
    //   payload = JSON.stringify({ event: event_name, data: event_data });
    // }

    let payload = JSON.stringify({ event: event_name, data: event_data });
		this.conn.send(payload);
		return this;
	}
}

// var FancyWebSocket = function(url) {
//   var conn = new WebSocket(url);

//   var callbacks = {};

//   // the this binding is a complete hack
//   this.bind = function(event_name, callback, thisBinding) {
//   };

//   // dispatch to the right handlers
//   conn.onmessage = function(evt) {
//     var json = JSON.parse(evt.data);
//     console.log("Got data" + json);
//     // check if multiple events were sent in this message
//     // TODO: Figure out a better convention other than, "Is this event or events?"
//     // But avoid type checking....
//     //
//     // TODO: Also, figure out if we want to enforce ordering? Should we be able
//     // to read the events in any order, pick certian ones base on the type of
//     // event or just read the array in order and trust they are sent properly
//     if (json.events !== undefined) {
//       for (var i = 0; i < json.events.length; i++) {
//         let eventName = json.events[i].event;
//         let eventData = json.events[i].data;
//         dispatch(eventName, eventData);
//       }
//     } else {
//       dispatch(json.event, json.data);
//     }
//   };

//   this.state = function() {
//     return conn.readyState;
//   };

//   var dispatch = function(event_name, message) {
// };

export { FancyWebSocket };
