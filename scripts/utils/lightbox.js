function lightboxFactory(media) {
  const { id, photographerId, title, video, image } = media;

  const linkGalleryPage = "photographer.html?id=" + id;
  let linkGalleryPicture = "./assets/images/" + photographerId + "/";
  if (video) {
    linkGalleryPicture = linkGalleryPicture + video;
  } else {
    linkGalleryPicture = linkGalleryPicture + image;
  }
  function lightboxDOM() {
    const lightboxPh = document.createElement("aside");
    lightboxPh.className = "lightbox";
    lightboxPh.id = "lightbox-window";
    lightboxPh.setAttribute("role", "link");
    lightboxPh.href = linkGalleryPage;
    let galleryCard;
    if (video) {
      galleryCard = document.createElement("video");
    } else {
      galleryCard = document.createElement("img");
    }
    galleryCard.src = linkGalleryPicture;
    galleryCard.alt = "";
    galleryCard.className = "photographer-medium_element";

    lightboxPh.appendChild(galleryCard);

    const lightboxName = document.createElement("p");
    lightboxName.id = "lightbox-name";
    lightboxName.ariaLabel = "le titre de la photo ou vidéo" + title;

    const closeIcon = document.createElement("i");
    closeIcon.classList.add(`fas`);
    closeIcon.classList.add(`fa-times`);
    closeIcon.id = "close";
    closeIcon.ariaLabel = "Fermer la fenêtre de visualisation";
    closeIcon.onclick = function () {
        lightboxPh.style.display = "none";
      };

    const nextIcon = document.createElement("button");
    nextIcon.classList.add("fa-chevron-right");
    nextIcon.classList.add("fa-solid");
    nextIcon.className = "lightbox_next";
    nextIcon.ariaLabel = "Image suivante";
    nextIcon.textContent = "Suivant";

    const previousIcon = document.createElement("button");
    previousIcon.classList.add("fa-chevron-left");
    previousIcon.classList.add("fa-solid");
    previousIcon.className = "lightbox_previous";
    previousIcon.ariaLabel = "Image précédente";
    previousIcon.textContent = "Précédent";

    lightboxPh.appendChild(closeIcon);
    lightboxPh.appendChild(nextIcon);
    lightboxPh.appendChild(previousIcon);

    return lightboxPh;
  }






return { title, linkGalleryPicture, lightboxDOM };
}
