//import photographers' informations and photographers ' medias
import { getMedias } from "../data/mediaData.js";
import { getPhotographers } from "../data/photographersData.js";

//import photographerCard display, display media card
import { photographersCard } from "../factories/photographersCard.js";
import { mediaFactory } from "../factories/media.js";

//import dropdown select
import { dropdownSort } from "../utils/dropdownSort.js";
import { lightboxModal } from "../utils/lightbox.js";

// import total likes div
import { userCompteurLikes } from "../utils/likes.js";

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


  const userBannerDOM = photographersCardModel.getUserBannerDOM();
  const userContactDOM = photographersCardModel.getUserContactDOM();
  const userPicDOM = photographersCardModel.getUserPicDOM();
  const userFooterDOM = photographersCardModel.getUserFooter();
  photographSectionHeader.appendChild(userBannerDOM);
  photographSectionBtn.appendChild(userContactDOM);
  photographSectionPhoto.appendChild(userPicDOM);
  displayLikeContainer.appendChild(userFooterDOM);

}

//gallery photographers : container Media with card and photos/videos

async function displayMediaGallery(medias, photographers) {
  
  const mediaContainer = document.querySelector("photograph-section_media"
  );
  const photographerUrlById = urlSearchParams.get("id");
  const name = urlSearchParams.get("name");
  const mediasArray = [];
  mediasArray.sort((a, b) => (a.likes - b.likes));
 
  //create mediacards by popularity
  medias.forEach((media) => {
    if (media.photographerId == photographerUrlById) 
    {
      const mediaGallery = mediaFactory(media);
      const userGalleryDOM = mediaGallery.getUserGalleryDOM();
      mediaContainer.appendChild(userGalleryDOM);
      

      // an array with all photographers' medias
      
    }
  });

  //display dropdown
  /*const selectList = document.querySelector("dropdown-list");
  selectList.addEventListener("change", dropdownList);
  selectList.addEventListener("change", getUpdateLikes);

  function dropdownList(e) {
    dropdownSort(e, mediasArray);
    displayMediaContainer.innerHTML = "";

    mediasArray.forEach((media) => {
      const mediasGallery = mediaFactory(media);
      const userGalleryDOM = mediasGallery.getUserGalleryDOM();
      const userFooterDOM = mediasGallery.getHeartBtn();
      displayMediaContainer.appendChild(userGalleryDOM);
      displayMediaContainer.appendChild(userFooterDOM);

    });*/

    // Launch the lightbox with sorted medias
    lightboxModal();
  }
//}

// add price by day and total likes.


const init = async () => {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayPhotographerDetail(photographers);

  const { medias } = await getMedias();
  displayMediaGallery(medias);

  lightboxModal();
  userCompteurLikes(); 
};

init();
