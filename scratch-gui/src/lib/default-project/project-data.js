import {defineMessages} from 'react-intl';
import sharedMessages from '../shared-messages';

let messages = defineMessages({
    meow: {
        defaultMessage: 'Meow',
        description: 'Name for the meow sound',
        id: 'gui.defaultProject.meow'
    },
    variable: {
        defaultMessage: 'Variable',
        description: 'Name for the default variable',
        id: 'gui.defaultProject.variable'
    },
	sprite: {
        defaultMessage: 'Aibo Recognition',
        description: 'Name for the default sprite',
        id: 'gui.defaultProject.sprite'
	}
});

messages = {...messages, ...sharedMessages};

// use the default message if a translation function is not passed
const defaultTranslator = msgObj => msgObj.defaultMessage;

/**
 * Generate a localized version of the default project
 * @param {function} translateFunction a function to use for translating the default names
 * @return {object} the project data json for the default project
 */
const projectData = translateFunction => {
    const translator = translateFunction || defaultTranslator;
    return ({
        targets: [
            {
                isStage: true,
                name: 'Stage',
                variables: {
					'`jEk@4|i[#Fk?(8x)AV.-my variable': [
                        'Variable',
                        0
                    ]
                },
                lists: {},
                broadcasts: {},
                blocks: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'cd21514d0531fdffb22204e0ec5ed84a',
                        name: translator(messages.backdrop, {index: 1}),
                        md5ext: 'cd21514d0531fdffb22204e0ec5ed84a.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 240,
                        rotationCenterY: 180
                    }
                ],
                sounds: [
				
                ],
                volume: 100
            },
            {
                isStage: false,
                name: "Aibo Recognition",
                variables: {
				},
                lists: {},
                broadcasts: {},
                blocks: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'bcf454acf82e4504149f7ffe07081dbc',
                        name: "Sleeping",
                        bitmapResolution: 1,
                        md5ext: 'bcf454acf82e4504149f7ffe07081dbc.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 48,
                        rotationCenterY: 50
                    }
                ],
                sounds: [
					/*{
                        assetId: '83a9787d4cb6f3b7632b4ddfebf74367',
                        name: translator(messages.pop),
                        dataFormat: 'wav',
                        format: '',
                        rate: 11025,
                        sampleCount: 258,
                        md5ext: '83a9787d4cb6f3b7632b4ddfebf74367.wav'
                    },*/
					/*{"assetId":"ff596dded81647d2b019fe9019e61962","name":"Aibo Recognition VS Melney Overworld Theme","dataFormat":"wav","format":"","rate":48000,"sampleCount":1542427,"md5ext":"ff596dded81647d2b019fe9019e61962.wav"}*/
                ],
                volume: 100,
                visible: true,
                x: 0,
                y: 0,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'left-right'
            }
        ],
        meta: {
            semver: '3.0.0',
            vm: '0.1.0',
            agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36' // eslint-disable-line max-len
        }
    });
};
/*    {
        "name": "Abby",
        "tags": [
            "animals"
        ],
        "isStage": false,
        "variables": {},
        "costumes": [
            {
            "assetId": "bcf454acf82e4504149f7ffe07081dbc",
            "name": "Sleeping",
            "bitmapResolution": 1,
            "md5ext": "bcf454acf82e4504149f7ffe07081dbc.svg",
            "dataFormat": "svg",
            "rotationCenterX": 48,
            "rotationCenterY": 50
            }
        ],
        "sounds": [
        ],
        "blocks": {}
    }*/

export default projectData;
