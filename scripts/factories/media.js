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
    const likes = document.createElement("p");
    likes.textContent = likes;
    const heart = document.createElement("i");
    heart.classList.add(`fas`);
    heart.classList.add(`fa-heart`);
    heart.classList.add(`heart`);
    heart.classList.add(`heart-global`);

    cardsLikes = likes + heart;
    cardsLikes.appendChild(likes);
    cardsLikes.appendChild(heart);
    cardGalleryMedia.appendChild(cardsFooter);

    /*lightboxlink.forEach((link) => {
        link.addEventListerner("click", openLightbox);
      });
    const cardsCompteurLike = document.createElement("p");
    cardsCompteurLike.className = "compteur";
    cardsCompteurLike.setAttribute("aria-label", `likes`);
    //heartLink.setAttribute("aria-label", "Likez cette photo");
    //heartLink.setAttribute("role", "button");
    //heartLink.setAttribute("tabindex", "0");
    cardsCompteurLike.setAttribute("tabindex", "0");
    cardsCompteurLike.setAttribute("aria_label", "Nombre de likes" + likes);
    const heartLink = document.createElement("button");
    heartLink.className = "heart-link";

    cardsLikes.appendChild(cardsCompteurLike, heartLink);
    heartLink.appendChild(heart);
    compteurLikes(totalLikes);
    */

    return cardsFooter, cardGalleryMedia;
  }

  return { title, linkGalleryPicture, getUserGalleryDOM };
}
