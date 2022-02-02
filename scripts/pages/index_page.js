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

function displayHashtags() {
  const hashtagsItems = document.querySelector(".hashtags");
  Photographers.getAllHastags().forEach((hashtag) => {
    const a = document.createElement("a");
    a.innerHTML = `#<span id="portrait href="#" aria-labelledby="${hashtag}">${hashtag}</span>`;
    a.classList.add("hashtags");
    a.href = "#";
    a.setAttribute("aria-labelledby",`${hashtag}`);
    hashtagsItems.append(a);

    a.addEventListener("click", (e) => {
      e.preventDefault();
      a.classList.toggle("hashtag--choice");
      userCardDOM();
    });
  });
}

function userCardDOM() {
  const main = document.querySelector("#main");
  const filters = [];

  main.innerHTML = "";
  document.querySelectorAll(".hashtag--choice").forEach((hashtagChoice) => {
    filters.push(hashtagChoice.textContent.replace("#", ""));
  });
}
      
      
      
      




async function init() {
// Récupère les datas des photographes
const { photographers } = await getPhotographers();
console.log(photographers);
displayData(photographers);
};

init();