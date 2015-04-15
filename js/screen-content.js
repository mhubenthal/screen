/*window.addEventListener("load", function() {
	chrome.extension.sendMessage({
		type: "dom-loaded",
		data: {
			myProperty: "value"
		}
	});
}, true);

// Open up communication channel between page and extension
var port = chrome.runtime.connect({name: "screen-channel"});
//port.postMessage({myProperty: "testing out screen"});
port.onMessage.addListener(function(msg) {
	alert("1. from background-script: " + msg.myProperty);	
});
*/
document.onreadystatechange = function(){
if(document.readyState === 'complete') {
	//makeScreenCanvas();
	//console.log(window.document.body.style.backgroundColor);
}
};

document.body.onload = makeScreenCanvas();

// Create screen canvas object, return canvas context for drawing to
function makeScreenCanvas() {
	var screenCanvas = document.createElement('canvas');
	screenCanvas.id = 'screen';
	var currentWidth = window.innerWidth;
	var currentHeight = window.innerHeight;
	screenCanvas.style.width = currentWidth + 'px';
	screenCanvas.style.height = currentHeight + 'px';
	screenCanvas.style.position = 'absolute';
	screenCanvas.style.zIndex = '10000';
	screenCanvas.style.top = '0';
	screenCanvas.style.left = '0';
	document.body.appendChild(screenCanvas);
	var ctx = screenCanvas.getContext('2d');
	ctx.fillStyle = 'rgba(200,0,0,.2)';
	//ctx.fillRect(0, 0, currentWidth, currentHeight);
	drawLine(ctx, [10,10], [200,200]);		
}

function drawLine(canvasContext, startXY, endXY) {
	canvasContext.beginPath();
	canvasContext.moveTo(startXY[0], startXY[1]);
	canvasContext.lineTo(endXY[0], endXY[1]);
	canvasContext.stroke();	
}
