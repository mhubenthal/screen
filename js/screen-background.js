// Listen for messages from popup interaction
chrome.runtime.onConnect.addListener(function(port) {
	// Create background script port
	var backgroundPort = chrome.runtime.connect({name: 'screen-background-port'});	
	// Only connect to popup port	
	if(port.name === 'screen-popup-port'){ 	
		port.onMessage.addListener(function(msg) {
 	 		if (msg.action && (msg.action === 'showScreen')) {
				showScreen();	
			} else if (msg.action && (msg.action === 'hideScreen')) {
				hideScreen();
			}	 
		});
	}
});

// App method calls to content scripts
function showScreen(releaseFlagCallback) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		chrome.tabs.sendMessage(tabs[0].id, {command: 'showScreen'}, function(response){});
	});
}

function hideScreen(releaseFlagCallback) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		chrome.tabs.sendMessage(tabs[0].id, {command: 'hideScreen'}, function(response){});
	});
}	
