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

function displayHashtags() {
  const hashtagsBanner = document.querySelector(".hashtags_list");

  photographers.getAllHashtags.forEach((hashtag) => {
    const a = document.createElement("a");
    a.innerHTML = `#<p id="portrait" href="#" aria-labelledby="${hashtag}">${hashtag}</p>`;
    a.className = "hashtags_link";
    a.href = "#";
    a.setAttribute("aria-labelledby", `${hashtag}`);
    hashtagsBanner.append(a);

    //ajoute la classe tag--selected si le tag est selectionner par l'uttilisateur
    a.addEventListener("click", (e) => {
      e.preventDefault();
      a.classList.toggle("hashtag--selected");
      displayData();
    });
  });
}

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
//displayHashtags();
};

init();