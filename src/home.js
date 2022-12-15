import loadMenu from "./menu";

function loadHome() {
    const infoText = document.getElementById("info-text");
    const cardLeft = document.getElementById("left");
    const cardRight = document.getElementById("right");
    const leftText = document.createElement("h3");
    const rightText = document.createElement("h3");

    infoText.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui dolorum ullam atque illum quia consectetur ut molestias ipsam! Reprehenderit sunt, modi eos repudiandae iure distinctio ipsum! Eos nesciunt velit labore!";

    cardLeft.textContent = "";
    cardRight.textContent = "";

    removeClass(cardLeft);
    cardLeft.classList.add("home");

    removeClass(cardRight)
    cardRight.classList.add("home");

    cardLeft.textContent = "Order Online";
    cardRight.textContent = "Menu";

    cardLeft.appendChild(leftText);
    cardRight.appendChild(rightText);

    cardRight.addEventListener('click', () => {
        if(cardRight.classList.contains("home"))loadMenu()
    });
}

function removeClass(card) {
    if(card.classList.contains("about")){
        card.classList.remove("about");
    }
    else if (card.classList.contains("contact")){
        card.classList.remove("contact");
    }
    else if (card.classList.contains("menu")){
        card.classList.remove("menu");
    }
}

export default loadHome;