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
  constructor (photographer, likes) {
    this.id = photographer.id;
    this.city = photographer.city;
    this.country = photographer.country;
    this.name = photographer.name;
    this.picture = photographer.portrait;
    this.price = photographer.price;
    this.tagline = photographer.tagline;
    this.tags = photographer.tags;
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