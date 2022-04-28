import { photographerFactory } from "../factories/photographerFactory.js";

export function mediaFactory(media) {
  const { id, photographerId, title, image, video, likes, date, price } = media;

  const linkGalleryPage = "photographer.html?id=" + id;
  const picture = "./assets/images/" + photographerId + "/" + image;
  const film = "./assets/images/" + photographerId + "/" + video;
 
  //choice video or image   
  
  
 
 
  //create gallery media by photographers' id

  function getUserGalleryDOM() {
    const cardGalleryMedia = document.createElement("figure");
    cardGalleryMedia.className = "photographer-medium_card";
    const galleryCard = document.createElement("div");
    galleryCard.className = "photographer-medium_element";
    cardGalleryMedia.appendChild(galleryCard);

    if (image) {
      const objElement = document.createElement("a");
      objElement.className = "photographer-medium_link";
      objElement.src = picture;
      objElement.ariaLabel = "cliquer ici pour agrandir";
      galleryCard.appendChild(objElement);
    }

    if (video) {
      const objElement = document.createElement("a");
      objElement.className = "photographer-medium_link";
      objElement.src = film;
      objElement.alt = title;
      objElement.ariaLabel = "cliquer ici pour agrandir";
      galleryCard.appendChild(objElement);
    }
    if (image) {
      photographerFactory("image", image, picture);
    }
  
    if (video) {
      photographerFactory("video", video, film);
      
    }
   

    const cardsFooter = document.createElement("figcaption");
    cardsFooter.className = "cards-media-footer";
    const cardsTitle = document.createElement("p");
    const photoName = title;
    cardsTitle.textContent = photoName;
    cardsTitle.className = "cards-media_title";
    const cardsLikes = document.createElement("div");
    cardsLikes.className = "cards-media_likes";
    const htmlLikes = document.createElement("span");
    htmlLikes.innerHTML = likes;
    htmlLikes.className = "cards-media_total_likes";
    cardsLikes.appendChild(htmlLikes);
    cardsLikes.appendChild(getHeartBtn());
    cardsFooter.appendChild(cardsTitle);
    cardsFooter.appendChild(cardsLikes);
    cardGalleryMedia.appendChild(cardsFooter);

    return cardGalleryMedia;
  }

  //create button like for user to choose yours favorite media

  function getHeartBtn() {
    const heartBtn = document.createElement("button");
    heartBtn.setAttribute("role", "button");
    heartBtn.ariaLabel = "ajouter un j'aime";
    heartBtn.className = "cards-media_total_likes_btn";
    const heart = document.createElement("i");
    heart.className = "fa-heart fas";
    heart.classList.add(`fas`);
    heart.classList.add(`fa-heart`);
    heart.ariaLabel = "likes";
    heartBtn.appendChild(heart);

    return heartBtn;
  }
  return { date, price, linkGalleryPage, getUserGalleryDOM, getHeartBtn };
}
