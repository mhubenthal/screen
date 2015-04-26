// Listen for commands from: popup html --> background script --> content script
chrome.runtime.onMessage.addListener(function(msg, sender, sendresponse) {
	if (msg.command && (msg.command === 'showScreen')) {
		//makeScreenCanvas();
		mouseDraw();
	} else if (msg.command && (msg.command === 'hideScreen')) {
		hideScreenCanvas();
	} else {}
});

// Test out MouseEvent
function mouseDraw(){
	makeScreenCanvas();
	var canvCtx = (document.getElementById('screenCanvas')).getContext('2d');
	var currentWidth = window.document.body.offsetWidth;
	var currentHeight = window.document.body.offsetHeight;
	document.body.addEventListener('mousedown', function(mDownEvt) {
		canvCtx.fillStyle = 'rgb(0,0,0)';
		canvCtx.fillRect(mDownEvt.clientX, mDownEvt.clientY, 20, 20);
		function mouseMoveTest(mMvEvt) {
			canvCtx.clearRect(0,0,currentWidth,currentHeight);
			canvCtx.fillStyle = 'rgb(0,0,0)';
			canvCtx.fillRect(mMvEvt.clientX, mMvEvt.clientY, 20, 20);
			mMvEvt.stopPropogation();
		}
		function mouseUpTest(mUpEvt) {
			document.body.removeEventListener('mousemove', mouseMoveTest);
			document.body.removeEventListener('mouseup', mouseUpTest);
		}
		document.body.addEventListener('mousemove', mouseMoveTest);
		document.body.addEventListener('mouseup', mouseUpTest);
	});
}

// Hide screen canvas object
function hideScreenCanvas(releaseFlagCallback) {
	var screenContainer = document.getElementById('screenContainer');
	document.body.removeChild(screenContainer);
}

// Create screen canvas object, return canvas context for drawing to
function makeScreenCanvas(releaseFlagCallback) {
	var container = document.createElement('div');
	container.id = 'screenContainer';
	container.style.pointerEvents = 'none';
	var screenCanvas = document.createElement('canvas');
	screenCanvas.id = 'screenCanvas';
	var currentWidth = window.document.body.offsetWidth;
	var currentHeight = window.document.body.offsetHeight;
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
	//ctx.fillStyle = 'rgba(200,0,0,.1)';
	//ctx.fillRect(0, 0, currentWidth, currentHeight);
	for(var i = 10; i < currentWidth-10; i+=11){
		//drawLine(ctx, [i,0], [i,currentHeight]);
		//drawLine(ctx, [0,i], [currentWidth, i]);		
	}
}

// Utility methods for canvas drawing
function drawLine(canvasContext, startXY, endXY) {
	canvasContext.beginPath();
	canvasContext.moveTo(startXY[0], startXY[1]);
	canvasContext.lineTo(endXY[0], endXY[1]);
	canvasContext.lineWidth = 1;
	canvasContext.strokeStyle = '#09E4E8';
	canvasContext.stroke();	
}
