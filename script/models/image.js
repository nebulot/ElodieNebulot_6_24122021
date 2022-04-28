export function ImageName(imgName, url) {
  
  let getExtension = url.substring(url.lastIndexOf(".") + 1);

  if ( getExtension === "jpg") {
    const obj = document.createElement("a");
    obj.className = "photographer-medium_img";
    obj.src = url;
    obj.alt = "";
    obj.textContent = undefined;
    
    
    
    
  
  return  { obj } ;
  }
  console.log("Sorry, this is not a valid format");
}
