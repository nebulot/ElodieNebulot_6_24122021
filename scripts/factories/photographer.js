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
    localisation.textContent = city + "," +" " + country; 
    localisation.className = "localisation";
    const taglinePrice = document.createElement("p");
    taglinePrice.innerHTML = tagline + "<br>" + price +"€/jour";
    article.appendChild(localisation);
    article.appendChild(taglinePrice);
    article.innerHtml = linkCard;
    linkCard.appendChild(article);
    
    return article, linkCard;
  }
  
function getUserPicDOM()
  {
  const linkCard = document.createElement("a"); 
  const pictureCard = document.createElement("img");
  linkCard.setAttribute("role", "link");
  linkCard.href = linkPage;
  pictureCard.src = linkPicture;
  pictureCard.alt = "";
  pictureCard.appendChild(linkCard);
  return pictureCard ;
}


  function getUserBannerDOM() {
    const article = document.createElement("article");
    const h1 = document.createElement("h1");
    const localisation = document.createElement("h3");
    const tag = document.createElement("p");
    localisation.textContent = city + "," +" " + country; 
    localisation.className = "localisation";
    h1.textContent = name;
    tag.innerHTML = tagline;
    article.appendChild(h1);
    article.appendChild(localisation);
    article.appendChild(tag);
   
    
    return article ;
}
  return { name, linkPicture, getUserCardDOM, getUserPicDOM, getUserBannerDOM };
};
 
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
  const {title, image, likes} = media;
  const linkGalleryPhoto = "./assets/images/" + media.photographerId + id ;

  function getUserGalleryDOM () {
  const cardsMedia = document.createElement("section");
  const cardsMediaImg = document.createElement("a");
  const mediaLegend = document.createElement("div");
  const mediaLegendTitle = document.createElement("p");
  const MediaLegendLike = document.createElement("div");
  const lightboxLink = document.querySelectorAll(".media-img");
  mediaLegendTitle.textContent = `${media.title}`;
  mediaCompteurLike.textContent = `${media.likes}`;
    
  
  mediaLegendTitle.appendChild(cardsMediaImg);
  mediaLegend.appendChild(cardsMediaImg);
  cardsMedia.appendChild(cardsMediaImg);

  
    
    return cardsMedia, cardsMediaImg; 
  }
  return { media, linkGalleryPhoto, getUserGalleryDOM};
  
};
