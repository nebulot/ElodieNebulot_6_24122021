
/*export const mediaName = {
    PICTURE: "image",
    FILM: "video",
  }*/
  
  export class GalleryUtils {
    
   /*static getMediumSrc(medium) {
    let source = medium.image;
    if (source == null) {
      source = medium.video
      }
    return source;
    
  }*/

   
// media extension 
   static getMediumType(medium) {
    let extension = this.medium.getMediumSrc(medium).split('.').pop();
     if (extension = "jpg") {
      return "image";
    }
    if (extension = "mp4") {
      return "video";
    }
    console.log(extension);
  }

}

