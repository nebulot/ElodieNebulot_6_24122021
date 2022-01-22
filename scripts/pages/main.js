//fetch FishEyeDataExport
// Replace js with your JSON feed
const section = document.getElementById('section')
let photographers = []; //box

async function getPhotographers() {
  await fetch("data/FishEyeData.json")
    .then((res) => res.json())
    .then((data) => (photographers = data.photographers));
  console.log(photographers);
}

//after fetch, create a display
const userDisplay = async () => {
  await getPhotographers();

  document.body.innerHTML = photographers.map(
    (user) => `
    <div class="card">
    <h2>${user.name}</h2>
    <h3>${user.city} ${user.country}</h3>
    <p>${user.tagline}</p>
    <p>${user.price}</p>
  `
  );
};

userDisplay();

// Penser à remplacer par les données récupérées dans le json
/*const photographers = [
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
  ];
  // et bien retourner le tableau photographers seulement une fois
  return {
    photographers: [...photographers, ...photographers, ...photographers],
  };
}
async function displayData(photographers) {
  const photographersSection = document.querySelector(".");


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
init();*/
