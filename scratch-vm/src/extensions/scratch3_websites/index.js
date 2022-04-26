const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
var blockIconURI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOxAAADsQBlSsOGwAABJFJREFUeF7t1guSojAARVHX5YJ6Pa6mN9OLcZpPFAgg+Bvr9TlVVI02BJNcGQ9nCCJoogiaKIImiqCJImiiCJoogiaKoIkiaKIImiiCJoqgiSJoogiaKIImiqCJImiiCJoogiaKoIkiaKIImiiCJoqgiSJoogiaKIImiqCJImiiCJoogiaKoIkiaKIImiiCJoqgiSJoogiaKIImiqCJImiiCJoogiaKoIkiaKIImiiCJoqgiSJoogiaKIImiqCJImiiCJoogiaKoIkiaKIImiiCJoqgiSJoogiaKIImiqCJImiiCJoogiaKoIkiaKIImiiCJoqgiSJoogiaKIImiqCJImiiCJoogiaKoIkiaKI8Neif0/F8OBzPp5/m1ff563A4H46nc/uSu1jTfV4Y9M/5dLT4j7p/Tfv4v77713/DC4L++l3K9lW3+H9sQZ/t/jUV9OO+vwT9bHevqaAfN1r85uV4Qa9Pm36xq9+Dg/f7Y24/2nEv51zv1xg+0bp/l/PKf9u18XjNMR6z0Y3VjbF2/6s+vsG4x+oDbJjvjTUd3qe8Xc+nO8r91/ZhOM+R9nPM7ce2PXuX5wZ9Q1ms4+8GVJv7czofmwUZrEYJcrhA3WYNImquG3wphvcYjtVdN92ofjNGX6oSyPjc8lma4/rZy7nTqOfGbd4bjLlxvrfVQXf6zzAz2No+lL9N3m4WsL7H0+bwPP8h6PlFboMbBdDoN+vy/vImFZd7VGPV185H3qjPLeNWX8SZjV4e92rbfB9xK+i1v20L+vVz2O+/PKG3BFR0cZQnYHkaLcdSNqseqlw7GWth4cf3XRm3f0pVT+3VDd0630fcCnp+DbcH/Y457PcZQZf/uhaPweKMzq3HWg56utDLG9Lozr2Ovz3o9XFbe+Z7txcH/ZY57PdZQa9FMFECa4/BdYvh/fq4oNfOedibgn7pHPb7+J8ct2wOr/op0N/z6T851sft3D/f7V4c9FvmsN+HBD39fbvddMwSXrXQM0+U6Zfhqt6sMm61f1XQa+MW9893u/uCrsNtlM87fP8dc9jvQ4L+VYKbPNnaa8oqtucMF7DftME1l6Cb47L6ZfEn95695/xG7Ql6bdzrR9ow303mYmssB7e6DzNr2n1BZ+7xtDk8z+cE3eoXc3hMFqaEdTnmFvP3/eay4UYsP0muQVyOmc0YjjsyF3SrnsuWc/aHsBR0Yzx++fvNfSih9kf7ufv3bt2jPXbP4XneGvQ7LIbHnyBoogiaKIImSlzQ/G2CJoqgiSJoogiaKIImiqCJImiiCJoogiaKoIkiaKIImiiCJoqgiSJoogiaKIImiqCJImiiCJoogiaKoIkiaKIImiiCJoqgiSJoogiaKIImiqCJImiiCJoogiaKoIkiaKIImiiCJoqgiSJoogiaKIImiqCJImiiCJoogiaKoIkiaKIImiiCJoqgiSJoogiaKIImiqCJImiiCJoogiaKoIkiaKIImiiCJoqgiSJoogiaKIImiqCJImiiCJoogiaKoIkiaKIImiiCJoqgiSJoogiaKIImiqCJImiCnM//AO46jES4oECTAAAAAElFTkSuQmCC";
let fetchresult = "";
let fetched = false;
let div = document.createElement("div"); //make the dialog div global
document.body.appendChild(div); //put the div in the body element
div.hidden = true;
div.innerHTML = "<center><h1 id='titleDialog'></h1><br><button id='okDialog'>Ok</button></center>"; //Html Code
document.getElementById("okDialog").onclick = function () { //run this when the ok button gets clicked
	div.hidden = true; //hide the dialog
}
div.setAttribute("style","position:fixed; left:0px; top:0px; border-color:grey; border-style:solid; border-width:2px; background-color:white; width:600px; height:200px; z-index:10000000000;");
let stopclicked = false;
try {
document.getElementsByClassName("stop-all_stop-all_15h2t")[0].addEventListener("click",function () {
	stopclicked = true;
})
}catch(e){}
class websitesext {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'websites',
            name: 'Website API',
			blockIconURI: blockIconURI,
            blocks: [
                {
                    opcode: 'fetchblock',
                    blockType: BlockType.COMMAND,
                    text: 'Get Data From [URL] Then Extract From JSON [JSONDTA]',
                    arguments: {
                        URL: {
                            type: ArgumentType.STRING,
                            defaultValue: "https://"
                        },
						JSONDTA: {
                            type: ArgumentType.STRING,
                            defaultValue: "https://"
						}
                    }
                },
                {
                    opcode: 'fetchblockdata',
                    blockType: BlockType.REPORTER,
                    text: 'Result',
                    arguments: {
						
                    }
                },
                {
                    opcode: 'onfetchblock',
                    blockType: BlockType.HAT,
                    text: 'When The Result Is Ready',
                    arguments: {
						
                    }
                },
                {
                    opcode: 'runscriptblock',
                    blockType: BlockType.COMMAND,
                    text: 'Run Javascript: [script]',
                    arguments: {
						script: {
                            type: ArgumentType.STRING,
                            defaultValue: "window.alert('hello world!!');"
						}
                    }
                },
                {
                    opcode: 'displayhtmldialog',
                    blockType: BlockType.COMMAND,
                    text: 'Display HTML Dialog [text]',
                    arguments: {
						text: {
                            type: ArgumentType.STRING,
                            defaultValue: "My dialog."
						}
                    }
                },
                {
                    opcode: 'onprojectstop',
                    blockType: BlockType.HAT,
                    text: 'When The Project Is Stoped',
                    arguments: {
                    }
                }
            ],
            menus: {
            }
        };
    }

    fetchblock (args) {
		try {
			fetch(Cast.toString(args.URL),{mode: 'cors'}).then(result => result.json()).then(function (data) {
				fetchresult = data[Cast.toString(args.JSONDTA)]
				fetched = true
			});
		} catch(e) {
			fetchresult = "error";
		}
    }
    fetchblockdata (args) {
		return fetchresult;
    }
	onfetchblock (args) {
		if (fetched) {
			setTimeout(function () {
				fetched = false;
			},4);
			return true;
		} else {
			return false;
		}
	}
	runscriptblock (args) {
		try{eval(Cast.toString(args.script));}catch(e){}
	}
	displayhtmldialog (args) {
		var text = Cast.toString(args.text);
		document.getElementById("titleDialog").innerHTML = text; //set the text of the dialog
		div.hidden = false;
	}
	onprojectstop () {
		if (stopclicked) {
			setTimeout(function () {
				stopclicked = false;
			},4);
			return true;
		} else {
			return false;
		}
	}
}
module.exports = websitesext;