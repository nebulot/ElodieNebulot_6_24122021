//fetch FishEyeDataExport
// Replace js with your JSON feed
const getPhotographers = async () => {
  await fetch("../data/FishEyeData.json", { mode: "no-cors" })
    .then((res) => res.json())
    .then((data) => (photographers = data.photographers))
    .catch((err) => console.log("Invalid Error : Fetch Invalid", err));
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

//taglist photographer fetch
const getPhotographersTags = async () => {
  const response = await fetch(`../pages/tags_nav.js`);
  const data = await response.json();
 photographersTags(data);
}

//Filter photographer by selectedTag
const filterByTag = (e) => {
  e.preventDefault();
  const choiceTag = e.target.textContent.slice(1).toLowerCase();
  const searchPhotographers = photographers.filter(photographer => { 
      return photographer.tags.indexOf(choiceTag) > -1; 
  });
  setSearchPhotographers(searchPhotographers);
  let tagEvent = e ? parseInt(e.target.parentElement.id, 10) : null;
}


async function init() {
// Récupère les datas des photographes
const { photographers } = await getPhotographers();
console.log(photographers);
displayData(photographers);
};

init();