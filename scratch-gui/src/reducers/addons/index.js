var opt = document.createElement('span');
opt.setAttribute("class","menu-bar_menu-bar-item_264qQ menu-bar_hoverable_2sbwj");
opt.setAttribute("style","position:absolute; top:0; right:0;");
opt.innerHTML = "By:&nbsp;&nbsp;&nbsp;&nbsp;<img src='https://uploads.scratch.mit.edu/get_image/user/34495634_32x32.png' style='image-rendering:pixelated;' width=32 height=32>&nbsp;&nbsp;&nbsp;gvbvdxx";
opt.onclick = function () {
	window.open("https://scratch.mit.edu/users/gvbvdxx");
}
var addonsInjected = false;
var vmset = false;
var websocketID = "gvbvdxx-mod-html-cloud-data"; /*Change this to the glitch project name*/
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
		var projectID = urlParams.get("cloud"); /*This will be your id for the project, so it does not overide with any cloud variables.*/
		/*Do not change ANYTHING below this script*/
		window.websocketcloudprovider = null
		function openconnection() {
				console.log("server is connecting..");
				websocketcloudprovider = new WebSocket("wss://"+websocketID+".glitch.me");
				websocketcloudprovider.onopen = function () {
					console.log("connected");
				};
				websocketcloudprovider.onclose = function () {
					console.log("disconnected or failed to connect, retrying...");
					openconnection();
				};
				websocketcloudprovider.onmessage = function (event) {
					try{
					var json = JSON.parse(event.data);
					var clouddata = json[projectID];
					var keys = Object.keys(clouddata);
					var index = 0;
					while (keys.length > index) {
						try{
							vm.postIOData('cloud', {
								varUpdate: { name:keys[index] , value:clouddata[keys[index]] }
							});
						}catch(e){}
						index += 1;
					}
					}catch(e){}
				};
		}
		openconnection();
		window.gvbvdxxCloudProvider = {
			
			requestCloseConnection:function(){
				
			},
			requestOpenConnection:function(){
				
			},
			updateVariable:function (a,b) {
				/*Updates The Variable*/
				try{
				websocketcloudprovider.send(JSON.stringify({
					command:"saveData",
					name:a,
					value:b,
					id:projectID
				}));
				}catch(e){}
			}
		};
function tickRemove() {
	try {
		/*document.getElementsByClassName("button_outlined-button_2f510 menu-bar_menu-bar-button_45YjE community-button_community-button_20Q0O")[0].remove()
		document.getElementsByClassName("button_outlined-button_2f510 menu-bar_menu-bar-button_45YjE share-button_share-button_36Wbh")[0].remove()
		document.getElementsByClassName("menu-bar_menu-bar-item_264qQ menu-bar_hoverable_2sbwj menu-bar_account-nav-menu_1ts18")[0].remove()
		document.getElementsByClassName("menu-bar_menu-bar-item_264qQ menu-bar_hoverable_2sbwj menu-bar_mystuff-button_3aa9D")[0].remove()*/
		//document.getElementsByClassName("menu-bar_main-menu_EyCGw")[0].style.backgroundColor = "#ff794d";
		//document.getElementsByClassName("menu-bar_account-info-group_1CTpL")[0].style.backgroundColor = "#ff794d";
		//document.getElementsByClassName("menu-bar_main-menu_EyCGw")[0].appendChild(opt);
		//document.getElementsByClassName("menu-bar_main-menu_EyCGw")[0].appendChild(opt2);
		//document.getElementsByClassName("modal_header-item_1WbOm modal_header-item-title_1N2BE")[0].style.backgroundColor = "#ff794d";
	} catch(e) {
	}
	try{
		if (vmset == false) {
			latestScratchVM.postIOData("userData",{
				username:"user"+Math.round(Math.random()*100000)
			});
			vmset = true;
			latestScratchVM.setCloudProvider(gvbvdxxCloudProvider); //set my cloud provider to it.
		}
	}catch(e){
		vmset = false;
	}
	try {
		document.getElementsByClassName("loader_background_1-Rwn")[0].style.backgroundColor = "#ff794d";
	} catch(e){}
	try{
	}catch(e){addonsInjected = false;}
	setTimeout(tickRemove,1);
}
setTimeout(tickRemove,1);