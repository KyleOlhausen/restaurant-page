function loadAbout() {
    const infoText = document.getElementById("info-text");
    const cardLeft = document.getElementById("left");
    const cardRight = document.getElementById("right");

    infoText.textContent = "About us"
    cardLeft.textContent = "";
    cardRight.textContent = "";
    cardLeft.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsam earum unde quas et eveniet quasi assumenda quo, alias, facilis eos iste ullam illum? Nam eius consequatur pariatur debitis sunt."

    removeClass(cardLeft);
    cardLeft.classList.add("about");
    removeClass(cardRight);
    cardRight.classList.add("about");
}

function removeClass(card) {
    if(card.classList.contains("home")){
        card.classList.remove("home");
    }
    else if (card.classList.contains("contact")){
        card.classList.remove("contact");
    }
    else if (card.classList.contains("menu")){
        card.classList.remove("menu");
    }
}


export default loadAbout;