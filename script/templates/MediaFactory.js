export class Media {
  constructor(data) {
    //data stocker donc pas besoin de le remettre en ()

    //const mediumType = GalleryUtils.getMediumType(data);
    //data.source = String(GalleryUtils.getMediumSrc(data));
    //this.data = data;

    console.log(data);
    if (data.type === "image") {
      return new Picture(data);
    } else if (data.type === "video") {
      return new Video(data);
    } else {
      throw "Media Type Unknow";
    }
  }
}

class Picture {
  constructor(data) {
    this.image = data.image;
    this.title = data.title;
    this.photographerId = data.photographerId;
    this.likes = data.likes;
  }
  createHtml() {
    return ` 
    <div class="photographer-medium_card">
    <img class="photographer-medium_gallery" src= "./assets/images/${this.photographerId}/${this.image}"/>
    <footer class="cards-media-footer">
    <p class="cards-media_title">${this.title}</p>
    <div class="cards-media_likes">
    <span class="cards-media_total_likes" title="J'aime">${this.likes}</span>
    <bouton class="cards-media_total_likes_btn" role="button" aria-label="ajouter un j'aime">
    <i class="fas fa-heart" aria-hidden="true" aria-label="likes"></i>
    </button>
    </div>
    </footer>
    </div> `;
  }
}

class Video {
  constructor(data) {
    //super(data);
    this.video = data.video;
    this.videoTitle = data.title;
    this.videoPhotographerId = data.photographerId;
    this.videoLikes = data.likes;
    //return this.createHtml();
  }

  createHtml() {
    //super.createHtml();

    /*let articleContent = document.createElement("article");
    articleContent.className = "photographer-medium_element_card";*/
    return ` 
    <div class="photographer-medium_card">
    <video class="photographer-medium_gallery" src= "./assets/images/${this.videoPhotographerId}/${this.video}"/>
    <footer class="cards-media-footer">
    <p class="cards-media_title">${this.videoTitle}</p>
    <aside class="cards-media_likes">
    <span class="cards-media_total_likes" title="J'aime">${this.videoLikes}</span>
    <bouton class="cards-media_total_likes_btn" role="button" aria-label="ajouter un j'aime">
    <i class="fas fa-heart" aria-hidden="true" aria-label="likes"></i>
    </button>
    </aside>
    </footer>
    </div> `;
  }
}
