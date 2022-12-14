






function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
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

    header.appendChild(nav)
    nav.appendChild(homeBtn)
    nav.appendChild(menuBtn)
    nav.appendChild(aboutBtn)
    nav.appendChild(contactBtn)
}