class 
// Find the canvas element to capture
var canvasElt = document.querySelector('canvas');

// Get the stream
var stream = canvasElt.captureStream(25); // 25 FPS

// Do things to the stream
// E.g. Send it to another computer using an RTCPeerConnection
//      pc is an RTCPeerConnection created elsewhere
pc.addStream(stream);