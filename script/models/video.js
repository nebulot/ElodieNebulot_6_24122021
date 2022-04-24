export function VideoTag(videoName, url) {
    const ext = getExtension(videoName);
  
    if (ext[0] === 'mp4') {
      const obj = {
        classIdAttr: {
          className: "photographer-medium_element element_video ",
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
    }
    
    console.log("Sorry, unknow format Type");
  }
  