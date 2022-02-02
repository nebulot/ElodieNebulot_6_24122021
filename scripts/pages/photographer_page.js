//fetch FishEyeDataExport
// Replace js with your JSON feed
const getPhotographersById = async (id) => {
  await fetch("../data/FishEyeData.json", { mode: "no-cors" })
    .then((res) => res.json())
    .then((data) => (photographersById = data.photographers))
    .catch((err) => console.log("Invalid Error : Fetch Invalid", err));
    return ({
      photographersById: photographersById})
  };
  
  /*async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
    
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
    };*/


async function displayDataDetail(photographersById) {
  const photographSectionHeader = document.querySelector(".photograph-section_header");

  photographersById.forEach((photographerById) => {
    const photographerPortrait = photographerFactory(photographerById);
    const userBannerDOM = photographerPortrait.getUserBannerDOM();
    photographSectionHeader.appendChild(userBannerDOM);
  });
};



async function init() {
  // Récupère les datas des photographes
  const { photographersById } = await getPhotographersById();
  console.log(photographersById);
  displayDataDetail(photographersById);
}

init();
