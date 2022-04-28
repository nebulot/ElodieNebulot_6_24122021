import { ImageName } from "../models/image.js";
import { VideoName } from "../models/video.js";


export function photographerFactory(type, mediaName, url) {
    switch (type) {
      case 'image':
        ImageName('img', mediaName, url);
        break;
      case 'video':
        VideoName('video', mediaName, url);
        break;
      default:
        
        console.log('Sorry, media unknow');
    }
  }
  
  