/*
chrome.runtime.sendMessage({greeting: 'hello'}, function(response) {
	console.log(response.farewell);
});

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse)) {
		console.log(sender.tab ?
			'from a content script:' + sender.tab.url :
			'from the extension');
		if (request.greeting === 'hello'){
			sendResponse({farewell: 'goodbye'});
	});
*/

var port = chrome.runtime.connect({name: 'knockknock'});
port.postMessage({joke: 'Knock knock'});
port.onMessage.addListener(function(msg) {
	if (msg.question === "Who's there?") {
		port.postMessage({answer: "Madame"});
	} else if (msg.question === "Madame who?")
		port.postMessage({answer: "Madame... Bovary"});
});
