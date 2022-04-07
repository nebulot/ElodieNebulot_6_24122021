function lightboxFactory(type, titleMedia, url) {
    switch (type) {
      case 'image':
        lightboxImage('img', titleMedia, url);
        break;
      case 'video':
        lightboxVideo('video', titleMedia, url);
        break;
      default:
        console.log('Sorry, media not found');
    }
  };

  export {lightboxFactory};