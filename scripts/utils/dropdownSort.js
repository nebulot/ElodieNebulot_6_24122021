/*function dropdownSort(e, mediasArray) {

    if (e.currentTarget.value === 'popularity') {
      mediasArray.sort((a, b) => a.likes - b.likes);
      mediasArray.reverse();
    }
  
    if (e.currentTarget.value === 'date') {
      mediasArray.sort((a, b) => {
        if (a.date < b.date) {
          return -1;
        }
        if (a.date > b.date) {
          return 1;
        }
        return 0;
      });
    }
  
    if (e.currentTarget.value === 'title') {
      mediasArray.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    }
  }*/

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