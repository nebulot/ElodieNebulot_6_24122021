function lightboxModal () {

  // check all medias' links and titles, keep url to manage all, inside lightboxModal

  const links = Array.from(document.querySelectorAll('.photographer-medium_link'));
  const titleMedias = Array.from(document.querySelectorAll('.cards-media_title'));

  const imagesUrls = links.map((link) => link.getAttribute('href'));


  // same thinks with photographers and media display 

  links.forEach((link) => link.addEventListener('click', getLightbox));

  function getLightbox(e) {
    e.preventDefault();
    const lightboxType = buildDOM();
    const url = e.currentTarget.getAttribute('href');
    lightboxType.buildLightboxDOM(url);
    targetImage(e);
  }

// create function "target Image" target the media 
//target figcaption > p title when photographers' photo closed

  function targetImage(e) {
    const url = e.currentTarget.getAttribute('href');
    let titleMedia = '';
    titleMedia = e.currentTarget.closest('.photographer-medium_card').querySelector('figcaption>p').textContent;
    loadImage(titleMedia, url);
  }

// last create load media to change the cards with next and previous or to close the window

function loadImage(titleMedia, url) {
  const lightboxContainer = document.querySelector('.lightbox_container');
  lightboxContainer.innerHTML = '';
  const btn2 = document.querySelector('#lightbox_close');
  getImage(titleMedia, url);

  document.querySelector('.lightbox__next').addEventListener('click', next);
  document.querySelector('.lightbox__prev').addEventListener('click', previous);
  document.querySelector('.lightbox_background').addEventListener('keyup', changeMedia);
  document.querySelector('.lightbox_background').addEventListener('keyup', onKeyUp);
  document.querySelector('#lightbox_close').addEventListener('click', close);
  document.querySelector('#lightbox_close').addEventListener('keyup', onKeyUp);
}


// close lightbox
function onKeyUp(e) {
  if (e.key === 'Escape') {
    close(e);
  } else if (e.key === 'Enter') {
    close(e);
  }
}

function close(e) {
  e.preventDefault();
  let href = '';
  if (e.currentTarget.querySelector('.lightbox_container')) {
    href = e.currentTarget.querySelector('.lightbox_container .photographer-medium_element').getAttribute('src');
  } else if (e.currentTarget.closest('.lightbox')) {
    href = e.currentTarget.closest('.lightbox').querySelector('.lightbox_container .lightbox-medium_element').getAttribute('src');
  }

  document.querySelector('#lightbox_close').removeEventListener('keyup', onKeyUp);
  document.querySelector('#lightbox_close').removeEventListener('click', close);
  document.querySelector('.lightbox_background').removeEventListener('keyup', onKeyUp);
}


// function next and previous media
function next() {
  let titleMedia = document.querySelector('.lightbox_container p').textContent;
  let url = document.querySelector('.lightbox_container .lightbox-medium_element').getAttribute('src');
  const lightboxMedia = document.querySelector('.lightbox-medium_element');
  const lightboxTitle = document.querySelector('.lightbox_heading');

  let currentIndex = imagesUrls.findIndex((mediaUrl) => mediaUrl === url);
  let nextUrl = '';
  let nextTitleMedia = '';
  if (currentIndex === imagesUrls.length - 1) {
    currentIndex = -1;
  }

  nextUrl = imagesUrls[currentIndex + 1];
  nextTitleMedia = titleMedias[currentIndex + 1].textContent;
  lightboxMedia.remove();
  lightboxTitle.remove();

  url = nextUrl;
  titleMedia = nextTitleMedia;

  document.querySelector('.lightbox_next').removeEventListener('click', next);
  document.querySelector('.lightbox_prev').removeEventListener('click', previous);
  document.querySelector('.lightbox_background').removeEventListener('keyup', changeMedia);

  loadImage(titleMedia, url);
}

// previous media 

function previous() {
  let titleMedia = document.querySelector('.lightbox_container p').textContent;
  let url = document.querySelector('.lightbox_container .lightbox-medium_element').getAttribute('src');
  const lightboxMedia = document.querySelector('.lightbox-medium_element');
  const lightboxTitle = document.querySelector('.lightbox_heading');

  let currentIndex = imagesUrls.findIndex((mediaUrl) => mediaUrl === url);
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

  document.querySelector('.lightbox_next').removeEventListener('click', next);
  document.querySelector('.lightbox_prev').removeEventListener('click', previous);
  document.querySelector('.lightbox_background').removeEventListener('keyup', changeMedia);

  loadImage(titleMedia, url);
}

function changeMedia(e) {
  if (e.key === 'ArrowRight') {
    next();
  }
  if (e.key === 'ArrowLeft') {
    previous();
  }
}
}

function buildDOM() {
 const buildLightboxDOM = () => {
  const dom = document.createElement("div");
  dom.classList.add("lightbox_background");
  dom.innerHTML = `<button id="lightbox_close" href="" aria-label="fermer la fenêtre"></button>
  <a class="lightbox_prev" href="" aria-label="Image précédente"></a>
  <a class="lightbox_next" href="" aria-label="Image suivante"></a>
  <div class="lightbox_container" role="dialog" aria-label="">
    <img src="./assets/images/" alt="">
    <p class="lightbox_title">titre</p>
   </div>`;
return {dom};
};
return {buildLightboxDOM};
}


export {lightboxModal}

      
 
  

