export function LightboxImage(imgName, getExtension, url) {
    
    if (getExtension === 'jpg') {
      const obj = {
        classIdAttr: {
          className: "lightbox_media",
          id:"imageType",
          src: url,
          alt: imgName,
        },
        textContent: undefined,
        appendTo: "div.lightbox_view",
      };
      return createElement(obj.classIdAttr, obj.textContent, obj.appendTo);
    }
    
    console.log("Sorry, unknow format Type");
}