import { lightboxFactory } from '../factories/lightboxFactory.js';

function lightboxModal() {
  // check all medias' links and titles, keep url to manage all, inside lightboxModal

  const links = Array.from(
    document.querySelectorAll(".photographer-medium_link")
  );
  const titleMedias = Array.from(
    document.querySelectorAll(".cards-media_title")
  );
  
  const imagesUrls = links.map((link) => link.getAttribute("src"));

  // same thinks with photographers and media display

  links.forEach((link) => link.addEventListener("click", getLightbox));

  function getLightbox(e) {
    e.preventDefault();
    const lightboxType = buildDOM();
    const url = e.currentTarget.getAttribute("src");
    lightboxType.buildLightboxDOM(url);
    targetImage(e);
  }

  // create function "target Image" target the media
  //target figcaption > p title when photographers' photo closed

  function targetImage(e) {
    const url = e.currentTarget.querySelector("img, video").getAttribute("src");
    let titleMedia = "";
    titleMedia = e.currentTarget
      .closest(".photographer-medium_card")
      .querySelector("figcaption > a");
    loadImage(titleMedia, url);
   //title media n'hexiste pas ici
  }

  // last create load media to change the cards with next and previous or to close the window

  function loadImage(titleMedia, url) {
    const lightboxContainer = document.querySelector(".lightbox_container");
    lightboxContainer.innerHTML = "";
    const btnClose = document.querySelector(".lightbox_close");
    getImage(titleMedia, url);

    document.querySelector(".lightbox_next").addEventListener("click", next);
    document
      .querySelector(".lightbox_prev")
      .addEventListener("click", previous);
    document
      .querySelector(".lightbox_background")
      .addEventListener("keyup", changeMedia);
    document
      .querySelector(".lightbox_background")
      .addEventListener("keyup", onKeyUp);
    document.querySelector(".lightbox_close").addEventListener("click", close);
    document
      .querySelector(".lightbox_close")
      .addEventListener("keyup", onKeyUp);

    setTimeout(() => {
      function onFocus() {
        btnClose.focus();
      }
      onFocus();
    }, 300);
  }

  function getImage(titleMedia, url) {
    const lightboxContainer = document.querySelector(".lightbox_container");
    console.log(url);
    
    //extension
    let getExtension = url.substring(url.lastIndexOf(".") + 1);
    console.log(getExtension);

    if (getExtension[0] === "jpg") {
      lightboxFactory("img", titleMedia);

      const imageElement = document.querySelector(".lightbox-media_element");
      const titleMedia = document.createElement("h2");
      titleMedia.className = "lightbox-media_title lightbox_imgTitle";
      imageElement.appendChild(lightboxContainer);

      // Add a loader into 'container'
      const loader = createElement("div");
      loader.className = "lightbox_loader";
      loader.appendChild(lightboxContainer);

      // Remove the loader when the image has loaded
      imageElement.onload = () => {
        lightboxContainer.removeChild(loader);
      };
    }

    if (getExtension[0] === "mp4") {
      lightboxFactory("video", titleMedia);

      const videoElement = document.querySelector(".lightbox-media_element");
      const titleMedia = document.createElement("h2");
      titleMedia.className = "lightbox-media_title lightbox_videoTitle";
      videoElement.appendChild(lightboxContainer);

      const loader = createElement("div");
      loader.className = "lightbox_loader";
      loader.appendChild(lightboxContainer);

      // Remove the loader when the video data have loaded
      videoElement.onload = () => {
        lightboxContainer.removeChild(loader);
        console.log(titleMedia);
      };
    }
  }

  // close lightbox on keyboard
  function onKeyUp(e) {
    if (e.key === "Escape") {
      close(e);
    } else if (e.key === "Enter") {
      close(e);
    }
  }

  //second option close lightbox with mouse

  function close(e) {
    e.preventDefault();
    let src = "";
    if (e.currentTarget.querySelector(".lightbox_container")) {
      src = e.currentTarget
        .querySelector(".lightbox_container .lightbox-media_element")
        ;
    } else if (e.currentTarget.closest(".lightbox")) {
      src = e.currentTarget
        .closest(".lightbox")
        .querySelector(".lightbox_container .lightbox-media_element")
        ;
    }

    document
      .querySelector(".lightbox_close")
      .removeEventListener("keyup", onKeyUp);
    document
      .querySelector(".lightbox_close")
      .removeEventListener("click", close);
    document
      .querySelector(".lightbox_background")
      .removeEventListener("keyup", onKeyUp);
  

  function focusOnClose() {
    const focusOnClose = document.querySelector('.photographer-medium_link[href="${href}"]');
    focusOnClose.focus();
  }

  focusOnClose();
  document.querySelector('.lightbox_background').remove();
}







  // function next and previous media
  function next() {
    let titleMedia = document.querySelector(
      ".lightbox_container p"
    ).textContent;
    let url = document
      .querySelector(".lightbox_container .lightbox-media_element")
      .getAttribute("src");
    const lightboxMedia = document.querySelector(".lightbox-media_element");
    const lightboxTitle = document.querySelector(".lightbox-media_title");

    let currentIndex = imagesUrls.findIndex((mediaUrl) => mediaUrl === url);
    let nextUrl = "";
    let nextTitleMedia = "";
    if (currentIndex === imagesUrls.length - 1) {
      currentIndex = -1;
    }

    nextUrl = imagesUrls[currentIndex + 1];
    nextTitleMedia = titleMedias[currentIndex + 1].textContent;
    lightboxMedia.remove();
    lightboxTitle.remove();

    url = nextUrl;
    titleMedia = nextTitleMedia;

    document.querySelector(".lightbox_next").removeEventListener("click", next);
    document
      .querySelector(".lightbox_prev")
      .removeEventListener("click", previous);
    document
      .querySelector(".lightbox_background")
      .removeEventListener("keyup", changeMedia);

    loadImage(titleMedia, url);
  }

  // previous media

  function previous() {
    let titleMedia = document.querySelector(
      ".lightbox_container p"
    ).textContent;
    let url = document
      .querySelector(".lightbox_container .lightbox-media_element")
      .getAttribute("src");
    const lightboxMedia = document.querySelector(".lightbox-media_element");
    const lightboxTitle = document.querySelector(".lightbox-media_title");

    let currentIndex = imagesUrls.findIndex((mediaUrl) => mediaUrl === url);
    let previousUrl = "";
    let previousTitleMedia = "";
    if (currentIndex === 0) {
      currentIndex = imagesUrls.length;
    }

    previousUrl = imagesUrls[currentIndex - 1];
    previousTitleMedia = titleMedias[currentIndex - 1].textContent;

    // Remove the heading and media before creating the following
    lightboxMedia.remove();
    lightboxTitle.remove();

    url = previousUrl;
    titleMedia = previousTitleMedia;

    document.querySelector(".lightbox_next").removeEventListener("click", next);
    document
      .querySelector(".lightbox_prev")
      .removeEventListener("click", previous);
    document
      .querySelector(".lightbox_background")
      .removeEventListener("keyup", changeMedia);

    loadImage(titleMedia, url);
  }

  function changeMedia(e) {
    if (e.key === "ArrowRight") {
      next();
    }
    if (e.key === "ArrowLeft") {
      previous();
    }
  }
}

// create the modal html lightbox this is the container with the media
function buildDOM() {
  const buildLightboxDOM = () => {
    const dom = document.createElement("div");
    dom.classList.add("lightbox_background");
    dom.innerHTML = `<button class="lightbox_close" href="" aria-label="fermer la fenêtre"></button>
  <a class="lightbox_prev" href="" aria-label="Image précédente"></a>
  <a class="lightbox_next" href="" aria-label="Image suivante"></a>
  <div class="lightbox_container" href=""></div>`;
    return { dom };
  };
  return { buildLightboxDOM };
}

export { lightboxModal };
