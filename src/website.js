






function createHeader() {
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    
    const homeBtn = document.createElement("button");
    homeBtn.textContent = "Home";
    homeBtn.addEventListener('click', e  => {
        loadHome()
    });

    const menuBtn = document.createElement("button");
    menuBtn.textContent = "Home";
    menuBtn.addEventListener('click', e  => {
        loadMenu()
    });

    const aboutBtn = document.createElement("button");
    aboutBtn.textContent = "Home";
    aboutBtn.addEventListener('click', e  => {
        loadAbout()
    });

    const contactBtn = document.createElement("button");
    contactBtn.textContent = "Home";
    contactBtn.addEventListener('click', e  => {
        loadContact()
    });

    const title = document.createElement("h1");
    title.textContent = "Coffee Shop";

    header.appendChild(nav)
    nav.appendChild(homeBtn)
    nav.appendChild(menuBtn)
    nav.appendChild(aboutBtn)
    nav.appendChild(contactBtn)
    header.appendChild(title)
}

function createInfo() {

}

function createFooter() {
    const footer = document.createElement("footer");
    const locContainer = document.createElement("div");
    const hrsContainer = document.createElement("div");

    const locTitle = document.createElement("h4");
    const locLine1 = document.createElement("p");
    const locLine2 = document.createElement("p");
    const locLine3 = document.createElement("p");

    locTitle.textContent = "Location"
    locLine1.textContent = "936 Kiehn Route"
    locLine2.textContent = "West Ned, TN 11230"
    locLine3.textContent = "281-330-8004"


    const hrsTitle = document.createElement("h4");
    const hrsLine1 = document.createElement("p");
    const hrsLine2 = document.createElement("p");
    const hrsLine3 = document.createElement("p");
    const hrsLine4 = document.createElement("p");

    hrsTitle.textContent = "Hours"
    hrsLine1.textContent = "Monday - Thursday 11am to 9pm"
    hrsLine2.textContent = "Friday 11am to 9pm"
    hrsLine3.textContent = "Saturday 10am to 10pm"
    hrsLine4.textContent = "Sunday 10am to 9pm"

    footer.appendChild(locContainer);
    footer.appendChild(hrsContainer);
    locContainer.appendChild(locTitle);
    locContainer.appendChild(locLine1);
    locContainer.appendChild(locLine2);
    locContainer.appendChild(locLine3);
    hrsContainer.appendChild(hrsTitle);
    hrsContainer.appendChild(hrsLine1);
    hrsContainer.appendChild(hrsLine2);
    hrsContainer.appendChild(hrsLine3);
    hrsContainer.appendChild(hrsLine4);

}