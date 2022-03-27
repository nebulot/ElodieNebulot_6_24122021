
//Method fetch FishEyeDataExport
// Replace js with your JSON feed

const getMedias = async () => {
    let medias;

  const res = await fetch("../Data/FishEyeData.json", { mode: "no-cors" });
  if (!res.ok) {
    throw "Invalid Error : Fetch Invalid";
  }
  const data = await res.json();

  medias = data.medias
 
  console.log(medias);

  return {medias
  };
}

export { getMedias };





