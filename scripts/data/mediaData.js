
//Method fetch FishEyeDataExport
// Replace js with your JSON feed

async function getMedias() {
  let medias;

  await fetch("../Data/FishEyeData.json", { mode: "no-cors" })
    .then((res) => res.json())
    .then((res) => {
      medias = res.medias;
    })
    
    .catch((err) => console.log('an error occurs', err));

  return {
    medias,
  };
}

export { getMedias };





