chrome.browserAction.setBadgeText({text: "scrn"});

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	switch(request.type) {
		case "dom-loaded":
			alert(request.data.myProperty);
		break;
	}
	return true;
});

// Connect to content script port channel
chrome.runtime.onConnect.addListener(function(port) {
	if(port.name === "screen-channel") {
		port.onMessage.addListener(function(msg) {
			alert("2. received message: "+msg+", from content script");
			port.postMessage({myProperty: "3. thanks for the message background js"});
		});
	}
}); 
