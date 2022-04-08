import { lightbox, lightboxFactory } from "../factories/lightboxFactory.js";

export function lightboxModal() {
  //check all medias' links and titles, keep url to manage all, inside lightboxModal

  const links = Array.from(
    document.querySelectorAll(".photographer-medium_link")
  );

  const titleMedias = Array.from(
    document.querySelectorAll(".cards-media_title")
  );

  const imagesUrls = links.map((link) => link.getAttribute("href"));

  links.forEach((link) => link.addEventListener("click", getLightbox));

  // same thinks with photographers and media display

  function getLightbox(e) {
    e.preventDefault();
    const lightboxType = lightbox();
    const url = e.currentTarget.getAttribute("href");
    lightboxType.buildLightbox(url);
    targetImage(e);
    console.log(url);
  }

  // create function "target Image" target the media
  //target figcaption > p title when photographers' photo closed

  function targetImage(e) {
    const url = e.currentTarget.getAttribute("href");
    let titleMedia = "";
    titleMedia = e.currentTarget
      .closest(".photographer-medium_card")
      .querySelector("figcaption > figure");
    loadImage(titleMedia, url);
  }
  //title media n'hexiste pas ici

  // last create load media to change the cards with next and previous or to close the window

  function loadImage(titleMedia, url) {
    const lightboxContainer = document.querySelector(".lightbox_container");
    lightboxContainer.innerHTML = "";
    const btnClose = document.querySelector(".lightbox_close");

    getImage(titleMedia, url);
    console.log(titleMedia);

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
      function doFocus() {
        btnClose.focus();
      }
      doFocus();
    }, 300);
  }
function getImage(titleMedia, url) {
  const lightboxContainer = document.querySelector(".lightbox_container");

  //extension
  let getExtension = url.substring(url.lastIndexOf(".") + 1);
  console.log(getExtension);

  if (getExtension[0] === "jpg") {
    lightboxFactory("image", titleMedia, url);
    const imageElement = document.createElement ("image")
    imageElement.className = ".lightbox-media_element";
    const titleMedia = document. createElement("h2")
    titleMedia.className = "lightbox-media_title lightbox_imgTitle";
    lightboxContainer.appendChild(imageElement);
    lightboxContainer.appendChild(titleMedia);

    // Add a loader into 'container'
    const loader = document.createElement("div");
    loader.className = ".lightbox_loader";
    
    // Remove the loader when the image has loaded
    imageElement.onload = () => {
      lightboxContainer.removeChild(loader);
    };
  }

  if (getExtension[0] === "mp4") {
    lightboxFactory("video", titleMedia, url);

    const videoElement = document.createElement("video");
    videoElement.className = ".lightbox-media_element";
    const titleMedia = document. createElement("h2")
    titleMedia.className = "lightbox-media_title lightbox_videoTitle";
    lightboxContainer.appendChild(videoElement);
    lightboxContainer.appendChild(titleMedia);
    
    // Add a loader into 'container'
    const loader = document.createElement("div");
    loader.className = ".lightbox_loader";
    

    // Remove the loader when the image has loaded
    videoElement.onload = () => {
       lightboxContainer.removeChild(loader);
    };
   }
}

//CLOSE LIGHTBOX//
// close lightbox on keyboard
 
function onKeyUp(event) {
  if (event.key === "Escape") {
    close(event);
  } else if (event.key === "Enter") {
    close(event);
  }
}  

//option close lightbox with mouse

  function close(event) {
    event.preventDefault();
    let href = "";
    if (event.currentTarget.querySelector(".lightbox_container")) {
      href = event.currentTarget.querySelector(
        ".lightbox_container .lightbox-media_element"
      ).getAttribute("src");
    } else if (event.currentTarget.closest(".lightbox")) {
      href = event.currentTarget
        .closest(".lightbox")
        .querySelector(".lightbox_container .lightbox-media_element").getAttribute('src');
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
      const focusOnClose = document.querySelector(
        '.photographer-medium_link[href="${href}"]'
      );
      focusOnClose.focus();
    }

    focusOnClose();
    document.querySelector(".lightbox_background").remove();
  }

//NEXT//

  // function next and previous media
  function next() {
    let titleMedia = document.querySelector(
      ".lightbox_container h2"
    );
    let url = document
      .querySelector(".lightbox_container .lightbox-media_element")
      .getAttribute('src');
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
      ".lightbox_container h2"
    ).textContent;
    let url = document
      .querySelector(".lightbox_container .lightbox-media_element")
      .getAttribute("src");
    const lightboxMedia = document.querySelector(".lightbox-media_element");
    const lightboxTitle = document.querySelector(".lightbox-media_title");

    let currentIndex = imagesUrls.findIndex((mediaUrl) => mediaUrl === url);
    console.log(mediaUrl);
    let previousUrl = '';
    let previousTitleMedia = '';
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
