import { ImageTag } from "../models/image";
import { VideoTag } from "../models/video";

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
 