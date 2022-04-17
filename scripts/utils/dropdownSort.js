// create dropdownSort toogle sort the gallery by Popularity, Date and title//

  const dropdownSort = (mediaGallery, option) => {
    switch (option) {
      case "popularity":
        return mediaGallery.sort((a, b) => {
          return b.likes - a.likes;
        });
      case "date":
        return mediaGallery.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
      case "title":
        return mediaGallery.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return mediaGallery.sort((a, b) => {
          return b.likes - a.likes;
        });
    }
  }
  
  export { dropdownSort };