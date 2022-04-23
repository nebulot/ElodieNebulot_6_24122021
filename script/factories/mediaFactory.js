export function mediaFactory(type,url) {
    switch (type) {
      case 'image':
        imageTag('img',  url);
        break;
      case 'video':
        videoTag('video', url);
        break;
      default:
        console.log('Sorry, media not found');
    }
    return mediaFactory
  };
 