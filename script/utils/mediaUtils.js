export const mediaName = {
    PICTURE: "image",
    FILM: "video",
  }

  export class GalleryUtils {
    
   static getMediumSrc(medium) {
    let source = medium.image;
    if (source == null) {
      source = medium.video;
    }
    return source;
  }
// media extension 
   static getMediumType(medium) {
    let extension = getMediumSrc(medium).split(".").pop();
    if (/(jpg)$/gi.test(extension)) {
      return mediaName.PICTURE;
    }
    if (/(mp4)$/gi.test(extension)) {
      return mediaName.FILM;
    }
  }
}

