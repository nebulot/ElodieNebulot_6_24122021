export function LightboxVideo(videoName, getExtension, url) {
    
  
    if (getExtension === 'mp4') {
      const obj = {
        classIdAttr: {
          className: "lightbox_media element_video",
          src: url,
          alt: videoName,
          controls: "controls",
        },
        textContent: undefined,
        appendTo: "div.lightbox_view",
      };
      const videoElement = createElement(
        obj.classIdAttr,
        obj.textContent,
        obj.appendTo,
      );
      return videoElement
     }
    
    console.log("Sorry, unknow format Type");
  }
  