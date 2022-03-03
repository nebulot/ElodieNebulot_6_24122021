function lightboxDOM(){
    	const element = document.createElement("div");
        element.className = "lightbox";
        
        
        const closeIcon = document.createElement("i");
        closeIcon.classList.add(`fas`);
        closeIcon.classList.add(`fa-times`);
        closeIcon.id = "#close";
        closeIcon.ariaLabel = "Fermer la fenêtre de visualisation";
        const nextIcon = document.createElement("button");
        nextIcon.className = "lightbox_next";
        nextIcon.ariaLabel = "Image suivante";
        nextIcon.textContent = "Suivant";
        const previousIcon =  document.createElement("button");
        previousIcon.className = "lightbox_previous";
        previousIcon.ariaLabel = "Image précédente";
        previousIcon.textContent = "Précédent";
        element.appendChild(closeIcon);
        element.appendChild(nextIcon);
        element.appendChild(previousIcon);

        return element
}
