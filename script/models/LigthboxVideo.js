export function LightboxVideo(videoName, url) {
    const ext = getExtension(url);
  
    if (ext[0] === 'mp4') {
      const obj = {
        classIdAttr: {
          className: "lightbox_media",
          id : "videoType",
          src: url,
          alt: videoName,
          controls: 'controls',
        },
        textContent: undefined,
        appendTo: "div.lightbox_view",
      };
      const videoElement = createElement(
        obj.classIdAttr,
        obj.textContent,
        obj.appendTo,
      );
     }
    
    console.log("Sorry, unknow format Type");
  }
  