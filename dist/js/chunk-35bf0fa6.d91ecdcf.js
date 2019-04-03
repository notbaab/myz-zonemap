(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35bf0fa6"],{"6c34":function(e,t,a){},9715:function(e,t,a){"use strict";var i=a("6c34"),o=a.n(i);o.a},c3ef:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{dark:e.nightMode}},[a("v-toolbar",{staticClass:"help-dialog-toolbar",attrs:{fixed:"",dense:"",dark:""}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.drawer=!e.drawer}}},[a("v-icon",[e._v("mdi-menu")])],1),a("v-toolbar-title",[e._v("HELP: "),a("b",[e._v(e._s(e.$root.name.toUpperCase()))]),e._v(" v"+e._s(e.$root.version))]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{icon:"",dark:"",title:"Toggle night mode"},on:{click:function(t){e.nightMode=!e.nightMode}}},[a("v-icon",[e._v(e._s(e.nightMode?"mdi-lightbulb-outline":"mdi-lightbulb"))])],1),a("v-btn",{attrs:{icon:"",dark:"",title:"Close this tab"},on:{click:function(t){return e.closeHelp()}}},[a("v-icon",[e._v("mdi-close")])],1)],1)],1),a("v-navigation-drawer",{attrs:{fixed:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",e._l(e.drawerEntries,function(t,i){return a("v-list-tile",{key:i},[a("v-list-tile-content",[a("v-list-tile-title",{staticClass:"navigation-menu-entry"},[a("a",{on:{click:function(a){return e.goto(t)}}},[e._v(e._s(e.formatTitle(t)))])])],1)],1)}),1)],1),a("v-container",{staticStyle:{"max-width":"800px",margin:"0 auto"},attrs:{"py-5":""}},[a("v-layout",{ref:"helptext",attrs:{id:"helptext",column:""}},[a("h1",[e._v("Mutant Year Zero:"),a("br"),e._v(e._s(e.$root.name))]),a("div",[a("h2",{ref:"About",attrs:{id:"About"}},[e._v("About")]),a("p",[a("b",[e._v(e._s(e.$root.name))]),e._v(" is a web application for managing the Map of the Zone in the "),a("b",[e._v("Mutant: Year Zero")]),e._v(" tabletop roleplaying game. It's a useful companion for generating random Zone sectors on the fly, rolling threats, keeping notes, tracking the resources to find, and many more.")]),a("p",[e._v("It's mainly designed for Game Master's Eyes, although the application provides a special mode to showcase explored-only sectors to the Player Characters, hiding from them the location of EDEN.")]),a("div",{staticClass:"alert alert-success"},[a("h4",[a("i",{staticClass:"mdi mdi-book-open-page-variant"}),e._v(" ReadMe!")]),a("p",{staticClass:"text-info"},[e._v("This document contains many useful information about "),a("b",[e._v(e._s(e.$root.name))]),e._v(" and how to pilot the web app.\r\n\t\t\t\t\t"),a("br"),e._v("It worth the read!")])]),a("h3",[e._v("Saving Your Work")]),a("p",[e._v("The "),a("b",[e._v("Zonemap")]),e._v(" can be saved in JSON format, and loaded again for later uses. Because it's JSON, it's easy to edit with a text editor. "),a("small",[a("i",[e._v("(But beware of what you do here, as this could lead to file corruption.)")])])]),a("div",{staticClass:"alert alert-warning"},[a("h4",[a("i",{staticClass:"mdi mdi-content-save"}),e._v(" Back-It Up!")]),a("p",{staticClass:"text-info"},[e._v("Don't hesitate to back up your zonemap JSON file. Don't always overwrite it when saving.")])])]),a("v-divider"),a("h2",{ref:"First_Steps",attrs:{id:"First_Steps"}},[e._v("First Steps")]),a("div",[a("p",[a("b",[e._v(e._s(e.$root.name))]),e._v(" is compatible with modern web browsers, although it doesn't work with Internet Explorer, and never will.")]),a("p",[e._v("The development is still in progress and fonctionalities are subject to evolve. Unfortunately, bugs are not impossible. If you encounter some of them, please read "),a("a",{on:{click:function(t){return e.goto("Troubleshooting")}}},[e._v("Troubleshooting")]),e._v(" below.")]),a("p",[e._v("When starting the app, you have three available choices:")]),a("h3",[e._v("Create a New Map")]),a("p",[e._v("Choose this option if you want to create a new map from scratch. You have to define a name and its dimensions. Common map of the Zone are 30 sectors wide and 18 sectors high. You may also choose a language among available translations, although this option only change the language used for the infos generated for a sector. It doens't change the user interface's language.")]),a("h3",[e._v("Open an Existing Map")]),a("p",[e._v("Choose this option to load a zonemap JSON file hosted on your computer/device.")]),a("h3",[e._v("Load Last Map")]),a("p",[e._v("Choose this option to quickly load the last saved map.")])]),a("v-divider"),a("h2",{ref:"The_Sectors_Grid",attrs:{id:"The_Sectors_Grid"}},[e._v("The Sectors Grid")]),a("div",[a("p",[e._v("The map of the Zone is a grid divided in several squares. Each square is a "),a("b",[e._v("sector")]),e._v(", "+e._s(e.$root.sectorDim)+" pixels tall. The map can't be wider than 30 sectors and higher than 26 sectors.")]),a("p",[e._v('The map is "draggable" like any other Google Map. No zoom function yet.')]),a("h3",[e._v("Toolbar")]),a("p",[e._v("At the top, a toolbar offers many functions:")]),a("ul",{staticClass:"text-info",staticStyle:{"list-style-type":"none"}},[a("li",[a("i",{staticClass:"mdi mdi-content-save"}),e._v(" — Saves all the changes of the current zonemap to the web browser memory (local storage). Data is saved as long as the browser stays open.")]),a("li",[a("i",{staticClass:"mdi mdi-download"}),e._v(" — Downloads the zonemap JSON file, including the unsaved changes.")]),a("li",[a("i",{staticClass:"mdi mdi-settings"}),e._v(" — Opens the options menu.")]),a("li",[a("i",{staticClass:"mdi mdi-eye"}),e._v(" — Toggles the GM view. Usefull if you want to show the map to the PCs. When toggled off, only explored sectors and basic information are displayed.")]),a("li",[a("i",{staticClass:"mdi mdi-help-circle-outline"}),e._v(" — Shows this help.")]),a("li",[a("i",{staticClass:"mdi mdi-bug-outline"}),e._v(" — Reports an issue.")]),a("li",[a("i",{staticClass:"mdi mdi-close"}),e._v(" — Closes the current map of the Zone and returns back to home.")])]),a("h3",[e._v("Sector")]),a("p",[e._v("Each "),a("b",[e._v("sector")]),e._v(" displays several information: a set of icons, a name, and a marker. Each sector can also have different background & border colors, according to the sector's type, rot level, and exploration status.")]),a("p",[e._v("To edit a sector, "),a("code",[e._v("double-click")]),e._v(" or "),a("code",[e._v("right-click")]),e._v(" the desired square on the grid.")]),a("v-container",{attrs:{fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("h4",[e._v("Icons")]),a("ul",{staticClass:"text-info",staticStyle:{"list-style-type":"none"}},[a("li",[a("i",{staticClass:"mdi mdi-skull"}),e._v(" — Indicates the presence of a "),a("b",[e._v("threat")]),e._v(" in the sector.")]),a("li",[a("i",{staticClass:"mdi mdi-star"}),e._v(" — Indicates the presence of an "),a("b",[e._v("artifact")]),e._v(" in the sector.")]),a("li",[a("i",{staticClass:"mdi mdi-radioactive"}),e._v(" — Indicates a "),a("b",[e._v("Rot level")]),e._v(" equal to 2 or higher.")]),a("li",[a("i",{staticClass:"mdi mdi-notebook"}),e._v(" — Indicates some "),a("b",[e._v("extra notes")]),e._v(" added by the GM for the sector.")])])]),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("h4",[e._v("Colors")]),a("ul",{staticClass:"text-info",staticStyle:{"list-style-type":"none"}},[a("li",[a("b",[e._v("Gray:")]),e._v(" unexplored")]),a("li",[a("b",[e._v("Blue:")]),e._v(" special Zone sector")]),a("li",[a("b",[e._v("Yellow:")]),e._v(" Ark sector")]),a("li",[a("b",[e._v("Green border:")]),e._v(" Rot Oasis sector (Rot level 0)")]),a("li",[a("b",[e._v("Orange/red border:")]),e._v(" Rot level 2+")])])])],1)],1),a("p",[e._v("Changes you make to your sector in the editing dialog aren't saved until you hit the "),a("i",{staticClass:"mdi mdi-content-save"}),e._v(" (Save) button.")])],1),a("v-divider"),a("h2",{ref:"Custom_Map_Background",attrs:{id:"Custom_Map_Background"}},[e._v("Custom Map Background")]),a("div",[a("p",[e._v("Find My Path allows its user to set a custom image for the background behind the grid of sectors.")]),a("p",[e._v("Click the "),a("i",{staticClass:"mdi mdi-settings"}),e._v(" icon to display the options menu and then head to the "),a("code",[e._v("Background")]),e._v(" tab.")]),a("p",[e._v("Select your image using the file input and wait until it's loaded. Hit the "),a("i",{staticClass:"mdi mdi-content-paste"}),e._v(" (Use) button to apply the image to the background. Hit the "),a("i",{staticClass:"mdi mdi-trash-can-outline"}),e._v(" (Remove) button to reset the background.")]),a("h3",[e._v("Placement")]),a("p",[e._v("You may then adjust correctly the placement of the background image behing the sectors grid.")]),a("ul",[a("li",[e._v("Use the "),a("i",{staticClass:"mdi mdi-format-horizontal-align-left"}),e._v(" & "),a("i",{staticClass:"mdi mdi-format-vertical-align-top"}),e._v(" fields to respectively move the image left/right (X axis) and up/down (Y axis). Use negative values to offset the image.")]),a("li",[e._v("Use the "),a("i",{staticClass:"mdi mdi-border-horizontal"}),e._v(" & "),a("i",{staticClass:"mdi mdi-border-vertical"}),e._v(" fields to respectively adjust the width and the height of the background image. "),a("i",[e._v("(A sector is "+e._s(e.$root.sectorDim)+" pixels tall.)")])])]),a("div",{staticClass:"alert alert-info"},[a("h4",[a("i",{staticClass:"mdi mdi-image-size-select-actual"}),e._v(" Default Placement")]),a("p",{staticClass:"text-info"},[e._v("Zonemap background images made with the "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=Re1O43K1K0c",target:"_blank"}},[e._v("Shane McLean tutorial")]),e._v(" should fit with values "),a("code",[e._v("Left: -7, Top: -9, Width: 1944, Height: 1167")]),e._v(" (not verified).")])]),a("div",{staticClass:"alert alert-info"},[a("h4",[a("i",{staticClass:"mdi mdi-information-outline"}),e._v(" Background Saving")]),a("p",{staticClass:"text-info"},[e._v("The background image is not saved in the zonemap JSON file and will then reset each time you close the internet browser. This is a development choice made to reduce the size of the zonemap file. However, all placement data (top, left, width & height values) are saved, which means you only need to reload the image when you re-open your zonemap.")])])]),a("v-divider"),a("h2",{ref:"Sector_Data",attrs:{id:"Sector_Data"}},[e._v("Sector's Data")]),a("div",[a("p",[e._v("This section describes all customizable data for a sector.")]),a("h3",[a("i",{staticClass:"mdi mdi-flag"}),e._v(" Sector's name")]),a("p",[e._v("Custom name of the sector. By default, it's the sector's coordinates in the Zone map.")]),a("h3",[a("i",{staticClass:"mdi mdi-compass"}),e._v(" Exploration status")]),a("p",[e._v("Either if this sector is explored or not. Checking this checkbox will remove the gray background from the map's square.")]),a("h3",[a("i",{staticClass:"mdi mdi-radioactive"}),e._v(" Rot level")]),a("ol",{attrs:{start:"0"}},[a("li",[a("b",[e._v("Rot oasis:")]),e._v(" Rot-free area. "),a("small",[a("i",[e._v("(No radiation icon & green border on the square.)")])])]),a("li",[a("b",[e._v("Weak rot area:")]),e._v(" In these sectors PCs get one Rot point every day. "),a("small",[a("i",[e._v("(No radiation icon.)")])])]),a("li",[a("b",[e._v("Strong rot area:")]),e._v(" In such a sector PCs suffer one Rot Point every hour. "),a("small",[a("i",[e._v("(Radiation icon & orange border.)")])])]),a("li",[a("b",[e._v("Rot hotspot:")]),e._v(" Here, you will die quickly. You get one Rot Point every minute. "),a("small",[a("i",[e._v("(Radiation icon & red border.)")])])])]),a("h3",[a("i",{staticClass:"mdi mdi-space-invaders"}),e._v(" Threat level & Threats list")]),a("p",[e._v("A high Threat Level means a more dangerous sector, but with greater chance of finding untouched artifacts (see page 158).")]),a("p",[e._v("At generation, a Threat roll is processed. For each "),a("b",[e._v("six")]),e._v(", the artifact count is increased by one if there are some ruins in that sector. If at least a "),a("b",[e._v("one")]),e._v(" is rolled, an Zone threat is added to the Threat list.")]),a("p",[e._v("The "),a("i",{staticClass:"mdi mdi-dice-6"}),e._v(" button performs a new Threat Roll.")]),a("h3",[a("i",{staticClass:"mdi mdi-terrain"}),e._v(" Type")]),a("p",[e._v("A sector can have a type. Setting the type will just have a cosmetic effect by changing the color of that sector on the Zone map.")]),a("h3",[a("i",{staticClass:"mdi mdi-image"}),e._v(" Environment")]),a("p",[e._v("Determines the general terrain of the sector.")]),a("h3",[a("i",{staticClass:"mdi mdi-map-marker"}),e._v(" Ruins")]),a("p",[e._v("Decides the dominant ruin in the sector.")]),a("h3",[a("i",{staticClass:"mdi mdi-file-document"}),e._v(" Description")]),a("p",[e._v("Text describing the sector and its dominant ruin. You may also use this field to add your own notes.")]),a("p",[e._v("The "),a("i",{staticClass:"mdi mdi-download"}),e._v(" button appears if a dominant ruin has been selected and if the textfield is empty. Clicking it will generate a description for the chosen ruin.")]),a("h3",[a("i",{staticClass:"mdi mdi-alert-circle"}),e._v(" Mood")]),a("p",[e._v("Some sectors in the Zone contain neither threats nor artifacts. Some sectors are just empty wasteland, and can be passed quickly by the PCs. To give even sectors like these some life and character, you can choose a mood element, something that catches the PCs’ attention, but is not an immediate threat.")]),a("p",[e._v("Mood types are: People, Nature, Weather, Remains, Events, and Terrain.")]),a("h3",[a("i",{staticClass:"mdi mdi-notebook"}),e._v(" Notes")]),a("p",[e._v("Use this field to add extra notes for the sector.")]),a("h3",[a("i",{staticClass:"mdi mdi-package-variant-closed"}),e._v(" Finds")]),a("p",[e._v("Inventories the resources left to discover:")]),a("ul",{staticClass:"text-info",staticStyle:{"list-style-type":"none"}},e._l(e.$root.findIcons,function(t,i){return a("li",{key:i},[a("v-icon",{attrs:{small:""}},[e._v(e._s(t))]),e._v(" "+e._s(i)+"\r\n\t\t\t\t\t")],1)}),0),a("p",[e._v("The "),a("i",{staticClass:"mdi mdi-cart-arrow-down"}),e._v(" button sets the item's quantity to 0.")]),a("p",[e._v("The "),a("i",{staticClass:"mdi mdi-dice-6"}),e._v(" button rolls a new random quantity for the item.")])]),a("v-divider"),a("h2",{ref:"Contributing",attrs:{id:"Contributing"}},[e._v("Contributing")]),a("div",[a("p",[e._v("You may help the development of Find the Path.")]),a("p",[e._v("For example, translations could easily be added with your languages skills or if you've access to the corebook in another language.")])]),a("v-divider"),a("h2",{ref:"Troubleshooting",attrs:{id:"Troubleshooting"}},[e._v("Troubleshooting")]),a("div",[a("div",{staticClass:"alert alert-info"},[a("h4",[a("i",{staticClass:"mdi mdi-bug"}),e._v(" Bug Report")]),a("p",{staticClass:"text-info"},[e._v("If you encounter any bug or weird behavior, please report it there: "),a("a",{attrs:{href:e.$root.github+"/issues",target:"_blank"}},[e._v("report an issue")]),e._v(".")])]),a("ul",[a("li",[e._v("While opening an existing zonemap JSON file, if you're experiencing an endless loading dialog, it could mean that your file is corrupted. Don't worry, it should be fixable. Contacts the app manager for help.")]),a("li",[e._v("If the application become very slow and laggy after having set a custom background image, the image file is probably too heavy. Try first to compress the image in JPEG format.")])])])],1)],1)],1)},o=[],s=(a("a481"),a("5d73")),n=a.n(s),r={name:"help",data:function(){return{drawer:!1,drawerEntries:[],nightMode:!1}},mounted:function(){var e=this.$refs.helptext.childNodes,t=!0,a=!1,i=void 0;try{for(var o,s=n()(e);!(t=(o=s.next()).done);t=!0){var r=o.value;r.id&&this.drawerEntries.push(r.id)}}catch(l){a=!0,i=l}finally{try{t||null==s.return||s.return()}finally{if(a)throw i}}},methods:{formatTitle:function(e){return e.replace(/_/g," ")},closeHelp:function(){window.close()},goto:function(e){this.drawer=!1;var t=this.$refs[e],a=t.offsetTop-50;window.scrollTo(0,a)}}},l=r,d=(a("9715"),a("2877")),c=a("6544"),h=a.n(c),v=a("7496"),m=a("8336"),u=a("a523"),p=a("ce7e"),_=a("0e8f"),f=a("132d"),g=a("a722"),b=a("8860"),y=a("ba95"),w=a("5d23"),C=a("f774"),k=a("9910"),T=a("71d9"),x=a("2a7f"),S=Object(d["a"])(l,i,o,!1,null,"6d9aa8de",null);t["default"]=S.exports;h()(S,{VApp:v["a"],VBtn:m["a"],VContainer:u["a"],VDivider:p["a"],VFlex:_["a"],VIcon:f["a"],VLayout:g["a"],VList:b["a"],VListTile:y["a"],VListTileContent:w["a"],VListTileTitle:w["b"],VNavigationDrawer:C["a"],VSpacer:k["a"],VToolbar:T["a"],VToolbarItems:x["a"],VToolbarTitle:x["b"]})}}]);
//# sourceMappingURL=chunk-35bf0fa6.d91ecdcf.js.map