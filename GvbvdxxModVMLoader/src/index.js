const scratchVM = require("./scratch-vm.js");
const scratchRender = require("./scratch-render.js");
const scratchStorage = require("./scratch-storage.js");
const scratchAudio = require("../../scratch-audio/dist.js");
const scratchSvgRenderer = require("./scratch-svg-renderer.js");
window.Scratch = {
	vm:scratchVM,
	render:scratchRender,
	storage:scratchStorage,
	audio:scratchAudio,
	svgRender:scratchSvgRenderer
}