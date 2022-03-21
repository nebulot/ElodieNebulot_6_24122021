function LightboxDOM() {
  const links = document
    .querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"]')
    .forEach((link) =>
      link.addEventListener("click", (e) => {
        e.preventDefault();
        new Lightbox(e.currentTarget.getAttribute("href"));
      }));
}

function constructor(url) {
     this.element = this.buildDOM(url);
     this.loadImage(url)
    document.body.appendChild(this.element);
  }

 function loadImage(url) {
     const image = new image();
     const container = this.element.querySelector(".lightbox-container");
     const loader = document.createElement("div");
     loader.classList.add("ligthbox-loader");
     container.appendChild(loader);
     image.onload = function(){
         console.log("chargé");

     }
     image.src = url
}

function buildDOM(url) {
    const dom = document.createElement("div");
    dom.classList.add("lightbox_background");
    dom.innerHTML = `<button id="lightbox_close" href="" aria-label="fermer la fenêtre"></button>
    <a class="lightbox_prev" href="" aria-label="image précédente"></a>
    <a class="lightbox_next" href="" aria-label="image suivante"></a>
    <div class="lightbox_container">
      <img src="./assets/images/" alt="">
      <h2 class="lightbox_title">titre</p>
     </div>`;
  return dom;
  }

