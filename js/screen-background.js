document.onreadystatechange = function() {
	if(document.readyState === 'complete') {	
		chrome.runtime.onConnect.addListener(function(port) {
 			port.onMessage.addListener(function(msg) {
 	  			if (msg.action === 'showScreen') {
					showScreen(port);	
				} else if (msg.action === 'hideScreen') {
					hideScreen(port);
				}	 
			});
		});
	}
};

function showScreen(thePort) {
	thePort.postMessage({command: 'showScreen'});
}

function hideScreen(thePort) {
	thePort.postMessage({command: 'hideScreen'});
}	