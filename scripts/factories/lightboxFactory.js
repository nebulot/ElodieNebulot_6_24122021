export function lightbox() {
  const buildLightbox = () => {
    const body = document.querySelector("body");

    const lightboxBgd = document.createElement("div");
    lightboxBgd.className = "lightbox_background";
    lightboxBgd.innerHTML = "";
    lightboxBgd.ariaLabel = "Vue rapprochée du média";
    body.appendChild(lightboxBgd)

             
    const lightboxBox = document.createElement("section");
    lightboxBox.className = "lightbox";
    lightboxBox.setAttribute("role", "dialog");
    lightboxBgd.appendChild(lightboxBox);
  
    const btnClose = document.createElement("button");
    btnClose.className ="lightbox_close";
    btnClose.ariaLabel = "fermer la fênetre des médias";
    btnClose.innerHTML = "&#10005;";
    lightboxBox.appendChild(btnClose);
  
    const previous = document.createElement("button");
    previous.className = "lightbox_prev";
    previous.ariaLabel = "Média suivant";
    previous.innerHTML = "&#10094;";
    lightboxBox.appendChild(previous);
  
    const next = document.createElement("button");
    next.className = "lightbox_next";
    next.ariaLabel = "Média précédent";
    next.innerHTML = "&#10095;";
    lightboxBox.appendChild(next);

    const lightboxContainer = document.createElement("div");
    lightboxContainer.className = "lightbox_container";
    lightboxBox.appendChild(lightboxContainer);

    return { lightboxBgd }
  }
  return { buildLightbox };
};




export function lightboxFactory(type, titleMedia, url) {
    switch (type) {
      case 'image':
        lightboxImage('img', titleMedia, url);
        break;
      case 'video':
        lightboxVideo('video', titleMedia, url);
        break;
      default:
        console.log('Sorry, media not found');
    }
  };
 
 