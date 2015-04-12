window.addEventListener("load", function() {
	chrome.extension.sendMessage({
		type: "dom-loaded",
		data: {
			myProperty: "value"
		}
	});
}, true);

// Open up communication channel between page and extension
var port = chrome.runtime.connect({name: "screen-channel"});
port.postMessage({myProperty: "testing out screen"});
port.onMessage.addListener(function(msg) {
	alert("1. from background-script: " + msg);	
});
