export class Media {
  constructor(data) {
   
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
    <div class="photographer-medium_card" aria-label="${this.title}">
    <a class = "gallery_link" href="#" title="close up view">
    <img class="photographer-medium_gallery" alt="${this.title}" src= "./assets/images/${this.photographerId}/${this.image}"/></a>
    <footer class="cards-media-footer">
    <p class="cards-media_title">${this.title}</p>
    <div class="cards-media_likes">
    <span class="cards-media_total_likes" title="J'aime">${this.likes}</span>
    <bouton class="cards-media_total_likes_btn" role="button" aria-label="ajouter un j'aime">
    <i class="far fa-heart" aria-hidden="true" aria-label="likes"></i>
    </button>
    </div>
    </footer>
    </div> `;
  }
}

class Video {
  constructor(data) {
    this.video = data.video;
    this.videoTitle = data.title;
    this.videoPhotographerId = data.photographerId;
    this.videoLikes = data.likes;
    
   
  }

  createHtml() {
    
    return ` 
    <div class="photographer-medium_card">
    <a class = "gallery_link" href="#" title="close up view">
    <video class="photographer-medium_gallery" alt="${this.videoTitle}" src= "./assets/images/${this.videoPhotographerId}/${this.video}"/></video></a>
    <footer class="cards-media-footer">
    <p class="cards-media_title">${this.videoTitle}</p>
    <aside class="cards-media_likes">
    <span class="cards-media_total_likes" title="J'aime">${this.videoLikes}</span>
    <bouton class="cards-media_total_likes_btn" role="button" aria-label="ajouter un j'aime">
    <i class="far fa-heart" aria-hidden="true" aria-label="likes"></i>
    </button>
    </aside>
    </footer>
    </div> `;
  }
}
