export function VideoName(videoName, url) {
  
  let getExtension = url.substring(url.lastIndexOf(".") + 1);

  if (getExtension === "mp4") {
    const obj = document.createElement("video");
    obj.className = "photographer-medium video_element";
    obj.ariaLabel = "";
    obj.controls = "controls";
    obj.textContent = "undefined";
  
    return { obj };
  }

  console.log("Sorry, this is not a valid format ");
}
