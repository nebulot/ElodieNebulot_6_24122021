import { lightboxFactory } from "../factories/lightboxFactory.js";


//DOM element lightbox//
const body = document.querySelector("body");
const lightbox = document.querySelector(".lightbox");
const lightboxBgd = document.querySelector(".lightbox_background");
const view = document.querySelector(".lightbox_view");
const lightboxTitle = document.querySelector(".lightbox_title");
const prev = document.querySelector(".lightbox_prev");
const next = document.querySelector(".lightbox_next");
const mainContent = document.querySelector("main");
const btnClose = document.querySelector(".lightbox_close");
const lightboxMedia = document.querySelector(".lightbox_media")


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
    ".photographer-medium_type"
  );
  lastMedia.focus();
  lastMedia.classList.remove("selected");
  console.log(lastMedia);
};

//CLOSE LIGHTBOX ("escape" event)
lightbox.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) closeLightbox();
});

console.log(closeLightbox);

// open lightbox when the media selected

export function lightboxModal() {
  //check all medias' links and titles, keep url to manage all, inside lightboxModal
  
  const links = Array.from(
    document.querySelectorAll(".photographer-medium_link")
  );
  
  //links.forEach((link) => link.addEventListener("click", openLightbox));
  for (let i = 0; i < links.length; i++) {
    let mediaLink = links[i];
    console.log(mediaLink);
    
    mediaLink.addEventListener("click", (e) => {
      e.preventDefault();
      // open lightbox
      openLightbox();
      const selectedMedia = links[i].querySelector(
        "photographer-medium_type"
      );
      selectedMedia.classList.add("selected");
      console.log(selectedMedia);
      
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


    // const view Media click on next and previous arrow
       
    
    const viewMedia = () => {
      const selectedMedia = links[i].querySelector(
        ".photographer-medium_type"
      );
      const url = selectedMedia.url;
      //extension
      let getExtension = url.substring(url.lastIndexOf(".") + 1);
      console.log(selectedMedia);
      console.log(links[i]);

      if (getExtension === 'jpg') {
        lightboxFactory("image", url);
        lightboxMedia.src = url;
        window.location.hash = links[i].title + ", closeup view";
        lightboxTitle.textContent = selectedMedia.alt;  
 
       } if (getExtension === 'mp4') {
         lightboxFactory('video', url);
         lightboxMedia.src=url;
         window.location.hash = links[i].title + ", closeup view";
         lightboxTitle.textContent = selectedMedia.alt;
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
