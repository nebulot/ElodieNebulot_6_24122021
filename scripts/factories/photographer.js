/*fonction de reference 
photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
});*/

function photographerFactory(photographer) {
  const { name, portrait } = photographer;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    article.appendChild(img);
    article.appendChild(h2);
    return article;
  }
  return { name, picture, getUserCardDOM };
};

function photographerPage(photographerById) {
  const { name, portrait } = photographerById;
  const picture = `assets/photographers/${portrait}`;

  function getUserBannerDOM() {
    const article = document.createElement("article");
    const h1 = document.createElement("h1");
    const img = document.createElement("img");
    h1.textContent = name;
    article.appendChild(h1);
    article.appendChild(img);
    return article;
  }
  return { name, picture, getUserBannerDOM };
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
