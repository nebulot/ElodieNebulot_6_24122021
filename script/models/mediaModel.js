import { GalleryUtils } from "../utils/mediaUtils.js";

export class MediaModel {
    constructor(medium) {
        this.medium = medium;
    }

    getMediumType() {
        return GalleryUtils.getMediumType(this.medium)
    }
    

    getMediumSrc() {
        return GalleryUtils.getMediumSrc(this.medium)
    }

    /*getTitle() {
        return medium.title
    }

    getPrice() {
        return medium.price
    }

    getAlt() {
        return medium.alt
    }

    getLikes() {
        return medium.likes
    }

    getId() {
        return medium.id
    }

    getPhotographerId() {
        return medium.photographerId
    }
    
    getDate() {
        return medium.date
   }*/
   
};
