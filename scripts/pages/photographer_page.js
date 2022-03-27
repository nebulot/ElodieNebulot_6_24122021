//import photographers' informations and photographers ' medias
import { getMedias } from '../data/mediaData.js';
import { getPhotographers } from'../data/photographersData.js';

//import mediaFactory, display media card 

import { mediaFactory } from '../factories/media.js';
import { photographerFactory} from '../factories/photographer.js';



// recupération de la chaine de requete "queryString" dans l'url (!id)
// web api _ window _ DOM _ windowlocation _search?
const queryString_url = window.location.search;
console.log(queryString_url);
//méthode 2 constructor URLSearchParams
const urlSearchParams = new URLSearchParams(queryString_url);
console.log(urlSearchParams);

async function displayPhotographerDetail(photographers) {
const photographSectionHeader = document.querySelector(
    ".photograph-section_header"
  );
  //const parameter = urlSearchParams.get(parameterName);//
  const photographerUrlById = urlSearchParams.get('id');
  const name = urlSearchParams.get('name');

  const photographersData = photographers.filter((el) => el.id == photographerUrlById);
  const photographersCardModel = photographersCard(photographers[photographersData]); 
  const photographersCard = photographersCardModel.createPhotographerCard();
  photographSectionHeader.appendChild(photographersCard);


  const photographSectionBtn = document.querySelector(
    ".photograph-section_button"
  );
    const photographSectionPhoto = document.querySelector(
    ".photograph-section_picture"
  );
  const displayLikeContainer = document.getElementById("compteur_like");

  photographers.forEach((photographer) => {
    const photographerDetail = photographerFactory(photographers[0]);
    const userPicDOM = photographerDetail.getUserPicDOM();
    const userContactDOM = photographerDetail.getUserContactDOM();
    const userBannerDOM = photographerDetail.getUserBannerDOM();
    const userFooterDOM = photographerDetail.getUserFooter();

    photographSectionHeader.appendChild(userBannerDOM);
    photographSectionPhoto.appendChild(userPicDOM);
    photographSectionBtn.appendChild(userContactDOM);
    displayLikeContainer.appendChild(userFooterDOM);
  });
}

//gallery photographers : container Media with card and photos
async function displayMediaGallery(medias, photographers) {
  const displayMediaContainer = document.getElementById(
    "photograph-section_media");
    const photographerUrlById = urlSearchParams.get('id');
    const name = urlSearchParams.get('name');
    const mediasArray = [];

  // Sorts the media by popularity because option 'popularity' is by default on select
  medias.sort((a, b) => a.likes - b.likes);
  medias.reverse();

  medias.forEach((media) => {
    if (media.photographerId == photographerUrlById) {
      const mediasGallery = mediaFactory(media, name);
      const userGalleryDOM = mediasGallery.getUserGalleryDOM();
      displayMediaContainer.appendChild(userGalleryDOM);
      // Create an array with all the photographer medias
      mediasArray.push(media);
    }
  });
  photographers.forEach((photographer) => {
    if (photographer.id == photographerUrlById) {
      const pricePerDay = photographer.price;
      //pricePerDayElement.textContent = `${pricePerDay}€/jour`;
    }
  });
}
  
//container likes on footer photographers' page//

function getUpdateLikes() {
  const sectionLikes = document.querySelectorAll(".cards-media_likes");
  function reloadLikes() {
    let compteurTotalLike = document.querySelector(".like_total");
    let htmlLikes = document.querySelectorAll(".cards-media_total_likes");
    let totalSom = 0;
    htmlLikes.forEach(function (like) {
      let ajoutLike = Number(like.innerHTML);
      totalSom += ajoutLike;
    });
    compteurTotalLike.innerHTML = totalSom;
    return totalSom;
  }
  sectionLikes.forEach(function (i) {
    i.addEventListener("click", function () {
      let elementCounter = i.querySelector(".cards-media_total_likes");
      let heart = i.querySelector(".fa-heart");
      let totalSom = Number(elementCounter.textContent);
      const liked = i.dataset.liked === "true";
      i.dataset.liked = !liked;
      elementCounter.innerHTML = totalSom + (!liked ? 1 : -1);
      if (liked) {
        reloadLikes();
        heart.classList.add("fas");
      } else if (!liked) {
        reloadLikes();
        heart.classList.add("fas");
      }
    });
  });
}

// selected by popularity, name and title

function dropdownSort() {
  let mediaArraySort = [];
  
  displayDropdown();
  const dropdowns = document.querySelector(".dropdown-content");
  const dropdownsName = document.querySelector(".dropdown-name");
  const chevronD = document.querySelector(".fa-chevron-down");
  const chevronU = document.querySelector(".fa-chevron-up");
  const sortBtn = Array.from(document.getElementsByClassName("select-list"));
  console.log(sortBtn);

  sortBtn.forEach((btn, index) =>
    btn.addEventListener("click", () => {
      dropdowns.innerHTML = "";
      chevronD.style.display = "none";
      chevronU.style.display = "block";
      if (index == 0) {
        dropdownsName.innerHTML = `Popularité`;

        mediaArraySort = media.sort((a, b) => {
          return b.likes - a.likes;
        });
      } else if (index == 1) {
        dropdownsName.innerHTML = `Date`;

        mediaArraySort = media.sort((a, b) => {
          return new Date(a.date).valueOf() - new Date(b.date).valueOf();
        });
      } else if (index == 2) {
        dropdownsName.innerHTML = `Titre`;

        mediaArraySort = media.sort((a, b) => {
          if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
          } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
          }
        });
      }
    })
  );
}

//display dropdown //

function displayDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches(".fa-carret-down")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 1; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const init = async () => {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  photographerFactory(photographers);

  const {medias} = await getMedias();
  mediaFactory(medias, photographers);

  displayDropdown();
  dropdownSort();
  displayMediaGallery();
  displayPhotographerDetail();

  getUpdateLikes();

  //let lightbox = new Lightbox;
  
};
init();
