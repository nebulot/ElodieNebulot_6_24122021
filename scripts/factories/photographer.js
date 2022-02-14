/*fonction de reference 
photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
});*/

function photographerFactory(photographer) {
  const { name, portrait, city, country, tagline, price } = photographer;

  const linkPage = "photographer.html?id=" + photographer.id;
  const linkPicture = "./assets/photographers/" + portrait;

  function getUserCardDOM() {
    const linkCard = document.createElement("a");
    const pictureCard = document.createElement("img");
    linkCard.setAttribute("role", "link");
    linkCard.href = linkPage;
    pictureCard.src = linkPicture;
    pictureCard.alt = "";
    const h2 = document.createElement("h2");
    h2.textContent = name;
    linkCard.appendChild(pictureCard);
    linkCard.appendChild(h2);
    const article = document.createElement("article");
    const localisation = document.createElement("h3");
    localisation.textContent = city + "," + " " + country;
    localisation.className = "localisation";
    const taglinePrice = document.createElement("p");
    taglinePrice.innerHTML = tagline + "<br>" + price + "€/jour";
    article.appendChild(localisation);
    article.appendChild(taglinePrice);
    article.innerHtml = linkCard;
    linkCard.appendChild(article);

    return article, linkCard;
  }

  function getUserPicDOM() {
    const linkCard = document.createElement("a");
    const pictureCard = document.createElement("img");
    linkCard.setAttribute("role", "link");
    linkCard.href = linkPage;
    pictureCard.src = linkPicture;
    pictureCard.alt = "";
    pictureCard.appendChild(linkCard);
    return pictureCard;
  }

  function getUserBannerDOM() {
    const article = document.createElement("article");
    const h1 = document.createElement("h1");
    const localisation = document.createElement("h3");
    const tag = document.createElement("p");
    localisation.textContent = city + "," + " " + country;
    localisation.className = "localisation";
    h1.textContent = name;
    tag.innerHTML = tagline;
    article.appendChild(h1);
    article.appendChild(localisation);
    article.appendChild(tag);

    return article;
  }
  return { name, linkPicture, getUserCardDOM, getUserPicDOM, getUserBannerDOM };
}

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
  console.log(media);
  const { id, photographerId, title, video, image, likes, date, price } = media;
  const linkGalleryPage = "photographer.html?id=" + id;
  let linkGalleryPhoto = "./assets/images/" + photographerId + "/";
  if (video) {
    linkGalleryPhoto = linkGalleryPhoto + video;
  } else {
    linkGalleryPhoto = linkGalleryPhoto + image;
  }
  function getUserGalleryDOM() {
    const linkGalleryCard = document.createElement("a");
    let galleryCard;
    if (video) {
      galleryCard = document.createElement("video");
    } else {
      galleryCard = document.createElement("img");
    }

    const lightboxLink = document.querySelectorAll(".media-img");
    linkGalleryCard.setAttribute("role", "link");
    linkGalleryCard.href = linkGalleryPage;
    galleryCard.src = linkGalleryPhoto;
    galleryCard.alt = "";
    linkGalleryCard.appendChild(galleryCard);

    const mediaLegend = document.createElement("figure");
    const mediaLegendTitle = document.createElement("figcaption");
    const mediaLegendLike = document.createElement("i");
    mediaLegendTitle.textContent = title;
    mediaLegendLike.textContent = likes;
    mediaLegend.appendChild(mediaLegendTitle);
    mediaLegend.appendChild(mediaLegendLike);

    return mediaLegend, linkGalleryCard;
  }
  return { title, linkGalleryPhoto, getUserGalleryDOM };
}
