/*export const mediaName = {
    PICTURE: "image",
    FILM: "video",
  }*/

  export class GalleryUtils {
    
   static getMediumSrc(medium) {
    let source = medium.image;
    if (source == null) {
      source = medium.video
    }
    return source;
  }
// media extension 
   static getMediumType(src) {
    let extension = getMediumSrc(src).split(".").pop();
    if (/(jpg)$/gi.test(extension)) {
      return "image";
    }
    if (/(mp4)$/gi.test(extension)) {
      return "video";
    }
  }
}

