//fetch FishEyeDataExport / import getPhotographers Data from json file

import {getPhotographers} from '../data/photographersData.js';

//display photographer card on index.js

import {photographerFactory} from '../factories/photographer.js';


async function displayData(photographers) {
const photographersSection = document.querySelector(".photographer_section");

photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
});
};

async function init() {
// Récupère les datas des photographes
const { photographers } = await getPhotographers();
console.log(photographers);
displayData(photographers);

};

init();