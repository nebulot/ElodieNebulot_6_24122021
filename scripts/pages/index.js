// DOM//
const photoContainer = document.getElementById("main");
console.log("photoContainer");

// First replace with the data retrieved in the json (checked data.js)

async function getPhotographers() {
  await fetch("../data/photographers.json", { mode: "no-cors" })
    .then(res => res.json())
    .catch((error) => {
        console.log('il y a eu un problème avec fetch:' + error.message);
      });

  console.log("getPhotographers");

    const photographers = [
    {
      name: "Ma data test",
      id: 1,
      city: "Paris",
      country: "France",
      tagline: "Ceci est ma data test",
      price: 400,
      portrait: "account.png",
    },
    {
      name: "Autre data test",
      id: 2,
      city: "Londres",
      country: "UK",
      tagline: "Ceci est ma data test 2",
      price: 500,
      portrait: "account.png",
    },
  ]
  // et bien retourner le tableau photographers seulement une fois
  return {
    photographers: [...photographers, ...photographers, ...photographers],
  }
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  console.log("click");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
