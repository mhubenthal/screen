// Listen for messages from popup interaction
chrome.runtime.onConnect.addListener(function(port) {
	// Create background script port
	var backgroundPort = chrome.runtime.connect({name: 'screen-background-port'});	
	// Only connect to popup port	
	if(port.name === 'screen-popup-port'){ 	
		port.onMessage.addListener(function(msg) {
 	 		if (msg.action && (msg.action === 'drawScreen')) {
				drawScreen();	
			} else if (msg.action && (msg.action === 'pauseScreen')) {
				pauseScreen();
			} else if (msg.action && (msg.action === 'clearScreen')) {
				clearScreen();
			}	 
		});
	}
});

// App method calls to content scripts
function drawScreen() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		chrome.tabs.sendMessage(tabs[0].id, {command: 'drawScreen'}, function(response){});
	});
}
function pauseScreen() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		chrome.tabs.sendMessage(tabs[0].id, {command: 'pauseScreen'}, function(response){});
	});
}
function clearScreen() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		chrome.tabs.sendMessage(tabs[0].id, {command: 'clearScreen'}, function(response){});
	});
}	
