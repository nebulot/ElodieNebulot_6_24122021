export function lightboxFactory(type, url) {
  switch (type) {
    case 'image':
      lightboxImage('img',  url);
      break;
    case 'video':
      lightboxVideo('video', url);
      break;
    default:
      console.log('Sorry, media not found');
  }
  return lightboxFactory
};

 