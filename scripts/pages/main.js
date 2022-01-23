//fetch FishEyeDataExport
// Replace js with your JSON feed
const getPhotographers = async () =>
  await fetch("data/FishEyeData.json", { mode: "no-cors" })
    .then((res) => res.json())
    //.then((data) => photographers = data.photographers)
    .catch((err) => console.log("Invalid Error : Fetch Invalid", err));
    

//after fetch, create a display card

const userDisplay = async () => {
  const element = document.querySelector(".photographer_section");
  element.innerHTML = "";
  photographers.forEach((photographer) => {
    let photographerModel = new Photographer(photographer);
    element.innerHTML += photographerModel.userCard;
  });
};




//all informations except profil picture in constuctor/photographer.js
// Penser à remplacer par les données récupérées dans le json
// et bien retourner le tableau photographers seulement une fois

 const init = async () => {
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  userDisplay(photographers);
};

init();
