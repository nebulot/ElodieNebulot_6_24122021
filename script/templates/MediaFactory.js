import { GalleryUtils } from "../utils/mediaUtils.js";

/*export function mediaFactory(media) {
  const { id, photographerId, image, video, title, likes, price, date } = media;

  //const mediaPhotographers = "photographer.html?id=" + id;
  //create gallery media by photographers' id

  function getUserGalleryDOM() {
    const cardGalleryMedia = document.createElement("article");
    cardGalleryMedia.className = "photographer-medium_element";
    cardGalleryMedia.ariaLabel = title;

    let mediaHtml = new Media(media);
    cardGalleryMedia.appendChild(mediaHtml);
    return cardGalleryMedia;
  }

  /*function getUserFooterDOM() {
    const cardsFooter = document.createElement("div");
    cardsFooter.className = "cards-media-footer";
    const cardsTitle = document.createElement("p");
    const photoName = title;
    cardsTitle.textContent = photoName;
    cardsTitle.className = "cards-media_title";
    const cardsLikes = document.createElement("div");
    cardsLikes.className = "cards-media_likes";
    const htmlLikes = document.createElement("span");
    htmlLikes.innerHTML = likes;
    htmlLikes.className = "cards-media_total_likes";
    cardsLikes.appendChild(htmlLikes);
    cardsLikes.appendChild(getHeartBtn());
    cardsFooter.appendChild(cardsTitle);
    cardsFooter.appendChild(cardsLikes);

    cardGalleryMedia.appendChild(cardsFooter);
  }

  function getHeartBtn() {
    const heartBtn = document.createElement("button");
    heartBtn.setAttribute("role", "button");
    heartBtn.ariaLabel = "ajouter un j'aime";
    heartBtn.className = "cards-media_total_likes_btn";
    const heart = document.createElement("i");
    heart.className = "fa-heart fas";
    heart.classList.add(`fas`);
    heart.classList.add(`fa-heart`);
    heart.ariaLabel = "likes";
    heartBtn.appendChild(heart);
    return heartBtn;
  }
  return {
    id,
    photographerId,
    image,
    video,
    price,
    date,
    getUserGalleryDOM,
    //getUserFooterDOM,
  };
}*/

export class Media {
  constructor(data) {
    //data stocker donc pas besoin de le remettre en ()
    console.log(data);
    const mediumType = GalleryUtils.getMediumType(data);
    //data.source = String(GalleryUtils.getMediumSrc(data));
    this.data = data;

    if (mediumType === "image") {
      return new Picture(data);
    } else if (mediumType === "video") {
      return new Video(data);
    } else {
      throw "Media Type Unknow";
    }
  }
}

class Picture {
  constructor(data) {
    this.data.image = data.image;
		this.data.alt = data.description;
		this.data.title = data.title;
		this.data.PhotographerId = data.photographerId;
		this.data.Likes = data.likes;
    //super(data);
    return this.createHtml();
  }
  createHtml() {
    return ` 
    <div class="photographer-medium_card">
    <img class="photographer-medium_gallery" src= "./assets/images/${this.data.photographerId}/${this.data.source}">
    <footer class="cards-media-footer">
    <p class="cards-media_title" text-content="${this.data.title}"</p>
    <div class="cards-media_likes">
    <span class="cards-media_total_likes" title="J'aime" innerHtml= "${this.data.likes}">
    <bouton class="cards-media_total_likes_btn" role="button" aria-label="ajouter un j'aime">
    <i class="fas fa-heart" aria-hidden="true" aria-label="likes"></i>
    <i class="far fa-heart" aria-hidden="false"></i>
      </button>
    </span>
        </div>
    </footer>
    </div> `;
    }
}

class Video {
  constructor(data) {
    //super(data);
    this.controls = data.controls;
    //return this.createHtml();
  }

  createHtml() {
    super.createHtml();
    let source = document.createElement("source");
    source.src = `./assets/images/${this.data.photographerId}/${this.data.source}`;
    source.type = "video/mp4";
    this.htmlElement.controls = this.data.controls;
    this.htmlElement.appendChild(source);
    /*let articleContent = document.createElement("article");
    articleContent.className = "photographer-medium_element_card";
    articleContent.innerHtml = ` 
    <div class="photographer-medium_card">
    <video controls class="photographer-medium_gallery" src= "./assets/images/${this.data.photographerId}/${this.data.source}" alt="${this._imgAlt}" />
    <footer class="cards-media-footer">
    <p class="cards-media_title" text-content= "${this.data.title}"</p>
    <div class="cards-media_likes">
    <span class="cards-media_total_likes" title="J'aime" innerHtml= "${this.data.likes}" aria-label="Ajouter un j'aime"><i class="far fa-heart" aria-hidden="true"></i></button>
        </div>
    </footer>
    </div> `;

    return articleContent;*/
  }
}

/*
class Media {
  constructor(type, className, media) {
    this.type = type;
    this.className = className;
    this.media = media;
  }

  render() {
    this.htmlElement = document.createElement(type);
    this.htmlElement.ClassName = `${this.className}_Element`;
    this.htmlElement.tabIndex = "0";
  }
}

class Picture extends Media {
  constructor(className, medium, currentPhotographer, mediumSrc) {
    super("img", className, medium);
    this.currentPhotographer = currentPhotographer;
    this.mediumSrc = mediumSrc;
  }
  render() {
    super.render();
    this.htmlElement.src = `/static/${this.currentPhotographer.name.split(' ')[0]}/${this.mediumSrc}`
    //;
  }
}

class Video extends Media {
  constructor(className, medium, currentPhotographer, mediaSrc, controls) {
    super("video", className, medium);
    this.currentPhotographer = currentPhotographer;
    this.mediaSrc = mediaSrc;
    this.controls = controls;
  }
  render() {
    super.render();
    let source = document.createElement("source");
    source.src = `/static/${this.currentPhotographer.name.split(' ')[0]}/${this.mediumSrc}`
    //"./assets/images/" + photographerId + "/";
    source.type = "video/mp4";
    this.htmlElement.controls = this.controls;
    if (this.controls) {
      this.htmlElement.autoplay = true;
    }
    this.htmlElement.appendChild(source);
  }
}*/
