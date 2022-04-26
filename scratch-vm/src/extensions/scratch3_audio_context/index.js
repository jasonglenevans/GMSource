// for cross browser compatibility
var blockIconURI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAkdEVYdERlc2NyaXB0aW9uAEdhbWVwYWQuIG1vbm9jaHJvbWUgaWNvbhGLVc0AAANlSURBVHhe7dxRbuIwGIVRmAV0/+vsBhhQkRh1gCTEjn9fnSNVzSNKP67sl54v36fLCUL8uf+GCIImiqCJImiiCJoogiaKoIkiaKIImiiCntT56/HDg6An9DtiUT8IejLifU/QExHzMkFPQszrCHoCYl5P0MWJeRtBFybm7QRdlJg/I+iC3sV8+b4/8JSgixHzPoIuRMz7CboIMbch6ALE3I6gBxNzW4IeSMztCXoQMfch6AHE3I+gDybmvgR9IDH3J+iDiPkYgj6AmI8j6M7EfCxBdyTm4wm6EzGPIegOxDyOoBsT81iCbkjM4wm6ETHXIOgGxFyHoHcScy2C3kHM9Qj6Q2KuSdAfEHNdgt5IzLUJegMx1yfolcQ8B0GvIOZ5CHqBmOci6DfEPB9BvyDmOQn6CTHPS9C/iHlu5+sf6XJ/HuJdQJVUivnZO/Nl+zF0ocVMa44cC8Q8F0G/Ieb5CPoFMc9p6KWwyuVmtkuWS+FrFpoogiaKoIkiaKIImiiCJoqgiSJoogiaKIImiqCJImiiCJoogiaKoIkiaKIImiiCJoqgiSJoogiaKIImiqCJImiiCJoogiaKoIkiaKIImiiCJoqgiSJoogiaKIImiqCJImiiCJoogiaKoIkiaKIImiiCJoqgiSJoogiaKIImiqCJImiiCJoogiaKoIkiaKIImiiCJoqgiSJoogiaKIImiqCJImiiCJoogiaKoIkiaKIImiiCJoqgiXK+fJ8u9+fDnb/uDwVd30tZz95b5c97pGELXTlm5uXIQRRBE2VY0NXPfLcjkWPRfIZeCqtYCrfal8+l8DVHjqulGKz1PAR9t2bhRF2foP9xi9paz03QT1jreQn6BWs9J0EvsNZzEfQKa9ea8QS9gSNIfYLeyFrXJugPWeuaBL2Dta5H0A1Y6zoE3chS1Dei7k/QDa09ggi7H0F3YK3HEXQn1noMQXdmrY8l6AOsXWv2E/SBHEH6E/TBrHVfgh7EWvch6IGsdXuCLsBatyPoIpaivhH1MkEX4giyn6ALWrPWPCfootasNf8TdHGi3kbQE1iz1s7WPwQ9EWu9TNCTEfV7gg4h9B+CntDveMX84D/4E8VCE0XQRBE0UQRNFEETRdBEETRRBE0UQRNF0EQRNFEETRRBE0XQBDmd/gKDn9ES1n9HXQAAAABJRU5ErkJggg==";
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
window.audioctxExtensionData = {
	volume:100
};
class audioctx {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'audioctx',
            name: 'Audio Context',
			blockIconURI: blockIconURI,
            blocks: [
                {
                    opcode: 'playWave',
                    blockType: BlockType.COMMAND,
                    text: 'Play wave frequency [frequency] with [sharp] for [sec]',
                    arguments: {
						sharp: {
							type:ArgumentType.NUMBER,
							defaultValue:100
						},
						sec: {
							type:ArgumentType.NUMBER,
							defaultValue:0.5
						},
						frequency: {
							type:ArgumentType.NUMBER,
							defaultValue:5000
						}
                    }
                },
				{
                    opcode: 'setVolume',
                    blockType: BlockType.COMMAND,
                    text: 'Set Volume To [volume]',
                    arguments: {
						volume: {
							type:ArgumentType.NUMBER,
							defaultValue:100
						}
                    }
                }
            ],
            menus: {
            }
        };
    }

    playWave (args) {
		try {
			window.audiocxtobj = new AudioContext();
			var real = new Float32Array(2);
			var imag = new Float32Array(2);
			var osc = audiocxtobj.createOscillator();
			var gain = audiocxtobj.createGain();
			gain.gain.value = window.audioctxExtensionData.volume / 100;

			real[0] = 0;
			imag[0] = 0;
			real[1] = Number(Cast.toString(args.sharp));
			imag[1] = 0;
			osc.frequency.value = Number(Cast.toString(args.frequency));

			var wave = audiocxtobj.createPeriodicWave(real, imag, {disableNormalization: true});

			osc.setPeriodicWave(wave);

			osc.connect(audiocxtobj.destination);

			osc.start();
			osc.stop(Number(Cast.toString(args.sec)));
		} catch(e) {
		}
    }
	setVolume (args) {
		window.audioctxExtensionData.volume = Number(Cast.toString(args.volume));
	}
}

module.exports = audioctx;