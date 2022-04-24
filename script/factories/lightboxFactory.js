import { LightboxImage} from "../models/LightboxImage"
import { LightboxVideo } from "../models/LigthboxVideo";

export function lightboxFactory(type, url) {
  switch (type) {
    case 'image':
      LightboxImage('img',  url);
      break;
    case 'video':
      LightboxVideo('video', url);
      break;
    default:
      console.log('Sorry, media not found');
  }
  return lightboxFactory
};

 