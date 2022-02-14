//fetch FishEyeDataExport
// Replace js with your JSON feed


const getPhotographersById = async () => {
  const res = await fetch("../data/FishEyeData.json", { mode: "no-cors" })
    if (!res.ok) {
      throw "Invalid Error : Fetch Invalid"

    }
    const data = await res.json()

    photographersData = data.photographers
    medias = data.media
    
   return {photographersData, medias}
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
const id = urlSearchParams.get("id");

//console.log(id);
function displayDataDetail(data) {
  const photographers = !id
    ? photographersData
    : photographersData.filter((photographer) => photographer.id == id);
  const photographSectionHeader = document.querySelector(
    ".photograph-section_header"
  );
  const photographSectionPhoto = document.querySelector(
    ".photograph-section_picture"
  );

  photographers.forEach((photographer) => {
    const photographerDetail = photographerFactory(photographer);
    const userPicDOM = photographerDetail.getUserPicDOM();
    const userBannerDOM = photographerDetail.getUserBannerDOM();

    photographSectionHeader.appendChild(userBannerDOM);
    photographSectionPhoto.appendChild(userPicDOM);
  });
};
//gallery photographers
// container Media with card and photo
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

async function init() {
  // Récupère les datas des photographes
  const { data } = await getPhotographersById();
  displayDataDetail(data);
  displayMediaData(data);
}

init();
