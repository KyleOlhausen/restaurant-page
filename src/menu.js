function loadMenu() {
    const infoText = document.getElementById("info-text");
    const cardLeft = document.getElementById("left");
    const cardRight = document.getElementById("right");

    infoText.textContent = "Menu"

    cardLeft.textContent = "";
    cardRight.textContent = "";

    cardLeft.textContent = "Food\n\n dolor sit - $23\nLorem ipsum - $12\nLorem ipsum - $12\n dolor sit - $23\nLorem ipsum - $12\n dolor sit - $23\n"
    cardRight.textContent = "Drinks\n\nLorem ipsum - $12\n dolor sit - $23\nLorem ipsum - $12\n dolor sit - $23\nLorem ipsum - $12\n dolor sit - $23\n"


    removeClass(cardLeft);
    cardLeft.classList.add("menu");

    removeClass(cardRight);
    cardRight.classList.add("menu");
}

function removeClass(card) {
    if(card.classList.contains("home")){
        card.classList.remove("home");
    }
    else if (card.classList.contains("contact")){
        card.classList.remove("contact");
    }
    else if (card.classList.contains("about")){
        card.classList.remove("about");
    }
}


export default loadMenu;