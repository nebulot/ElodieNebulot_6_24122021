//fetch FishEyeDataExport
// Replace js with your JSON feed
let photographers = [] ;

const getPhotographers = async () => {
await  fetch("../data/FishEyeData.json", { mode: "no-cors" })
    .then((res) => res.json())
    .then((data) => (photographers = data.photographers))
    .catch((err) => console.log("Invalid Error : Fetch Invalid", err));
  };
 
//after fetch, create a display card
const userDisplayCard = async () => {
  await getPhotographers();
  document.body.innerHTML = photographers.map(
    (photographer) =>
      `
    <article>
    <img href=${photographer.portrait} alt="les portraits photo de chaque photographe indépendant"></img>
    <h1>${photographer.name}</h1>
    <h2>${photographer.city} ${photographer.country}</h2>
    <h3>${photographer.tagline}</h3>
    <p>${photographer.price}</p>
    <ul class="hashtag_list">${photographer.tags}</ul>
    </article>`
  );
  /*return photographers [0][1][2][3][4][5] .length = 6;
  const photographersSection = document.querySelector(".photographer_section");
  const photographers = ['photographers[0]','photographers[1]', 'photographers[2]', 'photographers[3]'];
photographers.forEach(photographer => console.log(photographer));*/
  }  

// hastags or link selected
const choiceByTag = (tag, photographers) => {
  if (tag === "all") {
    return photographers;
  }else {
    return photographers.choice((photographer) =>
    photographer.tags.includes(tag));
  }
};

//all informations except profil picture in constuctor/photographer.js

// et bien retourner le tableau photographers seulement une fois

const init = async () => {
  const $choiceList = document.querySelector(".header_hashtags_choice");
  const $tags = $choiceList.querySelectorAll("li");
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  $tags.forEach((tag) => {
    tag.addEventListener("click", function() {
      const photographersChoice = choiceByTag(tag.textContent.replace("").toLowerCase(),
				photographers
			);
			userDisplayCard(photographersChoice);
  });
    userDisplayCard(photographers);
});
};

init();
