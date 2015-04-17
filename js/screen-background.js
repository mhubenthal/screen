document.onreadystatechange = function() {
	if(document.readyState === 'complete') {	
		chrome.runtime.onConnect.addListener(function(port) {
 			port.onMessage.addListener(function(msg) {
 	  			if (msg.action === 'showScreen') {
					showScreen();	
				} else if (msg.action === 'hideScreen') {
					hideScreen();
				}	 
			});
		});
	}
};

function showScreen() {
	port.postMessage({command: 'showScreen'});
}

function hideScreen() {
	port.postMessage({command: 'hideScreen'});
}	