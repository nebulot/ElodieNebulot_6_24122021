//fetch FishEyeDataExport
// Replace js with your JSON feed
const getPhotographers = async () => {
  await fetch("../data/FishEyeData.json", { mode: "no-cors" })
    .then((res) => res.json())
    .then((data) => (photographers = data.photographers))
    .catch((err) => console.log("Invalid Error : Fetch Invalid", err));
    setTimeout(function floatingAnim() {
      floatingAnim.className += "hidden";
    }, 2000);
  
  return ({
    photographers: photographers})
};

async function displayData(photographers) {
const photographersSection = document.querySelector(".photographer_section");

photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
});
};

async function init() {
// Récupère les datas des photographes
const { photographers } = await getPhotographers();
console.log(photographers);
displayData(photographers);

};

init();