chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScxript({
		code: 'document.body.style.backgroundColor="red"'
	});
});
