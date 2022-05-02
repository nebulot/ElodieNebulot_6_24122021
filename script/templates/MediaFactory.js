import { mediaName } from "../utils/mediaUtils.js";
import { GalleryUtils } from "../utils/mediaUtils.js";

export function mediaFactory(media) {
  const { id, photographerId, image, video, title, likes, price, date } = media;

    //const linkGalleryPage = "photographer.html?id=" + id;
    //create gallery media by photographers' id
    

    function getUserGalleryDOM() {
      let cardGalleryMedia = document.createElement("article");
      cardGalleryMedia.className = className;

      const mediumType = GalleryUtils.getMediumType(medium);
      let mediumSrc = String(getMediumSrc());
      
      switch (mediumType) {
        case mediaName.PICTURE: {
          media = new Picture(className, medium, photographerId, mediumSrc);
          render();
          break;
        }
        case mediaName.FILM: {
          media = new Video(
            className,
            medium,
            photographerId,
            mediumSrc,
            controls
          );
          render();
          break;
        }
        default:
          mediumSrc = String("");
      }
      console.log(getUserGalleryDOM);
    }

    function getUserFooterDOM() {
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

      return {image, video,getHeartBtn} ;
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
      mediaSrc = mediaSrc;
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
}

