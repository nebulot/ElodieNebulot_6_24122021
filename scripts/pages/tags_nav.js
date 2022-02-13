
// cibler le bon element
let hashtagsItems = document.getElementById("header_hashtags-item");

// comportement configuration
Tag.config({
    oneAtTime: false,
    callback: () => { Photographer.setVisbilityFromFilters() }
})

// Création des éléments
Api.getAllTags().forEach(tag => new Tag(tag))

// Injection dans le document
Tag.instances.forEach(i => {
    injectElement(i.element, tagTarget)
})

function displayHashtags() {
    const 
    Photographers.getAllHastags().forEach((hashtag) => {
      const a = document.createElement("a");
      a.innerHTML = `#<span id="portrait href="#" aria-labelledby="${hashtag}">${hashtag}</span>`;
      a.classList.add("hashtags");
      a.href = "#";
      a.setAttribute("aria-labelledby",`${hashtag}`);
      hashtagsItems.append(a);
  
      a.addEventListener("click", (e) => {
        e.preventDefault();
        a.classList.toggle("hashtag--choice");
        userCardDOM();
      });
    });
  }