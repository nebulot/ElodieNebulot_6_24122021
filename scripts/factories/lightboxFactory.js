
import {lightboxImageTag, lightboxVideoTag} from "../models/lightboxMediaTag.js";


export function lightbox() {
  const buildLightbox = (url) => {
    const mainContent = document.querySelector("main");
    const lightboxBgd = document.createElement("div");
    lightboxBgd.className = "lightbox_background";
    lightboxBgd.innerHTML = "";
    lightboxBgd.ariaLabel = "Vue rapprochée du média";
    mainContent.appendChild(lightboxBgd)

    const lightboxBox = document.createElement("section");
    lightboxBox.className = "lightbox";
    lightboxBox.setAttribute("role", "dialog");
    lightboxBgd.appendChild(lightboxBox);
  
    const btnClose = document.createElement("button");
    btnClose.className ="lightbox_close";
    btnClose.ariaLabel = "fermer la fênetre des médias";
    lightboxBox.appendChild(btnClose);
  
    const previous = document.createElement("button");
    previous.className = "lightbox_prev";
    previous.ariaLabel = "Média suivant";
    lightboxBox.appendChild(previous);
  
    const next = document.createElement("button");
    next.className = "lightbox_next";
    next.ariaLabel = "Média précédent";
    lightboxBox.appendChild(next);

    const lightboxContainer = document.createElement("div");
    lightboxContainer.className = "lightbox_container";
    lightboxBox.appendChild(lightboxContainer);
        
    return { lightboxBgd }
  }
  return { buildLightbox };
};

export function lightboxFactory(type, mediaName, url) {
    switch (type) {
      case 'image':
        lightboxImageTag('img', mediaName, url);
        break;
      case 'video':
        lightboxVideoTag('video', mediaName, url);
        break;
      default:
        console.log('Sorry, media not found');
    }
    return lightboxFactory
  };
 
 