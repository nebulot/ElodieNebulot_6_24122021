//import photographers' informations and photographers ' medias
import { getMedias } from "../data/mediaData.js";
import { getPhotographers } from "../data/photographersData.js";

//import photographerCard display, display media card
import { photographersCard } from "../templates/photographersCard.js";
import { Media } from "../templates/MediaFactory.js";

//import dropdown select
import { dropdownSort } from "../utils/dropdownSort.js";

import { lightboxModal } from "../utils/lightboxForm.js";

const displayMediaContainer = document.querySelector(
  "#photograph-section_media"
);

// recupération de la chaine de requete "queryString" dans l'url (!id)
// web api _ window _ DOM _ windowlocation _search?
const queryString_url = window.location.search;
//méthode 2 constructor URLSearchParams
const urlSearchParams = new URLSearchParams(queryString_url);

async function displayPhotographerDetail(photographers) {
  const photographSectionHeader = document.querySelector(
    ".photograph-section_header"
  );
  const photographSectionBtn = document.querySelector(
    ".photograph-section_button"
  );

  const photographSectionPhoto = document.querySelector(
    ".photograph-section_picture"
  );
  const displayLikeContainer = document.getElementById("compteur_like");

  //const parameter = urlSearchParams.get(parameterName);//
  const photographerUrlById = urlSearchParams.get("id");
  const name = urlSearchParams.get("name");

  const photographersIndex = photographers.findIndex(
    (el) => el.id == photographerUrlById
  );

  const photographersCardModel = photographersCard(
    photographers[photographersIndex]
  );
  console.log(photographersCardModel);
  console.log(photographers);
  console.log(photographersIndex);

  const userBannerDOM = photographersCardModel.getUserBannerDOM();
  const userContactDOM = photographersCardModel.getUserContactDOM();
  const userPicDOM = photographersCardModel.getUserPicDOM();
  const userFooterDOM = photographersCardModel.getUserFooter();
  photographSectionHeader.appendChild(userBannerDOM);
  photographSectionBtn.appendChild(userContactDOM);
  photographSectionPhoto.appendChild(userPicDOM);
  displayLikeContainer.appendChild(userFooterDOM);
}

async function getMediaByPhotographer(media) {
  const photographerUrlById = urlSearchParams.get("id");
  const mediasGallery = media.filter(
    (media) => media.photographerId == photographerUrlById
  );
  //  display dropdown
  
  displayMediaData(mediasGallery);
  console.log(mediasGallery);
  const selectList = document.querySelector("#dropdown-listbox");
  selectList.addEventListener("change", function (e) {
    displayMediaContainer.innerHTML = "";
    const option = dropdownSort(mediasGallery, e.target.value);
  displayMediaData(option);
    //lightboxModal
    lightboxModal();
  });
  //selectList.addEventListener("change", getUpdateLikes);
}

function displayMediaData(gallery) {
  //const photographerUrlById = urlSearchParams.get("id");
  gallery.forEach((media) => {
    let medias = new Media(media);
    displayMediaContainer.innerHTML += medias.createHtml();
  });
  getUpdateLikes();
}

//container likes on footer photographers' page//

function getUpdateLikes() {
  const sectionLikes = document.querySelectorAll(".cards-media_likes");
  
  function reloadLikes() {
    let compteurTotalLike = document.querySelector(".like_total");
    let htmlLikes = document.querySelectorAll(".cards-media_total_likes");

    let totalSom = 0;
    htmlLikes.forEach(function (like) {
      let ajoutLike = Number(like.textContent);
      totalSom += ajoutLike;
    });
    compteurTotalLike.innerHTML = totalSom;
    return totalSom;
  }

  sectionLikes.forEach(function (i) {
    i.addEventListener("click", function () {
      let elementCounter = i.querySelector(".cards-media_total_likes");
      let btnSelector = i.querySelector(".cards-media_total_likes_btn");
      let heartBtn = i.querySelector(".fa-heart");
      let totalSom = Number(elementCounter.textContent);
      const liked = i.dataset.liked === "true";
      i.dataset.liked = !liked;
      elementCounter.innerHTML = totalSom + (!liked ? 1 : -1);
      if (liked) {
        reloadLikes();
        heartBtn.classList.add("fas");
        heartBtn.classList.remove("far")
        btnSelector.ariaLabel = " je n'aime pas ";
      } else if (!liked) {
        reloadLikes();
        heartBtn.classList.add("fas");
        heartBtn.classList.remove("far")
        btnSelector.ariaLabel = " j'aime ";
      }
    });
  });
  reloadLikes();
}

const init = async () => {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayPhotographerDetail(photographers);

  let { media } = await getMedias();
  console.log(media);
  await getMediaByPhotographer(media);
  
  lightboxModal();
};

init();
