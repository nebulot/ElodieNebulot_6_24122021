const getPhotographers = () => fetch("../data/photographers.json", {mode: 'no-cors'})
  .then(res => res.json())
  .catch((error) => {
    console.log('il y a eu un problème avec fetch:' + error.message);
  })