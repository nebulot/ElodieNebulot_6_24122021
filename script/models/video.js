export function videoload(videoName, url) {

  let getExtension = url.substring(url.lastIndexOf(".") + 1);
  const view = document.querySelector(".lightbox_view");
  
    
  if (getExtension === 'mp4') {
    const lightboxMedia = document.querySelector(".lightbox_media");
    lightboxMedia.className = "lightbox_media videoElement";
    lightboxMedia.src = url;
    lightboxMedia.controls = "controls";
    lightboxMedia.alt = videoName,
    lightboxMedia.textContent = undefined;
    view.appendChild(lightboxMedia);
       
      return {lightboxMedia};
    }
    
    console.log('Sorry, this type is unknow');
  }
  
  
        
       
      
      

/*
      const video = document.createElement('video')
      video.src = selectedMedia.src;
      video.alt = selectedMedia.alt;
      video.autoplay = true;
      
  
      const lightboxTitle = document.createElement('h2')
      lightboxTitle.className = 'lightbox_title'
      lightboxTitle.textContent = selectedMedia.alt
      
  
      const view = document.querySelector(".lightbox_view");
      view.textContent = ''
      view.appendChild(video)
      view.appendChild(lightboxTitle)
}*/
