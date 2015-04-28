// Call main method on doc ready
document.onreadystatechange = function() {
	if(document.readyState === 'complete') {	
		runPopup();
	}
};

// Attach listeners to popup
function runPopup() {
	var drawBtn = document.getElementById('draw-screen');
	var pauseBtn = document.getElementById('pause-screen');
	var clearBtn = document.getElementById('clear-screen');
	// Create popup port
	var port = chrome.runtime.connect({name: 'screen-popup-port'});
	drawBtn.onclick = function() {
			port.postMessage({action: 'drawScreen'});
	};
	pauseBtn.onclick = function() {
			port.postMessage({action: 'pauseScreen'});
	};
	clearBtn.onclick = function() {
			port.postMessage({action: 'clearScreen'});
	};	
}


