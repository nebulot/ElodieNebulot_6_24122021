export function ImageName(imgName, url) {
  
  let getExtension = url.substring(url.lastIndexOf(".") + 1);

  if ( getExtension === "jpg") {
    const obj = document.querySelectorAll("photographer-medium_link");
    obj.className = "photographer-medium";
    obj.src = url;
    obj.alt = "";
    obj.textContent = undefined;
 console.log(obj)
  return  { obj } ;
  }
  console.log("Sorry, this is not a valid format");
}

