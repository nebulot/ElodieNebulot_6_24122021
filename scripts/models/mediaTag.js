//////IMAGE///////
export function ImageTag(imgTag, imgName, url) {
  const ext = getExtension(imgName);

  if (ext[0] === "jpg") {
    const obj = {
      elementName: `${imgTag}`,
      classIdAttr: {
        className: "photographer-medium_element",
        src: url,
        
      },
      textContent: undefined,
      appendTo: "a.photographer-medium_link",
    };
    return createElement(
      obj.elementName,
      obj.classIdAttr,
      obj.textContent,
      obj.appendTo
    );
  }
  //controle support media is or isn't valid
  console.log("Sorry, this is not a valid format");
}




////VIDEO//////

export function VideoTag(videoTag, videoName, url) {
  const ext = getExtension(videoName);

  if (ext[0] === "mp4") {
    const obj = {
      elementName: `${videoTag}`,
      classIdAttr: {
        className: "photographer-medium_element",
        src: url,
              },
      textContent: undefined,
      appendTo: "a.photographer-medium_link",
    };
    return createElement(
      obj.elementName,
      obj.classIdAttr,
      obj.textContent,
      obj.appendTo
    );
  }
  //controle support media is or isn't valid
  console.log("Sorry, this is not a valid format");
}
