//fetch FishEyeDataExport
// Replace js with your JSON feed

const getPhotographersById = async () => {
  const res = await fetch("../data/FishEyeData.json", { mode: "no-cors" });
  if (!res.ok) {
    throw "Invalid Error : Fetch Invalid";
  }
  const data = await res.json();

  photographersData = data.photographers;
  medias = data.media;

  return { photographersData, medias };
};

// recupération de la chaine de requete "queryString" dans l'url (!id)
// web api _ window _ DOM _ windowlocation _search?
const queryString_url_id = window.location.search;
console.log(queryString_url_id);
/*µon retire le ? methode 1 simple avant le n° id .slice() retrait lettre et numéro
const leId = queryString_url_id.slice(4);
console.log(leId);*/

//méthode 2 constructor URLSearchParams
const urlSearchParams = new URLSearchParams(queryString_url_id);
console.log(urlSearchParams);
//const parameter = urlSearchParams.get(parameterName);//
const id = urlSearchParams.get("id");

//console.log(id)//
function displayDataDetail(data) {
  const photographers = !id
    ? photographersData
    : photographersData.filter((photographer) => photographer.id == id);

  const photographSectionHeader = document.querySelector(
    ".photograph-section_header"
  );
  const photographSectionBtn = document.querySelector(
    ".photograph-section_button"
  );

  //add photographer's name on modal "(contact me")//

  const photographSectionPhoto = document.querySelector(
    ".photograph-section_picture"
  );
  const displayLikeContainer = document.getElementById("compteur_like");

  photographers.forEach((photographer) => {
    const photographerDetail = photographerFactory(photographer);
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

// dropdown

//gallery photographers : container Media with card and photos
function displayMediaData(data) {
  const media = !id
    ? medias
    : medias.filter((media) => media.photographerId == id);
  const displayMediaContainer = document.getElementById(
    "photograph-section_media"
  );

  media.forEach((media) => {
    const mediaGallery = mediaFactory(media);
    const userGalleryDOM = mediaGallery.getUserGalleryDOM();
    displayMediaContainer.appendChild(userGalleryDOM);
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
      let heartBtn = i.querySelector("cards-media_total_likes_btn");
      let heart = i.querySelector(".fa-heart");
      let totalSom = Number(elementCounter.textContent);
      const liked = i.dataset.liked === "true";
      i.dataset.liked = !liked;
      elementCounter.innerHTML = totalSom + (!liked ? 1 : -1);
      if (liked) {
        reloadLikes();
        heart.classList.add("fas");
        heartBtn.ariaLabel = "didn't likes";
      } else if (!liked) {
        reloadLikes();
        heart.classList.add("fas");
        heartBtn.ariaLabel = "likes";
      }
    });
  });
}

//display dropdown //

function displayDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
  }

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.fa-chevron-down')) {

    const dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


/*
  const displayMediaContainer = document.getElementById(
    "photograph-section_media"
  );
  */

const init = async () => {
  // Récupère les datas des photographes
  const { data } = await getPhotographersById();
  displayDataDetail(data);
  displayMediaData(data);
  getUpdateLikes();
 
};
init();
