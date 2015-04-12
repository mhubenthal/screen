/*function click(e) {
  chrome.tabs.executeScript(null,
      //{code:"document.body.style.backgroundColor='" + e.target.id + "'"}
{code: 'addElement()'}
);
  window.close();
}
*/
document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', addElement);
  }
});

function addElement (bd) {
  // create a new div element 
  // and give it some content 
  var newDiv = document.createElement("div");
	newDiv.style.zIndex = '1000';
	newDiv.style.border = '1px solid red';
//	bd.appendChild(newDiv);	
}	

chrome.runtime.getBackgroundPage(function(backgroundPage){
//	backgroundPage.alert('hello');
	console.log(backgroundPage.document.body);
  var newDiv = backgroundPage.document.createElement("div");
	newDiv.style.zIndex = '1000';
	newDiv.style.border = '1px solid red';
	backgroundPage.document.body.appendChild(newDiv);	
});

