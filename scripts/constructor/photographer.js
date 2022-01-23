/*function photographerFactory(data) {
  const { name, portrait } = data;
   
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
  return { name, picture, getUserCardDOM };**/

//factory function create an object 
class Photographer {
  constructor(data, likes) {
    this.id = data.id;
    this.city = data.city;
    this.country = data.country;
    this.name = data.name;
    this.picture = data.portrait;
    this.price = data.price;
    this.tagline = data.tagline;
    this.tags = data.tags;
    this.totalLikes = likes;
}
  
//get all URL link for photographer profil picture
get picture() {
    return `./assets/photographers/${this.picture}`
}

get localisation() {
    return `${this.city}, ${this.country}`
}

//titre du document en get
get titleCard() {
    return `${this.name}`
}

//get displayCard on main.js 
get userCard() {
    return `<a href="html/photographer.html">
        <article class="photographer">
    <img src="${this.picture}" alt=les portraits photo de chaque photographe indépendant"></img>
    <h1>${this.name}</h1>
    <h2>${this.city} ${this.country}</h2>
    <h3>${this.tagline}</h3>
    <p>${this.price}</p>
    <ul class="hashtag_list">${this.tags}</ul>
    </article>
    </a>`    
}

get userHeader() {
    return `
    <div class="photograph-section">
    <div class="photograph-section_header">
    <h1 class="photographer-page_header_title">${this.name}</h1>
                <p class="photographer-page_header_localisation">${this.localisation}</p>
                <p class="photographer-page_header_tagline">${this.tagline}</p>
                <ul class="photographer-page_header_taglist">${this.tags.map(tag => `<li href="index.html" class="photographer-page_header_tags">#${tag}</li>`).join(" ")}</ul>
            </div>
            <button class="photographer-page_btn focus-element_secondary"  onclick="displayModal()" aria-label="Contacter le photographe ${this.name}">Contactez-moi
            </button>
            <img src="${this.picture}" class="photographer-page__header__photo" alt="Photographie de profil de ${this.name}">
    </div>
    </div>`
}};