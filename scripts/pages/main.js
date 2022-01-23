//fetch FishEyeDataExport
// Replace js with your JSON feed
let photographers = [];
const getPhotographers = async () => {
  await fetch("../data/FishEyeData.json", { mode: "no-cors" })
    .then((res) => res.json())
    .then((data) => (photographers = data.photographers))
    .catch((err) => console.log("Invalid Error : Fetch Invalid", err));
};
//after fetch, create a display card
/*const photographers = ['photographers[0]','photographers[1]', 'photographers[2]', 'photographers[3]'];
photographers.forEach(photographer => console.log(photographer));*/

const userDisplayCard = async () => {
  await getPhotographers();
  document.body.innerHTML = photographers.map(
    (photographer) =>
      `
    <article>
    <img src="${photographer.id}" alt="les portraits photo de chaque photographe indépendant"></img>
    <h1>${photographer.name}</h1>
    <h2>${photographer.city} ${photographer.country}</h2>
    <h3>${photographer.tagline}</h3>
    <p>${photographer.price}</p>
    <ul class="hashtag_list">${photographer.tags}</ul>
    </article>
    </a>`
  );
};

//hastags or link selected
// choise

const filterByTag = (tag, photographers) => {
  if (tag === "all") {
    return photographers;
  } else {
    return photographers.filter((photographer) =>
      photographer.tags.includes(tag)
    );
  }
};

//all informations except profil picture in constuctor/photographer.js
// Penser à remplacer par les données récupérées dans le json
// et bien retourner le tableau photographers seulement une fois

const init = async () => {
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  userDisplayCard(photographers);
};

init();
