//import photographers' informations and photographers ' medias
import { getMedias } from "../data/mediaData.js";
import { getPhotographers } from "../data/photographersData.js";

//import photographerCard display, display media card
import { photographersCard } from "../factories/photographersCard.js";
import { mediaFactory } from "../factories/media.js";

//import dropdown select
import { dropdownSort } from "../utils/dropdownSort.js";

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

async function displayMediaData(media) {
  const displayMediaContainer = document.getElementById(
    "photograph-section_media"
  );

  const photographerUrlById = urlSearchParams.get("id");
  const name = urlSearchParams.get("name");
  const mediasArray = [];
  media.sort((a, b) => a.likes - b.likes);
  media.reverse();

  media.forEach((media) => {
    if (media.photographerId == photographerUrlById) {
      const mediaGallery = mediaFactory(media, name);
      const userGalleryDOM = mediaGallery.getUserGalleryDOM();
      displayMediaContainer.appendChild(userGalleryDOM);
      mediasArray.push(media);
    }
  });

  //  display dropdown
  
  const selectList = document.querySelector("#dropdown-list");
  selectList.addEventListener("change", function (e) {
    displayMediaContainer.innerHTML = "";
    const option = dropdownSort(media, e.target.value);
    updateMedia(option);
  });
 
}
const displayMediaContainer = document.getElementById(
  "photograph-section_media");
  function updateMedia(mediasArray) {
    mediasArray.forEach((media) => {
      const mediaGallery = mediaFactory(media);
      const userGalleryDOM = mediaGallery.getUserGalleryDOM();
      displayMediaContainer.appendChild(userGalleryDOM);
    });
  }
    /*lightboxModal();
	});*/


//container likes on footer photographers' page//

function getUpdateLikes() {
  const sectionLikes = Array.from(
    document.querySelectorAll(".cards-media_likes")
  );

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

  // Launch the lightbox with sorted medias
}

const init = async () => {
  // Récupère les datas des photographes
  const { media } = await getMedias();
  console.log(media);
  displayMediaData(media);

  const { photographers } = await getPhotographers();
  displayPhotographerDetail(photographers);

  getUpdateLikes();
};

init();
