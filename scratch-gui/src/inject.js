function setTheme() {
	/*Change The Background Color*/
	function loopColors() {
		try {
			document.getElementsByClassName("studio-image")[0].style.imageRendering="pixelated";
		} catch (e) {}
		try {
			document.getElementById("navigation").style.backgroundColor = mainColor;
		} catch(e){}
		
		try {
			document.getElementById("view").style.backgroundColor = bgColor;
			document.getElementById("app").style.backgroundColor = bgColor;
		} catch(e){}
		
		try {
			document.getElementsByClassName("studio-page")[0].style.backgroundColor = bgColor;
		} catch(e){}
		
		try {
			document.getElementsByClassName("innerwrap")[0].style.backgroundColor = mainColor;
			document.getElementsByClassName("pagewrapper")[0].style.backgroundColor = mainColor;
		} catch(e){}
		
		try {
			document.getElementsByClassName("dropdown")[0].style.backgroundColor = mainColor;
		} catch(e){}
		
		try {
			document.getElementsByClassName("footer")[0].style.backgroundColor = mainColor;
		} catch(e){}
		
		try {
			document.getElementsByClassName("title-banner masthead")[0].style.backgroundColor = mainColor;
			document.getElementsByClassName("tab-background")[0].style.backgroundColor = mainColor;
			document.getElementsByClassName("sub-nav tabs")[0].style.backgroundColor = mainColor;
			document.getElementsByClassName("grid")[0].style.backgroundColor = bgColor;
			document.getElementById("projectBox").style.backgroundColor = bgColor;
		} catch(e){}
		
		try {
			document.getElementsByClassName("inplace-textarea studio-title")[0].maxLength = 99999999;
		} catch(e) {
			
		}
		
		try {
			document.getElementsByClassName("title-banner mod-messages")[0].style.backgroundColor = mainColor;
		} catch(e) {
			
		}
		try {
			document.getElementsByClassName("inplace-textarea studio-title")[0].style.fontSize = "18px";
		} catch(e) {
			
		}
		try {
			document.getElementsByClassName("loader_background_2DPrW")[0].style.backgroundColor = mainColor;
			var i = 0;
			var textareas = document.getElementsByClassName("inplace-textarea")[0];
			while (textareas.length > i) {
				textareas.style.backgroundColor = mainColor;
				i += 1;
			}
		} catch(e){}
		setTimeout(loopColors,1);
	}
	loopColors();
}

/*Get Data*/
try {
	var bgColor = "white";
	var mainColor = "#ff4d4d";
	setTheme();
} catch(e) {
	console.error(e);
}