import { GalleryUtils } from "../utils/mediaUtils.js";

export function mediaFactory(media) {
  const { id, photographerId, image, video, title, likes, price, date } = media;

  //const mediaPhotographers = "photographer.html?id=" + id;
  //create gallery media by photographers' id

  function getUserGalleryDOM() {
    const cardGalleryMedia = document.createElement("article");
    cardGalleryMedia.className = ".photographer-medium_element";
    cardGalleryMedia.ariaLabel = title;

    
    let mediaHtml = new Media(media);
    
    
    // renvoie des données brut à l'intérieur de media 
    /*switch (mediumType) {
      case "image": {
        let media = new Picture(media);
        media.render();
        break;
      }
      case "video": {
        let media = new Video(media);
        media.render();
        break;
      }
      default:
        mediumSrc = String("");
    }*/
    cardGalleryMedia.appendChild(mediaHtml);
    return cardGalleryMedia;
  }

  function getUserFooterDOM() {
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

    // cardGalleryMedia.appendChild(cardsFooter);
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
    getUserFooterDOM,
  };
}

class Media {
  constructor(data) {
    //data stocker donc pas besoin de le remettre en ()
    console.log(data);
    const mediumType = GalleryUtils.getMediumType(data);
    data.source = String(GalleryUtils.getMediumSrc(data));
    this.data = data;
    
    if (mediumType === "image") {
      return new Picture(data);
    } else if (mediumType === "video") {
      return new Video(data);
    } else {
      throw "Unknown Media Type";
    }
  }
}

class Picture extends Media {
  constructor(data) {
    super(data);
    return this.createHtml();
  }

  createHtml() {
    let article = document.createElement("article");
    article.innerHtml = `
    <div><img src= "./assets/images/${this.data.photographerId}/${this.data.source}"></div>
    `
    return article;
  }
}

class Video extends Media {
  constructor(data) {
    super(data);
    return this.createHtml();
  }

  createHtml() {
    let article = document.createElement("article");
    article.innerHtml = `
    <div><img src= "./assets/images/${this.data.photographerId}/${this.data.source}"></div>
    `
    return article;
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
