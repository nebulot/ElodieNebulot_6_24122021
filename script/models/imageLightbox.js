 export function imageload(imgName,url) {
  let getExtension = url.substring(url.lastIndexOf(".") + 1);
  const view = document.querySelector(".lightbox_view");
  
    
  if (getExtension === 'jpg') {
    const lightboxMedia = document.querySelector(".lightbox_media");
    lightboxMedia.className = "lightbox_media";
    lightboxMedia.src = url;
    lightboxMedia.alt = imgName,
    lightboxMedia.textContent = undefined;
    view.appendChild(lightboxMedia);
       
      return {lightboxMedia};
    }
    
    console.log('Sorry, this type is unknow');
  }
  
  
  