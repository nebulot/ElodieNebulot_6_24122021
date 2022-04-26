import { ImageTag} from "../models/image.js"
import { VideoTag } from "../models/video.js";

export function lightboxFactory(type, getExtension, url) {
  if (type === "image") {
    return ImageTag('img',getExtension,  url);
  }else if (type === "video") {
    return VideoTag('video',getExtension, url);
  } else {
    throw 'Sorry, media unknow';
      
  }
};

 