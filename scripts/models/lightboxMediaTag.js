//lightbox IMAGE ///
export function lightboxImageTag(imgTag, imgName, url) {
    const ext = getExtension(url);
    if (ext[0] === 'jpg') {
      const obj = {
        elementName: `${imgTag}`,
        classIdAttr: {
          className: 'lightbox-media_title lightbox_imgTitle',
          src: url,
          alt: imgName,
        },
        textContent: undefined,
        appendTo: 'div.lightbox_container',
      };
      return createElement(obj.elementName, obj.classIdAttr, obj.textContent, obj.appendTo);
    }
    // controle this media's format is valid for lightbox
    console.log('Sorry, this is not a valid format');
  }


  ///lightbox VIDEO////
  export function lightboxVideoTag(videoTag, videoName, url) {
    const ext = getExtension(url);
    if (ext[0] === 'mp4') {
      const obj = {
        elementName: `${videoTag}`,
        classIdAttr: {
          className: 'lightbox-media_title lightbox_videoTitle',
          src: url,
          alt: videoName,
        },
        textContent: undefined,
        appendTo: 'div.lightbox_container',
      };
      return createElement(obj.elementName, obj.classIdAttr, obj.textContent, obj.appendTo);
    }
    // controle this media's format is valid for lightbox
    console.log('Sorry, this is not a valid format');
  }


  