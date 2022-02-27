//fetch FishEyeDataExport
// Replace js with your JSON feed

const getPhotographersById = async () => {
  const res = await fetch("../data/FishEyeData.json", { mode: "no-cors" });
  if (!res.ok) {
    throw "Invalid Error : Fetch Invalid";
  }
  const data = await res.json();

  photographersData = data.photographers;
  medias = data.media;

  return { photographersData, medias };
};

// recupération de la chaine de requete "queryString" dans l'url (!id)
// web api _ window _ DOM _ windowlocation _search?
const queryString_url_id = window.location.search;
console.log(queryString_url_id);
/*µon retire le ? methode 1 simple avant le n° id .slice() retrait lettre et numéro
const leId = queryString_url_id.slice(4);
console.log(leId);*/

//méthode 2 constructor URLSearchParams
const urlSearchParams = new URLSearchParams(queryString_url_id);
console.log(urlSearchParams);
const id = urlSearchParams.get("id");

//console.log(id);
function displayDataDetail(data) {
  const photographers = !id
    ? photographersData
    : photographersData.filter((photographer) => photographer.id == id);
  const photographSectionHeader = document.querySelector(
    ".photograph-section_header"
  );
  const photographSectionBtn = document.querySelector(".photograph-section_button");
  const photographSectionPhoto = document.querySelector(
    ".photograph-section_picture"
  );

  photographers.forEach((photographer) => {
    const photographerDetail = photographerFactory(photographer);
    const userPicDOM = photographerDetail.getUserPicDOM();
    const userContactDOM = photographerDetail.getUserContactDOM();
    const userBannerDOM = photographerDetail.getUserBannerDOM();
    

    photographSectionHeader.appendChild(userBannerDOM);
    photographSectionPhoto.appendChild(userPicDOM);
    photographSectionBtn.appendChild(userContactDOM)
  });
}

//gallery photographers
// container Media with card and photo
function displayMediaData(data) {
  const media = !id
    ? medias
    : medias.filter((media) => media.photographerId == id);
  const displayMediaContainer = document.getElementById(
    "photograph-section_media"
  );

  media.forEach((media) => {
    const mediaGallery = mediaFactory(media);
    const userGalleryDOM = mediaGallery.getUserGalleryDOM();
    displayMediaContainer.appendChild(userGalleryDOM);
  });
}

/*function displayLikeContainer() {
  const likeContainer = document.getElementsByClassName(".compteur_like");

likeContainer.forEach(() => {
  const likesDetail = photographerFactory(photographer);
  const UserFooter = likesDetail.getUserFooter();
  likeContainer.appendChild(UserFooter);
});
}*/

/* section likes 
function getClickLikes() {
	const likesContaine = document.querySelectorAll(".cards-media_likes");

  function compteurLikes() {
		let likesCounter = document.querySelector(".cards-media-footer_likes_total");
		let totalLikesElements = document.querySelectorAll(".cards-media_total_likes");

		let ajoutLike = 0

		totalLikesElements.forEach(function (like) {
			let oneLike = Number(like.textContent);
			ajoutLike += oneLike;
		});
		likesCounter.innerHTML = ajoutLike;
		return ajoutLike
  }

  likesContaine.forEach((function (i) {
		i.addEventListener("click", function () {
			let elementCounter = i.querySelector(".cards-media_total_likes");

			let button = i.querySelector('.cards-media_likes_button');
			let iconButton = i.querySelector(".fa-heart");
			let ajoutLike = Number(elementCounter.textContent);
			const liked = i.dataset.liked === "true";
			i.dataset.liked = !liked;
			elementCounter.innerHTML = ajoutLike + (!liked ? 1 : -1);
			if (liked) {
				compteurLikes();
				iconButton.classList.add("far");
				iconButton.classList.remove("fas");
				button.ariaLabel = "J'aime pas"
			} else if (!liked) {
				compteurLikes();
				iconButton.classList.add("fas");
				iconButton.classList.remove("far");
				button.ariaLabel = "J'aime"
      }
    });
  });
}*/

const init = async () => {
  // Récupère les datas des photographes
  const { data } = await getPhotographersById();
  displayDataDetail(data);
  displayMediaData(data);
  //compteurLikes();
};

init();
