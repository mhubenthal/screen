/*chrome.browserAction.setBadgeText({text: "scrn"});

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
			alert("2. received message: "+msg.myProperty+", from content script");
//			port.postMessage({myProperty: "3. thanks for the message background js"});
		});
	}
});*/

// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });
});}
