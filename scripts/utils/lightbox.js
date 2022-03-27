class Lightbox {
  static init() {
    const displayMediaContainer = document.getElementById(
      "photograph-section_media");
      const links = Array.from(displayMediaContainer.querySelectorAll('a[href=".jpg"],a[href=".mp4"]'));
      const gallery = links.map((link) => link.getAttribute("href"));
      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          new Lightbox(e.currentTarget.getAttribute("href"), gallery);
        });
        link.addEventListener("keyup", (e) => {
          if (e.keyCode === 13) {
            e.preventDefault();
            new Lightbox(e.currentTarget.getAttribute("href"), gallery);
          } else {
            return;
          }
        
        });
      });
    }
  
    
 
 loadImage(href) {
     const image = new image();
     const container = this.element.querySelector(".lightbox_container");
     const loader = document.createElement("div");
     loader.classList.add("ligthbox_loader");
     container.appendChild(loader);
     image.onload = function(){
         console.log("chargé");
     }};

  
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
     dom.querySelector("#lightbox_close").addEventListener("click", close.bind);
     dom.querySelector(".lightbox_prev").addEventListener("click", prev.bind);
     dom.querySelector(".lightbox_next").addEventListener("click", next.bind);
    
  return dom;
  }
}

 