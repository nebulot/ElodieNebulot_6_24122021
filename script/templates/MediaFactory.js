import { MediaModel } from "../models/mediaModel.js";
import { mediaName } from "../utils/mediaUtils.js";




export class MediaFactory {  

  //const linkGalleryPage = "photographer.html?id=" + id;
  //create gallery media by photographers' id
  renderMedium(medium, photographerId) {
    let cardGalleryMedia = this.getUserGalleryDOM(medium, photographerId, "photographer-medium_card");
    this.getUserFooterDOM(medium, cardGalleryMedia);
    return cardGalleryMedia;
}


  getUserGalleryDOM(medium, photographerId, className) {
    let cardGalleryMedia = document.createElement("article");
    cardGalleryMedia.className = className;

    const mediumType = medium.getMediumType();
    let mediumSrc = String(medium.getSrc());
    let media;

    switch (mediumType) {
      case mediaName.PICTURE: {
        media = new Picture(className, medium, photographerId, mediumSrc);
        render();
        break;
      }
      case mediaName.FILM: {
        media = new Video(className, medium, photographerId, mediumSrc, controls);
        render();
        break;
      }
      default:
        mediumSrc = String("");
    }
  }

    getUserFooterDOM() {
    let cardsFooter = document.createElement("div");
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

  getHeartBtn() {
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
}

class Media {
  constructor(type, className, media) {
    this.type = type;
    this.className = className;
    this.media = media;
  }

  render() {
    this.cardGalleryMedia = document.createElement(type);
    this.cardGalleryMedia.ClassName = `${this.className}_Element`;
    this.cardGalleryMedia.tabIndex = "0";
  }
}

class Picture extends Media {
  constructor(className, medium, photographerId, mediaSrc) {
    super("img", className, medium);
    photographerId = photographerId;
    mediumSrc = mediaSrc;
  }
  render() {
    super.render();
    cardGalleryMedia.src = "./assets/images/" + photographerId + "/";
  }
}

class Video extends Media {
  constructor(className, medium, photographerId, mediaSrc, controls) {
    super("video", className, medium);
    photographerId = photographerId;
    mediaSrc = mediaSrc;
    controls = controls;
  }
  render() {
    super.render();
    let source = document.createElement("source");
    source.src = "./assets/images/" + photographerId + "/";
    source.type = "video/mp4";
    cardGalleryMedia.controls = controls;
    if (controls) {
      cardGalleryMedia.autoplay = true;
    }
    cardGalleryMedia.appendChild(source);
  }
}


/*if (image) {
    const objElement = document.createElement("a");
    objElement.className = "photographer-medium_link";
    objElement.href = picture;
    objElement.ariaLabel = "cliquer ici pour agrandir";
    //objElement.id = id;
    objElement.addEventListener("click", (e) => {
      console.log(e.target.id);
    });
    galleryCard.appendChild(objElement);
    console.log(objElement);
  }

  if (video) {
    const objElement = document.createElement("a");
    objElement.className = "photographer-medium_link";
    objElement.href = film;
    objElement.alt = title;
    objElement.id = id;
    objElement.ariaLabel = "cliquer ici pour agrandir";
    galleryCard.appendChild(objElement);
  }
  if (image) {
    photographerFactory("image", image, picture);
    const imageElement = document.createElement("img");
    imageElement.src = picture;
    imageElement.className = "photographer-medium_type img_Type";
    imageElement.alt = title;
    galleryCard.appendChild(imageElement);
  }

  if (video) {
    photographerFactory("video", video, film);
    const videoElement = document.createElement("video");
    videoElement.src = film;
    videoElement.className = "photographer-medium_type video_Type ";
    videoElement.alt = title;
    galleryCard.appendChild(videoElement);
  }
*/
//create button like for user to choose yours favorite media
