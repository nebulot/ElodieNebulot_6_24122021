import {MediaModel} from "../models/mediaModel.js";
import { GalleryUtils } from "../utils/mediaUtils.js";

export function mediaFactory(media) {
  const { id, photographerId, image, video, title, likes, price, date } = media;

  //const currentPhotographer = "photographer.html?id=" + id;
    //create gallery media by photographers' id
      
    function getUserGalleryDOM(medium, currentPhotographer, className, controls = false) {
      
      let cardGalleryMedia = document.createElement("article");
      cardGalleryMedia.className = ".photographer-medium_element";
      cardGalleryMedia.ariaLabel = title;
      
      const mediumType = GalleryUtils.getMediumType(); 
      let mediumSrc = String(medium.getMediumSrc());
      
                       
      switch (mediumType) {
        case "image": {
          let media = new Picture(className, medium, currentPhotographer, mediumSrc);
          media.render();
          break;
        }
        case "video": {
          let media = new Video(
            className,
            medium,
            currentPhotographer,
            mediumSrc,
            controls
          );
          media.render();
          break;
        }
        default:
          mediumSrc = String("");
      }  
      cardGalleryMedia.appendChild(media.htmlElement);
      return cardGalleryMedia;
    }

    
    function getUserFooterDOM(medium, cardGalleryMedia) {
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
       return heartBtn ;
  }


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
      //"./assets/images/" + photographerId + "/";
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
  }
  return {id, photographerId, image, video, price, date, getUserGalleryDOM, getUserFooterDOM}
}
  


