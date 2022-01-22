//factory function create an object 

class Photographer {
  constructor(data, likes) {
    this.id = data.id;
    this.city = data.city;
    this.country = data.country;
    this.name = data.firstname;
    this.picture = data.portrait;
    this.price = data.price;
    this.tagline = data.tagline;
    this.tags = data.tags;
    this.totalLikes = likes;
    console.log(`vous avez selectionné un ${data.price}`);
  }
  

//get all URL link for photographer profil picture
get picture() {
    return `assets/photographers/${this.picture}`
}

get localisation () {
    return `${this.city}, ${this.country}`
}

//titre du document en get
get titleCard() {
    return `${this.name}`
}

//get displayCard on main.js 
get userDisplay() {
    return`
        <article class="section">
    <img src="${portrait} alt=les portraits photo de chaque photographe indépendant"></img>
    <h1>${firstname}</h1>
    <h2>${city} ${country}</h2>
    <h3>${tagline}</h3>
    <p>${price}</p>
    <ul class="hashtag_list">${tags}</ul>
    </article>`
    .join('')
}
};

/*
function photographerFactory(data) {
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
  return { name, picture, getUserCardDOM };
}*/