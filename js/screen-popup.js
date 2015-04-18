// Call main method on doc ready
document.onreadystatechange = function() {
	if(document.readyState === 'complete') {	
		runPopup();
	}
};

// Attach listeners to popup
function runPopup() {
	var showBtn = document.getElementById('show-screen');
	var hideBtn = document.getElementById('hide-screen');
	// Create popup port
	var port = chrome.runtime.connect({name: 'screen-popup-port'});
	showBtn.onclick = function() {
			port.postMessage({action: 'showScreen'});
	};
	hideBtn.onclick = function() {
			port.postMessage({action: 'hideScreen'});
	};	
}


