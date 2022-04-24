import { ImageTag } from "../models/image";

export function photographersMediaFactory(type,url) {
    switch (type) {
      case 'image':
        ImageTag('img',  url);
        break;
      case 'video':
        VideoTag('video', url);
        break;
      default:
        console.log('Sorry, media not found');
    }
    return photographersMediaFactory
  };
 