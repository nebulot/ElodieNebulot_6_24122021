function mediaFactory(media) {
  const { id, photographerId, title, image, video, likes, date, price } = media;

  const linkGalleryPage = "photographer.html?id=" + id;
  let linkGalleryPicture = "./assets/images/" + photographerId + "/";
  if (video) {
    linkGalleryPicture = linkGalleryPicture + video;
  } else {
    linkGalleryPicture = linkGalleryPicture + image;
  }

  //create gallery media by photographers' id 

  function getUserGalleryDOM() {
    const cardGalleryMedia = document.createElement("figure");
    cardGalleryMedia.className = "photographer-medium_card";
    const linkGalleryCard = document.createElement("a");
    let galleryCard;
    if (video) {
      galleryCard = document.createElement("video");
      } else {
      galleryCard = document.createElement("img");
         
    }
    galleryCard.id = id;
    linkGalleryCard.setAttribute("role", "link");
    //linkGalleryCard.setAttribute("href", "#");
    linkGalleryCard.addEventListener("click", (e)=>{
      console.log(e.target.id);
    });
    linkGalleryCard.setAttribute("button", "role");
    linkGalleryCard.className = "photographer-medium_link";
    linkGalleryCard.ariaLabel = title + "cliquer ici pour agrandir";
    //linkGalleryCard.href = linkGalleryPage;
    galleryCard.src = linkGalleryPicture;
    galleryCard.alt = "";
    galleryCard.ariaLabel = "vue rapprochée"
    galleryCard.className = "photographer-medium_element";
    linkGalleryCard.appendChild(galleryCard);
    cardGalleryMedia.appendChild(linkGalleryCard);

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
    const heartBtn = document.createElement('button');
    heartBtn.setAttribute("role", "button");
    heartBtn.ariaLabel = "ajouter un j'aime";
    heartBtn.className = "cards-media_total_likes_btn"
    const heart = document.createElement("i");
    heart.className = "fa-heart fas";
    heart.classList.add(`fas`);
    heart.classList.add(`fa-heart`);
    heart.ariaLabel = "likes";
    heartBtn.appendChild(heart);

    return heartBtn;
  }
return { date,price,linkGalleryPage,linkGalleryPicture, getUserGalleryDOM, getHeartBtn};
};
export {mediaFactory};
