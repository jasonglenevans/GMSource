var addons = [
	{
		name:"test",
		properties:[
		{
			id:"test",
			type:"button"
		}
		],
		run: (properties) => {
			console.log(properties);
		}
	}
];










//////////////////////////////////////////

var div = document.createElement("div");
div.setAttribute("style","overflow:auto;z-index:100000;margin-top:-200px;margin-left:400px;background-color:#454545;width:800px;height:-400px;position:fixed;top:50%;left:50%;");
var divAddons = document.createElement("div");
div.appendChild(divAddons);
function addAddonSettings(settings) {
	var i2 = 0;
	divAddons.innerHTML += "<br>";
	while (i2 < addons.length) {
		if (settings[i].type == "button") {
			
		}
		divAddons.innerHTML += "<br>";
		i2 += 1;
	}
}
var i1 = 0;
while (i1 < addons.length) {
	
	i1 += 1;
}



module.exports = div;