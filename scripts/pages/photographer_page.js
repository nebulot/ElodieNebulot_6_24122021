//fetch FishEyeDataExport
// Replace js with your JSON feed
const getPhotographersById = async () => {
  await fetch("../data/FishEyeData.json", { mode: "no-cors" })
    .then((res) => res.json())
    .then((data) => (photographersById = data.photographers))
    .catch((err) => console.log("Invalid Error : Fetch Invalid", err));
    return ({
      photographersById: photographersById})
  };
  

async function displayDataDetail(photographersById) {
  const photographSectionHeader = document.querySelector("photograph-section_header");

  photographersById.forEach((photographerById) => {
    const photographerPicture = photographerPage(photographerById);
    const userBannerDOM = photographerPicture.getUserBannerDOM();
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
