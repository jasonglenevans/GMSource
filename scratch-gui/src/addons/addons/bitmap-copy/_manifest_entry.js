/* generated by pull.js */
const manifest = {
  "editorOnly": true,
  "noTranslations": true,
  "name": "Bitmap images copying",
  "description": "Allows you to copy a bitmap image from the costume editor into the system clipboard, so that you can paste it in other websites or software.",
  "info": [
    {
      "type": "notice",
      "text": "\"Right click → copy\" is not supported. You must press Ctrl+C while a bitmap image is selected.",
      "id": "norightclick"
    }
  ],
  "userscripts": [
    {
      "url": "userscript.js"
    }
  ],
  "dynamicEnable": true,
  "dynamicDisable": true,
  "tags": [],
  "enabledByDefault": true
};
import {clipboardSupported} from "../../environment";
if (!clipboardSupported) manifest.unsupported = true;
export default manifest;
