// display photographers data, with id
async function displayPhotoData() {
    const { media, photographers } = await getPhotographers();
    //const params = new URLSearchParams(document.location.search.substring(1));
    const result = params.get("id");
    const selectGetPhotographers = photographers.find(
    (photographer) => photographer.id == result
    );
//join to constructor/photographer.js
    const PhotographerConstructor = new Photographer (selectGetPhotographers);
    PhotographerConstructor.document.title;

    const mediaDisplay = media.filter((media) => media.photographerId == result);
    updateMediaDisplay(mediaDisplay);

    document.addEventListener("change", function (e) {
        $elementGallery.innerHTML="";
        const choice = filterByChoice(mediaDisplay, e.target.value);
        updateMediaDisplay(choice);
    });
}

/*const init = async () => {
    await displayPhotoData();
};

init();*/
