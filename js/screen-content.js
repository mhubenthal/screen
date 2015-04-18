// Open up communication channel between page and extension
var port = chrome.runtime.connect({name: 'screen-channel'});
port.postMessage({screenInit: true});
console.log(port);
port.onMessage.addListener(function(msg) {
	alert('rcvd msg!');
	if (msg.command === 'showScreen') {
		makeScreenCanvas();
	} else if (msg.command === 'hideScreen') {
		hideScreenCanvas();
	} else {}
});

function hideScreenCanvas() {
	var screenCanvas = document.getElementById('screenCanvas');
	var ctx = screenCanvas.getContext('2d');
	var currentWidth = window.innerWidth;
	var currentHeight = window.innerHeight;
	ctx.clearRect(0,0,currentWidth,currentHeight);
}

// Create screen canvas object, return canvas context for drawing to
function makeScreenCanvas() {
	var container = document.createElement('div');
	container.id = 'screenContainer';
	container.style.pointerEvents = 'none';
	var screenCanvas = document.createElement('canvas');
	screenCanvas.id = 'screenCanvas';
	var currentWidth = window.innerWidth;
	var currentHeight = window.innerHeight;
	screenCanvas.width = currentWidth;
	screenCanvas.height = currentHeight;
	screenCanvas.style.position = 'absolute';
	screenCanvas.style.zIndex = '10000';
	screenCanvas.style.top = '0';
	screenCanvas.style.left = '0';
	screenCanvas.style.pointerEvents = 'none';
	container.appendChild(screenCanvas);
	document.body.appendChild(container);
	var ctx = screenCanvas.getContext('2d');
	ctx.fillStyle = 'rgba(200,0,0,.1)';
	ctx.fillRect(0, 0, currentWidth, currentHeight);
	for(var i = 10; i < currentWidth-10; i+=11){
		drawLine(ctx, [i,0], [i,currentHeight]);
		drawLine(ctx, [0,i], [currentWidth, i]);		
	}
}

function drawLine(canvasContext, startXY, endXY) {
	canvasContext.beginPath();
	canvasContext.moveTo(startXY[0], startXY[1]);
	canvasContext.lineTo(endXY[0], endXY[1]);
	canvasContext.lineWidth = 1;
	canvasContext.strokeStyle = '#09E4E8';
	canvasContext.stroke();	
}
