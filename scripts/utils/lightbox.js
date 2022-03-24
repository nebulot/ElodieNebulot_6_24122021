class Lightbox {
  static init() {
    const displayMediaContainer = document.getElementById(
      "photograph-section_media");
      const links = Array.from(displayMediaContainer.querySelectorAll('image[src=".jpg"],video[src=".mp4"]'));
      const gallery = links.map((link) => link.getAttribute("src"));
      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          new Lightbox(e.currentTarget.getAttribute("src"), gallery);
        });
        link.addEventListener("keyup", (e) => {
          if (e.keyCode === 13) {
            e.preventDefault();
            new Lightbox(e.currentTarget.getAttribute("src"), gallery);
          } else {
            return;
          }
        });
      });
    }
  /*const links = document
    .querySelectorAll('a[href=".png"], a[href=".jpg"], a[href=".jpeg"]')
    .forEach((link) =>
      link.addEventListener("click", (e) => {
        e.preventDefault();
        new Lightbox(e.currentTarget.getAttribute("href"));
      }));
}*/

constructor(url, gallery, alt) {
     this.element = this.buildDOM(url,alt);
     this.gallery = gallery
     this.loadMedia(url, alt, gallery);
		 this.loadImage(url);
		 this.onKeyUp = this.onKeyUp.bind(this);
		document.body.appendChild(this.element);
		document.addEventListener("keyup", this.onKeyUp);
	}
 
 
 loadImage(url) {
  let lightboxMediaLink = src.split("/");
  lightboxMediaLink.splice(4, 0, "lightbox_background");
  const formatedLightboxMediaLink = lightboxMediaLink.join("/");
  return formatedLightboxMediaLink;
     /*const image = new image();
     const container = this.element.querySelector(".lightbox_container");
     const loader = document.createElement("div");
     loader.classList.add("ligthbox_loader");
     container.appendChild(loader);
     image.onload = function(){
         console.log("chargé");

     }
     image.src = url*/
}

loadMedia(url, alt) {
  this.url = url;
  this.alt = alt;
  if (url.endsWith(".mp4")) {
    const video = document.createElement("video");
    const container = this.element.querySelector(".lightbox_container");
    const legend = document.createElement("p");
    legend.innerHTML += this.getFormatedTitle(url);
    container.innerHTML = "";
    container.appendChild(video);
    container.appendChild(legend);
    video.setAttribute("controls", "");
    video.src = url;
  } else if (url.endsWith(".jpg")) {
    const image = new Image();
    const container = this.element.querySelector(".lightbox_container");
    const legend = document.createElement("p");
    legend.innerHTML += this.getFormatedTitle(url);
    container.innerHTML = "";
    container.appendChild(image);
    container.appendChild(legend);
    image.alt = this.getFormatedTitle(url);
    image.src = this.formatSrcForMediaLightbox(url);
    image.classList.add("lightbox_title");
  }
}

getFormatedTitle(path) {
  const splitedPath = path.split("/");
  const string = splitedPath[splitedPath.length - 1].split(".")[0];
  const formatedTitle = string.replaceAll("_", " ");
  return formatedTitle;
}

onKeyUp(e) {
  if (e.key === "Escape") {
    this.close(e);
  } else if (e.key === "arrowPrev") {
    this.next(e);
  } else if (e.key === "arrowNext") {
    this.previous(e);
  }
}
close(e) {
  e.preventDefault();
  this.element.classList.add("fadeOut");
  window.setTimeout(() => {
    this.element.parentElement.removeChild(this.element);
  }, 500);
  document.removeEventListener("keyup", this.onKeyUp);
}
next(e) {
  e.preventDefault();
  let i = this.gallery.findIndex((image) => image === this.url);
  if (i === this.gallery.length - 1) {
    i = -1;
  }
  this.loadMedia(this.gallery[i + 1]);
}
previous(e) {
  e.preventDefault();
  let i = this.gallery.findIndex((image) => image === this.url);
  if (i === 0) {
    i = this.gallery.length;
  }
  this.loadMedia(this.gallery[i - 1]);
}


buildDOM() {
    const dom = document.createElement("div");
    dom.classList.add("lightbox_background");
    dom.innerHTML = `<button id="lightbox_close" href="" aria-label="fermer la fenêtre"></button>
    <a class="lightbox_prev" href="" aria-label="Image précédente"></a>
    <a class="lightbox_next" href="" aria-label="Image suivante"></a>
    <div class="lightbox_container" role="dialog" aria-label="">
      <img src="./assets/images/" alt="">
      <p class="lightbox_title">titre</p>
     </div>`;
     dom.querySelector("#lightbox_close").addEventListener("click", this.close.bind(this));
     dom.querySelector(".lightbox_prev").addEventListener("click", this.previous.bind(this));
     dom.querySelector(".lightbox_next").addEventListener("click", this.next.bind(this));
    
  return dom;
  }
}

 