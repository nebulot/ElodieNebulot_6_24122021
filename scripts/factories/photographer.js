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
    cardTagline.textContent = tagline ;
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

