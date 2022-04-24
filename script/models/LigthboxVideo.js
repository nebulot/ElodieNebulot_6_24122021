export function LightboxVideoTag(videoTag, videoName, url) {
    const ext = getExtension(url);
  
    if (ext[0] === 'mp4') {
      const obj = {
        elementName: `${videoTag}`,
        classIdAttr: {
          className: 'media__cardImg lightbox-video lightbox-media',
          src: url,
          alt: videoName,
          controls: 'controls',
        },
        textContent: undefined,
        appendTo: 'div.lightbox__container',
      };
      const videoElement = createElement(
        obj.elementName,
        obj.classIdAttr,
        obj.textContent,
        obj.appendTo,
      );
  
      return { videoElement };
    }
    
    console.log('Sorry, this is not a valid format of video');
  }
  