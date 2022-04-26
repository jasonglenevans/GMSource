var blockIconURI = "data:image/png;base64,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";
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');

//where the real websocket stuff starts

window.webSocketExtension = {
	data: {
		
	},
	tick:function () {
		window.webSocketExtension.ticks += 1;
	},
	speed:0,
	ticks:0,
	ws:null,
	hostName:"global",
	wsURI:"wss://gvbvdxx-mod-cloud-server.glitch.me",
	connected:false,
	connectToServer:function () {
		console.log("Disconnecting the previous websocket...");
		try{
			/*Try to close the previous server before connecting to new one*/
			this.ws.onclose = function () {}; /*Do not try again because we are changing servers*/
			this.ws.close();
		}catch(e){}
		console.log("Connecting to websocket...");
		this.connected = false;/*Set the connected to false so it knows if we are connected*/
		this.ws = new WebSocket(this.wsURI);
		this.ws.onclose = function () {
			console.error("Connect to WebSocket Has Been Disconnected!!");
			console.log("Trying again...");
			this.connected = false;
			window.webSocketExtension.connectToServer();
		}
		this.ws.onopen = function () {
			console.log("Connect to WebSocket Completed!!");
			window.webSocketExtension.connected = true;
		}
		this.ws.addEventListener("message",function (data) {
			var json = JSON.parse(data.data);
			window.webSocketExtension.data = json;
			this.speed = this.ticks;
			this.ticks = 0;
		});
	},
	setVar:function (value,name) {
		try {
			window.webSocketExtension.data[this.hostName+"_"+name] = value;
			this.ws.send(JSON.stringify({
				"command":"setVar",
				"name":this.hostName+"_"+name,
				"value":value
			}));
		}catch(e){}
	},
	sent:false
};
window.webSocketExtension.connectToServer();

//where the blocks start
class websocket {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'websocket',
            name: 'WebSockets',
			blockIconURI: blockIconURI,
            blocks: [
                {
                    opcode: 'connectGlobal',
                    blockType: BlockType.COMMAND,
                    text: 'Reconnect',
                    arguments: {
						
                    }
                },
                /*{
                    opcode: 'connectServer',
                    blockType: BlockType.COMMAND,
                    text: 'Connect to server [ws]',
                    arguments: {
						ws: {
							type:ArgumentType.STRING,
							defaultValue:"wss://gvbvdxx-mod-cloud-server.glitch.me"
						}
                    }
                },*/
                {
                    opcode: 'changeHost',
                    blockType: BlockType.COMMAND,
                    text: 'Set host name to [HostName]',
                    arguments: {
						HostName: {
							type:ArgumentType.STRING,
							defaultValue:"my host name"
						}
                    }
                },
				{
                    opcode: 'setVar',
                    blockType: BlockType.COMMAND,
                    text: 'Set variable: name [name] value [value]',
                    arguments: {
						name: {
							type:ArgumentType.STRING,
							defaultValue:"My variable"
						},
						value: {
							type:ArgumentType.STRING,
							defaultValue:"something (even text is allowed!)"
						}
                    }
                },
				{
                    opcode: 'getVar',
                    blockType: BlockType.REPORTER,
                    text: 'Get variable [name]',
                    arguments: {
						name: {
							type:ArgumentType.STRING,
							defaultValue:"My variable"
						}
                    }
                },
				{
                    opcode: 'getConnected',
                    blockType: BlockType.BOOLEAN,
                    text: 'Is connected?',
                    arguments: {
                    }
                },
                {
                    opcode: 'getHost',
                    blockType: BlockType.REPORTER,
                    text: 'Host Name',
                    arguments: {
                    }
                }
            ],
            menus: {
            }
        };
    }

    connectGlobal (args) {
		try {
			window.webSocketExtension.wsURI = "wss://gvbvdxx-mod-cloud-server.glitch.me";
			window.webSocketExtension.connectToServer();
		} catch(e) {
		}
    }
	connectServer (args) {
		try {
			window.webSocketExtension.wsURI = Cast.toString(args.ws);
			window.webSocketExtension.connectToServer();
		}catch(e){
		}
	}
	changeHost (args) {
		try {
			window.webSocketExtension.hostName = Cast.toString(args.HostName);
		}catch(e){
		}
	}
	setVar (args) {
		try {
			window.webSocketExtension.setVar(Cast.toString(args.value),Cast.toString(args.name));
		}catch(e){
		}
	}
	getVar (args) {
		try {
			var value = window.webSocketExtension.data[window.webSocketExtension.hostName+"_"+Cast.toString(args.name)];
			if (value) {
				return value;
			} else {
				return "0";
			}
		}catch(e){
		}
	}
	onSend (args) {
		try {
			return window.webSocketExtension.sent;
		}catch(e){

		}
	}
	getConnected () {
		if (window.webSocketExtension.connected) {
			return true;
		} else {
			return false;
		}
	}
	getHost () {
		try {
			return window.webSocketExtension.hostName;
		}catch(e){return "<error>";}
	}
}

module.exports = websocket;