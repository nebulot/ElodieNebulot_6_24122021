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
    localisation.textContent = city + " " + country; 
    localisation.className = "localisation";
    const taglinePrice = document.createElement("p");
    taglinePrice.textContent = tagline + price +"€/jour";
    article.appendChild(localisation);
    article.appendChild(taglinePrice);
    article.innerHtml = linkCard;
    linkCard.appendChild(article);
    
    return article, linkCard;
    
  };

  function getUserBannerDOM() {
    const article = document.createElement("article");
    const h1 = document.createElement("h1");
    const img = document.createElement("img");
    h1.textContent = name;
    article.appendChild(h1);
    article.appendChild(img);
    return article;
}
  return { name, linkPicture, getUserCardDOM, getUserBannerDOM };
};
 

/*const PhotographerList = ({ photographer}) => {
      return (
          <>
          <div className="photographer" id={`photographer-${photographer.id}`}>
                  <div className="photographer__img">
                      <Link to={`/${photographer.id}`} className="photographer__img__link">
                          <img src={`${window.location.origin}/img/Photographers_ID_Photos/${photographer.portrait}`} alt={`${photographer.nom} photographer`} />
                          <h2>{photographer.nom}</h2>
                      </Link>
                  </div>
                  <div className="photographer__text">
                      <p className="photographer__text__localisation">{photographer.ville}, {photographer.country || photographer.pays}</p>
                      <p className="photographer__text__desc">{photographer.tagline}</p>
                      <p className="photographer__text__price">{`${photographer.prix}€ /jour`}</p>
                  </div>
                  <ul className="photographer__tag">
                      {photographer.tags.map((tag,index) => {
                          return (
                              <li key={index}>
                                  <span aria-hidden="false">{`#${tag}`}</span>
                              </li>
                          );
                      })}
                  </ul>
          </div>
          </>
      )
  }
*/
