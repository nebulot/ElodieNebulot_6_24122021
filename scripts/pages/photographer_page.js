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
  
  
async function displayDataDetail(photographersById) {
  const photographSectionHeader = document.querySelector(".photograph-section_header");
  const photographSectionPhoto = document.querySelector(".photograph-section_picture")

  photographersById.forEach((photographerById) => {
    const photographerDetail = photographerFactory(photographerById);
    const userBannerDOM = photographerDetail.getUserBannerDOM();
    photographSectionPhoto.appendChild(userBannerDOM);
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
