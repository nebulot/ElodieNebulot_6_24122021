export function ImageTag(imgName, url) {
    const ext = getExtension(imgName);
  
    if (ext[0] === 'jpg') {
      const obj = {
        classIdAttr: {
          className: "photographer-medium_element",
          src: url,
          alt: "",
        },
        textContent: undefined,
        appendTo: "figure.photographer-medium_card",
      };
      return createElement(obj.classIdAttr, obj.textContent, obj.appendTo);
    }
    console.log("Sorry, unknow format Type");
  }
  
  