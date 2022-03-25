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

  // display index page //
  function getUserCardDOM() {
    const sectionCard = document.createElement("div");
    const linkCard = document.createElement("a");
    linkCard.className = "photographer-section_link";
    const pictureCard = document.createElement("img");
    linkCard.setAttribute("role", "link");
    linkCard.href = linkPage;
    pictureCard.src = linkPicture;
    pictureCard.alt = "";
    const h2 = document.createElement("h2");
    h2.textContent = name;
    sectionCard.className = "photographer-section_card";
    linkCard.appendChild(pictureCard);
    linkCard.appendChild(h2);
    sectionCard.appendChild(linkCard);
    const article = document.createElement("article");
    const localisation = document.createElement("h3");
    localisation.textContent = city + "," + " " + country;
    localisation.className = "photographer-section_localisation";
    const cardTagline = document.createElement("p");
    cardTagline.textContent = tagline;
    cardTagline.className = "photographer-section_tagline";
    const cardPrice = document.createElement("p");
    cardPrice.innerHTML = price + "€/jour";
    cardPrice.className = "photographer-section_price";

    article.appendChild(localisation);
    article.appendChild(cardTagline);
    article.appendChild(cardPrice);
    article.innerHtml = linkCard;
    sectionCard.appendChild(article);

    return article, sectionCard;
  }

  // link between index page and photograph page

  function getUserPicDOM() {
    const pictureCard = document.createElement("img");
    pictureCard.src = linkPicture;
    pictureCard.alt = "";
    return pictureCard;
  }

  //Photograph's banner "contact me" name and photo//

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

  //button photograph "contact me" open modal "contact form"//

  function getUserContactDOM() {
    const btnContainer = document.createElement("div");
    btnContainer.className = "container-contact_button";
    const btn = document.createElement("button");
    btn.ariaHaspopup='modalForm' 
    btn.id = "contact_button";
    btn.onclick = displayModal;
    btn.ariaLabel = "Veuillez contacter" + name;
    btn.textContent = "Contactez-moi";
    btn.className = "form-submit_btn ";
    btnContainer.appendChild(btn);

    return btnContainer;
  }

  // section compteur like media //

  function userCompteurLikes() {
    let htmlLikes = document.querySelectorAll(".cards-media_total_likes");
    let totalSom = 0;
    htmlLikes.forEach(function (like) {
      let ajoutLike = Number(like.innerHTML);
      totalSom += ajoutLike;
      
    });
    return totalSom;
    
  }

  function getUserFooter() {
    const containerLegend = document.createElement("div");
    containerLegend.setAttribute("class", "compteur-section_like_aside");

    const compteurTotalLike = document.createElement("span");
    compteurTotalLike.textContent = userCompteurLikes();
    compteurTotalLike.id = "compteur-section_like_total";
    compteurTotalLike.className = "like_total";
    compteurTotalLike.ariaLabel =
      "Nombre total de j'aime" + userCompteurLikes();
    const totalLikeHeart = document.createElement("i");
    totalLikeHeart.className = "compteur-section_like_total_heart";
    totalLikeHeart.classList.add(`fas`);
    totalLikeHeart.classList.add(`fa-heart`);
    totalLikeHeart.ariaLabel = "likes";
    const compteurTotalPrice = document.createElement("p");
    compteurTotalPrice.className = "compteur-section_price";
    compteurTotalPrice.ariaLabel = "Tarif du photographe par jour";
    compteurTotalPrice.innerHTML = price + "€/jour";
    containerLegend.appendChild(compteurTotalLike);
    containerLegend.appendChild(totalLikeHeart);
    containerLegend.appendChild(compteurTotalPrice);

    return containerLegend;
  }
  return {
    name,
    linkPicture,
    getUserCardDOM,
    getUserPicDOM,
    getUserBannerDOM,
    getUserContactDOM,
    userCompteurLikes,
    getUserFooter,
  };
}
