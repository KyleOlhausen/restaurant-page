function loadContact() {
    const infoText = document.getElementById("info-text");
    const cardLeft = document.getElementById("left");
    const cardRight = document.getElementById("right");

    infoText.textContent = "Contact us"
    cardLeft.textContent = "";
    cardRight.textContent = "";
    cardLeft.textContent = "Address:\n936 Kiehn Route West Ned, TN 11230\n\nPhone: 281-330-8004\n\nEmail: fakestore@email.com"

    removeClass(cardLeft);
    cardLeft.classList.add("contact");
    removeClass(cardRight);
    cardRight.classList.add("contact");
}

function removeClass(card) {
    if(card.classList.contains("home")){
        card.classList.remove("home");
    }
    else if (card.classList.contains("menu")){
        card.classList.remove("menu");
    }
    else if (card.classList.contains("about")){
        card.classList.remove("about");
    }
}


export default loadContact;