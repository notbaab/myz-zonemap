import { FancyWebSocket }  from '@/util/WebSocketEventDispatcher';
import ZoneMap from '@/zonemap/ZoneMap';

class BackendApi {
    constructor(mapId, host, port) {
        this.host = host;
        this.port = port;
        this.mapId = mapId;

        this.wsUrl = this.buildWsUrl(this.mapId, this.host, this.port);
        this.apiUrl = this.buildApiUrl(this.mapId, this.host, this.port);

        // open the websocket
        this.openWsConnection();
        // bind our message callback to this object cause there isn't a god
        this.handleState = this.handleState.bind(this);
    }

    openWsConnection() {
        this.connection = new FancyWebSocket(this.wsUrl);
    }

    fetchMap(mapLoaded) {
        fetch(this.apiUrl, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            if(data.error !== undefined) {
                alert("Map " + id + " Failed to load. Error given " + data.error);
                return;
            }
            const zm = ZoneMap.parse(data);
            mapLoaded(zm);
        })
        .catch((error) => {
            alert("Failed to load map with id " + id + ". Error " + error);
            console.log(error);
        });
    }

    listenForMessages(onMapUpdateCallback) {
        this.onMapUpdateCallback = onMapUpdateCallback;
        this.connection.bind("state", this.handleState);
    }

    handleState(data) {
        if(this.onMapUpdateCallback === undefined)
        {
            return;
        }

        const zm = ZoneMap.copyFromJObject(data);
        this.onMapUpdateCallback(zm);
    }

    updateState(zm) {
        const zoneMap = ZoneMap.fullMapAsJObject(zm);
        this.connection.send("state", zoneMap);
    }

    buildBaseUrl(host, port)  {
        let definedPort = port;
        if (port === undefined)
        {
            definedPort = window.location.port;
        }
        return host + ":" + port;
    }

    buildApiUrl(mapId, host, port){
        let baseUrl = this.buildBaseUrl(host, port);
        let url = new URL("room-data/" + mapId, window.location.protocol + baseUrl);
        return url;
    }

    buildWsUrl(mapId, host, port){
        let baseUrl = this.buildBaseUrl(host, port);
        let protocol = "wss:";
        if (window.location.protocol !== 'https:') {
            protocol = "ws:";
        }

        let url = new URL("ws/" + mapId, protocol + baseUrl);
        return url;
    }
}

export { BackendApi };
