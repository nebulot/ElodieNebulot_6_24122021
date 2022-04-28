export function ImageTag(imgTag, getExtension, url) {
    let getExtension = url.substring(url.lastIndexOf(".") + 1);
    const linkGalleryCard = querySelector(".photographer-medium_link");
          
    if (ext[0] === 'jpg') {
      const galleryCard = document.querySelector(".photographer-medium_element");
        galleryCard.className = "photographer-medium_element";
        galleryCard.src =  url;
        galleryCard.alt = "";
        galleryCard.textContent = undefined,
        linkGalleryCard.appendChild(galleryCard);
       
      return galleryCard;
    }
  
    console.log('Sorry, this is not a valid format of image');
  } 