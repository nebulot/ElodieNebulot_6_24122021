//------------------------Photographers' gallery ----------------------//
/*"media": [
  {
    "id": 342550,
    "photographerId": 82,
    "title": "Fashion Yellow Beach",
    "image": "Fashion_Yellow_Beach.jpg",
    "likes": 62,
    "date": "2011-12-08",
    "price": 55
  },*/
function mediaFactory(media) {
  const { id, photographerId, title, video, image, likes, date, price } = media;

  const linkGalleryPage = "photographer.html?id=" + id;
  let linkGalleryPicture = "./assets/images/" + photographerId + "/";
  if (video) {
    linkGalleryPicture = linkGalleryPicture + video;
  } else {
    linkGalleryPicture = linkGalleryPicture + image;
  }

  function getUserGalleryDOM() {
    const cardGalleryMedia = document.createElement("figure");
    const linkGalleryCard = document.createElement("a");
    let galleryCard;
    if (video) {
      galleryCard = document.createElement("video");
    } else {
      galleryCard = document.createElement("img");
    }
    linkGalleryCard.setAttribute("role", "link");
    linkGalleryCard.href = linkGalleryPage;
    galleryCard.src = linkGalleryPicture;
    galleryCard.alt = "";

    linkGalleryCard.appendChild(galleryCard);
    cardGalleryMedia.appendChild(linkGalleryCard);

    const cardsFooter = document.createElement("figcaption");
    cardsFooter.className = "cards-media-footer";
    const cardsTitle = document.createElement("p");
    cardsTitle.textContent = title;
    cardsTitle.className = "cards-media_title";
    const cardsLikes = document.createElement("div");
    cardsLikes.className = "cards-media_likes";
    const htmlLikes = document.createElement("span");
    htmlLikes.textContent = likes;
    htmlLikes.className = "cards-media_total_likes";
    const heartBtn = document.createElement("button");
    heartBtn.className = "cards-media_likes_button";
    const heart = document.createElement("i");
    heart.classList.add(`fas`);
    heart.classList.add(`fa-heart`);
    heart.classList.add(`heart`);
    heart.classList.add(`heart-global`);

    
    cardsLikes.appendChild(htmlLikes);
    cardsLikes.appendChild(heartBtn);
    heartBtn.appendChild(heart);
    cardsFooter.appendChild(cardsTitle);
    cardsFooter.appendChild(cardsLikes);
    cardGalleryMedia.appendChild(cardsFooter);
    

    /*lightboxlink.forEach((link) => {
        link.addEventListerner("click", openLightbox);
      });
    
    */

    return cardsFooter, cardGalleryMedia;
  }

  return { title, linkGalleryPicture, getUserGalleryDOM };
}

/*function compteurFactory {
  const cardsCompteurLike = document.createElement("p");
  
  cardsCompteurLike.setAttribute("aria-label", `likes`);
  heartLink.setAttribute("aria-label", "Likez cette photo");
  heartLink.setAttribute("role", "button");
  heartLink.setAttribute("tabindex", "0");
  cardsCompteurLike.setAttribute("tabindex", "0");
  cardsCompteurLike.setAttribute("aria_label", "Nombre de likes" + likes);
  const heartLink = document.createElement("button");
  heartLink.className = "heart-link";

  cardsLikes.appendChild(cardsCompteurLike, heartLink);
  heartLink.appendChild(heart);
  compteurLikes(totalLikes);
}*/
