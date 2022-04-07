import { lightbox, lightboxFactory } from "../factories/lightboxFactory.js";

/*export function lightboxModal(titleMedia, url) {
    const displayMediaContainer = document.querySelector('.photograph-section_media');
    const mediatypeFactory = lightboxFactory();
    
  
    const lightboxContainer = document.querySelector('.lightbox_container');
    lightboxContainer.innerHTML = '';
  
           
        //extension
        let getExtension = url.substring(url.lastIndexOf(".") + 1);
        console.log(getExtension);
    
        if (getExtension[0] === "jpg") {
          lightboxFactory("img", titleMedia);
    
          const imageElement = mediatypeFactory.createMediaType('img');
          imageElement = document.querySelector(".lightbox-media_element");
          displayMediaContainer.insertAdjacentHTML('afterbegin', );  
                        
          const imageMediumLightbox = mediatypeFactory.createMediatype('photo-carousel');
          const singleImageLightbox =iImageMediumLightbox.createPhotoCarousel();
          lightboxContainer.insertAdjacentHTML('afterbegin', singleImageLightbox);
        }
            
    
        if (getExtension[0] === "mp4") {
          lightboxFactory("video", titleMedia);
    
          const videoElement = document.querySelector(".lightbox-media_element");
          const titleMedia = document.createElement("h2");
          titleMedia.className = "lightbox-media_title lightbox_videoTitle";
          videoElement.appendChild(lightboxContainer);
    
      console.log(titleMedia);
          };
        }
      }
                  
       
      if (ArrayList.video != null) {
        const videoMedium = mediatypeFactory.createMediatype('video');
        const singleVideo = videoMedium.createVideo(ArrayList, photographerItem);
        displayMediaContainer.insertAdjacentHTML('afterbegin', singleVideo);
  
        const ImageMediumCarousel = mediatypeFactory.createMediatype('video-carousel');
        const singleCarouselVideo = ImageMediumCarousel.createVideoCarousel(ArrayList, photographerItem);
        lightboxContainer.insertAdjacentHTML('afterbegin', singleCarouselVideo);
      }
    });
    likeMedia();

  ////////OPEN IMAGE ON MODAL/////////
  const link = document.querySelectorAll(".photographer-medium_element");
  const lightboxBgd = document.querySelector(".lightbox_background");
  const lightboxBox = document.querySelector(".lightbox");
  const header = document.querySelector(".header-link");
  let mediaID = 1;

  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function (e) {
      mediaID = 1;
      e.preventDefault();
      lightboxBox.classList.add("open");
      lightboxBgd.classList.add("open");
      const photographerPage = document.querySelector(
        ".#photograph-section_media"
      );
      photographerPage.style.filter = "blur(3px)";
      photographerPage.setAttribute("aria-hidden", "true");
      header.style.filter = "blur(3px)";
      mediaID += i;
      mediaCarousel(mediaID);
    });
  }
}


export function lightboxBuild() {
  const app = document.querySelector("#main");

  const lightboxBgd = document.createElement("div");
  lightboxBgd.classList.add("lightbox_background");
  app.insertAdjacentElement("afterbegin", lightboxBgd);
  console.log(app);

  const lightboxBox = document.createElement("section");
  lightboxBox.classList.add("lightbox");
  lightboxBox.setAttribute("role", "dialog");
  lightboxBgd.insertAdjacentElement("afterbegin", lightboxBox);

  const btnClose = document.createElement("button");
  btnClose.classList.add("lightbox_close");
  btnClose.ariaLabel = "fermer la fênetre des médias";
  btnClose.innerHTML = "&#10005;";
  lightboxBox.insertAdjacentElement("afterbegin", btnClose);

  const lightboxContainer = document.createElement("div");
  lightboxContainer.classList.add("lightbox_container");
  lightboxBox.insertAdjacentElement("beforeend", lightboxContainer);

  const previous = document.createElement("button");
  previous.classList.add("lightbox_prev");
  previous.innerHTML = "&#10094;";
  lightboxBox.insertAdjacentElement("beforeend", previous);

  const next = document.createElement("button");
  next.classList.add("lightbox_next");
  next.innerHTML = "&#10095;";
  lightboxBox.insertAdjacentElement("beforeend", next);

  btnClose.addEventListener("click", function () {
    const header = document.querySelector(".header-link");
    lightboxBox.classList.remove("open");
    lightboxBgd.classList.remove("open");
    const photographerPage = document.querySelector(".main");
    photographerPage.setAttribute("aria-hidden", "false");
    photographerPage.style.filter = "";
    header.style.filter = "";
  });
}


export function mediaCarousel(mediaID) {
  const btnClose = document.querySelector(".close");
  btnClose.focus();

  const previous = document.querySelector(".lightbox_prev");
  const next = document.querySelector(".lightbox_next");
  next.addEventListener("focusout", () => {
    btnClose.focus();
  });

  let mediaIndex = 1;

  function lightboxMedias(n) {
    const lightboxMedia = document.querySelectorAll(".lightbox-media_element");
    const lightboxTitle = document.querySelectorAll(".lightbox-media_title");
    const lightboxContainer = document.querySelectorAll(".lightbox_container");

    if (n > lightboxMedia.length) {
      mediaIndex = 1;
    }
    if (n < 1) {
      mediaIndex = lightboxMedia.length;
    }
    for (let i = 0; i < lightboxMedia.length; i++) {
      lightboxMedia[i].style.display = "none";
      lightboxTitle[i].style.display = "none";
      lightboxContainer[i].style.display = "none";
    }

    lightboxMedia[mediaIndex - 1].style.display = "block";
    lightboxContainer[mediaIndex - 1].style.display = "flex";
    lightboxTitle[mediaIndex - 1].style.display = "block";
  }
  ///////SHOW CLICKED SLIDE
  function currentMedia(n) {
    lightboxMedias((mediaIndex = n));
  }

  currentMedia(url);

  //////NEXT OR PREVIOUS SLIDE
  function nextMedia(n) {
    lightboxMedias((mediaIndex += n));
  }

  previous.addEventListener("click", function (e) {
    e.preventDefault();
    nextMedia(-1);
  });

  next.addEventListener("click", function (e) {
    e.preventDefault();
    nextMedia(1);
  });

  window.addEventListener("keydown", function (e) {
    if (e.key == "next") {
      nextMedia(1);
    }
    if (e.key == "prev") {
      nextMedia(-1);
    }
  });
}*/

export function lightboxModal() {
  //check all medias' links and titles, keep url to manage all, inside lightboxModal
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
    const lightboxType = lightbox();
    const url = e.currentTarget.getAttribute("src");
    lightboxType.buildLightbox(url);
    targetImage(e);
  }

  // create function "target Image" target the media
  //target figcaption > p title when photographers' photo closed

  function targetImage(e) {
    const url = e.currentTarget.querySelector("img, video").getAttribute("src");
    let titleMedia = "";
    titleMedia = e.currentTarget
      .closest(".photographer-medium_card")
      .querySelector("figcaption > figure");
    loadImage(titleMedia, url);
    //title media n'hexiste pas ici
  }

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
  console.log(url);

  //extension
  let getExtension = url.substring(url.lastIndexOf(".") + 1);
  console.log(getExtension);

  if (getExtension[0] === "jpg") {
    lightboxFactory("img", titleMedia);

    const imageElement = document.querySelector(".lightbox-media_element");
    const titleMedia = document.createElement("h2");
    titleMedia.className = "lightbox-media_title lightbox_imgTitle";
    lightboxContainer.appendChild(imageElement);

    // Add a loader into 'container'
    const loader = createElement("div");
    loader.className = "lightbox_loader";
    loader.appendChild(lightboxContainer);

    // Remove the loader when the image has loaded
    imageElement.onload = () => {
      lightboxContainer.removeChild(loader);
    };

    if (getExtension[0] === "mp4") {
      lightboxFactory("video", titleMedia);

      const videoElement = document.querySelector(".lightbox-media_element");
      const titleMedia = document.createElement("h2");
      titleMedia.className = "lightbox-media_title lightbox_videoTitle";
      lightboxContainer.appendChild(videoElement);

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
      src = e.currentTarget.querySelector(
        ".lightbox_container .lightbox-media_element"
      );
    } else if (e.currentTarget.closest(".lightbox")) {
      src = e.currentTarget
        .closest(".lightbox")
        .querySelector(".lightbox_container .lightbox-media_element");
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
