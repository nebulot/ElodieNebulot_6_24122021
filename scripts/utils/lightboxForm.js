import { lightboxFactory } from "../factories/lightboxFactory.js";

//DOM element lightbox//
const body = document.querySelector("body");
const lightbox = document.querySelector(".lightbox");
const lightboxBgd = document.querySelector(".lightbox_background");
const view = document.querySelector(".lightbox_view");
const lightboxMedia = document.querySelector(".lightbox_media");
const lightboxTitle = document.querySelector(".lightbox_title");
const prev = document.querySelector(".lightbox_prev");
const next = document.querySelector(".lightbox_next");
const mainContent = document.querySelector("main");
const btnClose = document.querySelector(".lightbox_close");

// Lightbox open // create carroussel
const openLightbox = () => {
  // desactive "main"
  mainContent.setAttribute("arias-hidden", "true");
  // active modal
  lightboxBgd.setAttribute("aria-hidden", "false");
  // stop scroll arriere plan
  body.classList.add("no-scroll");
  // affiche contenu modal
  lightbox.style.display = "flex";
  // ajoute "active" au block qui affiche les elements
  view.classList.add("active");
  btnClose.addEventListener("click", closeLightbox);
};
// CLOSE LIGHTBOX ("click" event)
const closeLightbox = () => {
  mainContent.setAttribute("arias-hidden", "false");
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.style.display = "none";
  view.classList.remove("active");
  // focus sur dernier media choisi
  const lastMedia = document.querySelector(
    ".photographer-medium_element.selected"
  );
  lastMedia.focus();
  lastMedia.classList.remove("selected");
};

//CLOSE LIGHTBOX ("escape" event)
lightbox.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) closeLightbox();
});

console.log(closeLightbox);

// open lightbox when the media selected

export function lightboxModal() {
  //check all medias' links and titles, keep url to manage all, inside lightboxModal
  /*const links = Array.from(
    document.querySelectorAll(".photographer-medium_link")
  );
  let mediaLink = links.map((link) => link.getAttribute("href"));
  links.forEach((link) => link.addEventListener("click", openLightbox));*/
  const links = Array.from(
    document.querySelectorAll(".photographer-medium_link")
  );
  links.forEach((link) => link.addEventListener("click", openLightbox));
  for (let i = 0; i < links.length; i++) {
    let mediaLink = links[i];

    mediaLink.addEventListener("click", (e) => {
      e.preventDefault();
      // open lightbox
      openLightbox();
      let selectedMedia = links[i].querySelector(
        ".photographer-medium_element"
      );
      selectedMedia.classList.add("selected");
      console.log(mediaLink);
      console.log(links);

      // arrow left and right for the navigation
      lightboxNav();
      // url media => url lightbox
      viewMedia();
      // previous media and next media
      previousMedia();
      nextMedia();
    });

    const lightboxNav = () => {
      if (i == 0) {
        prev.style.display = "none";
      }
      if (i > 0) {
        prev.style.display = "block";
      }

      if (i < mediaLink.length) {
        next.style.display = "block";
      }
      if (i == mediaLink.length - 1) {
        next.style.display = "none";
      }
    };

    const viewMedia = () => {
      const selectedMedia = links[i].querySelector(
        ".photographer-medium_element"
      );
      const url = selectedMedia.src;
      //extension
      let getExtension = url.substring(url.lastIndexOf(".") + 1);
      console.log(getExtension);
      const video = document.createElement("video");
      
      if (getExtension === "mp4") {
        // create element video "remove"
        video.classList.add("lightbox_media");
        video.id = "videoType";
      }

      window.location.hash = links[i].title + ", closeup view";
      lightboxMedia.src = selectedMedia.src;
      lightboxMedia.alt = selectedMedia.alt;
      lightboxTitle.textContent = selectedMedia.alt;
      if (typeof selectedMedia.alt === "undefined") {
        lightboxMedia.replaceWith(video);
        window.location.hash = links[i].title + ", closeup view";
        video.src = selectedMedia.src;
        video.alt = selectedMedia.alt;
        lightboxTitle.textContent = "Titre du média";
      } else {
        video.replaceWith(lightboxMedia); 
      }

      lightboxTitle.focus();
    };

    // upload previous media
    const previousMedia = () => {
      let selectedMedia = links[i].querySelector(
        ".photographer-medium_element"
      );
      prev.addEventListener("click", (e) => {
        e.preventDefault();
        selectedMedia.classList.remove("selected");
        i--;
        selectedMedia = links[i].querySelector(".photographer-medium_element");
        // // add "selected to previous media"
        selectedMedia.classList.add("selected");
        lightboxNav();
        viewMedia();
      });

      // use keyboard arrow to move between Media
      window.addEventListener("keydown", (e) => {
        if (e.keyCode === 37) prev.click();
      });
    };

    // upload next media
    const nextMedia = () => {
      let selectedMedia = links[i].querySelector(
        ".photographer-medium_element"
      );
      next.addEventListener("click", (e) => {
        e.preventDefault();
        selectedMedia.classList.remove("selected");
        i++;
        selectedMedia = links[i].querySelector(".photographer-medium_element");
        // add "selected to next media"
        selectedMedia.classList.add("selected");
        lightboxNav();
        viewMedia();
      });

      // use keyboard arrow to move between Media
      window.addEventListener("keydown", (e) => {
        if (e.keyCode === 39) next.click();
      });
    };
  }
}
