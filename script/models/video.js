export function VideoTag(getExtension, url) {

  
    if (getExtension === 'mp4') {
          
      const obj = {
        classIdAttr: {
          className: "photographer-medium_element element_video",
          src: url,
          ariaLabel: "",
          controls: "controls",
        },
        textContent: undefined,
        appendTo: "figure.photographer-medium_card",
      };
      const videoElement = createElement(
        obj.classIdAttr,
        obj.textContent,
        obj.appendTo,
      );
      
      return videoElement;
    }
    
    console.log("Sorry, unknow format Type");
  }
  