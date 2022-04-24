import { LightboxImage} from "../models/LightboxImage.js"
import { LightboxVideo } from "../models/LigthboxVideo.js";

export function lightboxFactory(type,getExtension, url) {
  switch (type) {
    case 'image':
      LightboxImage('img',getExtension,  url);
      break;
    case 'video':
      LightboxVideo('video',getExtension, url);
      break;
    default:
      console.log('Sorry, media unknow');
  }
};

 