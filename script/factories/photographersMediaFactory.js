import {ImageTag} from "../models/image.js";
import {VideoTag} from "../models/video.js";
// factory pattern 
export function photographersMediaFactory(type, getExtension, url) {
    switch (type) {
      case 'image':
        ImageTag('img', getExtension,  url);
        break;
      case 'video':
        VideoTag('video',getExtension, url);
        break;
      default:
        console.log("Sorry, media unknow");
    }
  };
 