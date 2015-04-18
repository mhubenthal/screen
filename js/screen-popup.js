document.onreadystatechange = function() {
	if(document.readyState === 'complete') {	
		runPopup();
	}
};

function runPopup() {
	//var port = chrome.runtime.connect({name: 'popup-port'});
	var showBtn = document.getElementById('show-screen');
	var hideBtn = document.getElementById('hide-screen');
	var port = chrome.runtime.connect({name: 'screen-popup-port'});
	showBtn.onclick = function() {
		port.postMessage({action: 'showScreen'});
	};
	hideBtn.onclick = function() {
		port.postMessage({action: 'hideScreen'});
	};	
}


