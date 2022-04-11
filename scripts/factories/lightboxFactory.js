export function lightboxFactory(type, url) {
    switch (type) {
      case 'image':
        lightboxImageTag('img',  url);
        break;
      case 'video':
        lightboxVideoTag('video', url);
        break;
      default:
        console.log('Sorry, media not found');
    }
    return lightboxFactory
  };
 
 