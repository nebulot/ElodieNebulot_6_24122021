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
    linkGalleryCard.className = "photographer-medium_link";
    linkGalleryCard.ariaLabel = title + "cliquer ici pour agrandir";
    linkGalleryCard.href = linkGalleryPage;
    galleryCard.src = linkGalleryPicture;
    galleryCard.alt = "";
    galleryCard.className = "photographer-medium_element";

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
    htmlLikes.innerHTML = likes;
    htmlLikes.className = "cards-media_total_likes";
    cardsLikes.appendChild(htmlLikes);
    cardsLikes.appendChild(getHeartBtn());
    cardsFooter.appendChild(cardsTitle);
    cardsFooter.appendChild(cardsLikes);
    cardGalleryMedia.appendChild(cardsFooter);

    return cardsFooter, cardGalleryMedia;
  }

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

  function buildDOM() {
      const lightboxDOM = document.createElement("div");
      lightboxDOM.classList.add("lightbox");
      lightboxDOM.innerHTML = `<button class="lightbox__close">Fermer</button>
        <button class="lightbox__next">Suivant</button>
        <button class="lightbox__prev">Précédent</button>
        <div class="lightbox__container"></div>`;
      lightboxDOM
        .querySelector(".lightbox__close")
        .addEventListener("click", close.bind);
      lightboxDOM
        .querySelector(".lightbox__next")
        .addEventListener("click", next.bind);
      lightboxDOM
        .querySelector(".lightbox__prev")
        .addEventListener("click", prev.bind);
      return lightboxDOM;
    }
  
    function loadImage(url) {
      url = null;
      const srcMedia = new SrcMedia();
      const containerMedia = element.querySelector(".lightbox__container");
      const loader = document.createElement("div");
      loader.classList.add("lightbox__loader");
      containerMedia.innerHTML = "";
      containerMedia.appendChild(loader);
      srcMedia.onload = () => {
        containerMedia.removeChild(loader);
        containerMedia.appendChild(srcMedia);
        url = url;
      };
      srcMedia.src = url;
    }
  
    function next(e) {
      e.preventDefault();
      let i = medias.findIndex((media) => media === url);
      if (i === medias.length - 1) {
        i = -1;
      }
      loadImage(medias[i + 1]);
    }
  
    function prev(e) {
      e.preventDefault();
      let i = medias.findIndex((media) => media === url);
      if (i === 0) {
        i = medias.length;
      }
      loadImage(medias[i - 1]);
    }
      

  return { title, linkGalleryPicture, getUserGalleryDOM, getHeartBtn, buildDOM };
}
