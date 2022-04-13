function photographersCard(photographer) {
  const { name, id, portrait, city, country, tagline, price } = photographer;

  const linkPicture = "./assets/photographers/" + portrait;

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
    btn.ariaHaspopup = "modalForm";
    btn.id = "contact_button";
    btn.onclick = displayModal;
    btn.ariaLabel = "Veuillez contacter" + "," + name;
    btn.textContent = "Contactez-moi";
    btn.className = "form-submit_btn ";
    btnContainer.appendChild(btn);

    // create modal name ( link with the button "contact me");
    const modal = document.getElementById("background_modal")
    const formName = document.querySelector(".contact_name");
    formName.textContent = name;
    
    return btnContainer
  }

  function userCompteurLikes() {
    let htmlLikes = document.querySelectorAll(".cards-media_total_likes");
    let totalSom = 0;
    htmlLikes.forEach(function (like) {
      let ajoutLike = Number(like.innerHTML);
      totalSom += ajoutLike;
    });
    return totalSom;
  }

  function getUserFooter () {
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
  
  return {id,price, getUserPicDOM, getUserBannerDOM, getUserContactDOM, getUserFooter}
};

export { photographersCard };
