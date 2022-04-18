
//Method fetch FishEyeDataExport
// Replace js with your JSON feed

const getPhotographers = async () => {
    let photographers;

  const res = await fetch("dataJson/FishEyeData.json", { mode: "no-cors" });
  if (!res.ok) {
    throw "Invalid Error : Fetch Invalid";
  }
  const data = await res.json();

  photographers = data.photographers;
 
  console.log(photographers);

  return {photographers,
  };
}

export { getPhotographers };


