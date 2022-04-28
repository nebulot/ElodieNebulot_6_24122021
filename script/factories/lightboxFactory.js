import { imageload } from "../models/imageLightbox.js"
import { videoload } from "../models/videoLightbox.js";

export function lightboxFactory(type, getExtension, url) {
  switch (type) {
    case 'image':
      imageload('img', getExtension, url);
      break;
    case 'video':
      videoload('video', getExtension, url);
      break;
    default:
    
      console.log('Sorry, media unknow');
  }
}

