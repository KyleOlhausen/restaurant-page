(()=>{"use strict";function t(t){t.classList.contains("about")?t.classList.remove("about"):t.classList.contains("contact")?t.classList.remove("contact"):t.classList.contains("menu")&&t.classList.remove("menu")}const e=function(){const e=document.getElementById("info-text"),n=document.getElementById("left"),o=document.getElementById("right"),d=document.createElement("h3"),s=document.createElement("h3");e.textContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui dolorum ullam atque illum quia consectetur ut molestias ipsam! Reprehenderit sunt, modi eos repudiandae iure distinctio ipsum! Eos nesciunt velit labore!",n.textContent="",o.textContent="",t(n),n.classList.add("home"),t(o),o.classList.add("home"),n.textContent="Order Online",o.textContent="Menu",n.appendChild(d),o.appendChild(s)};function n(t){t.classList.contains("home")?t.classList.remove("home"):t.classList.contains("contact")?t.classList.remove("contact"):t.classList.contains("menu")&&t.classList.remove("menu")}function o(t){t.classList.contains("home")?t.classList.remove("home"):t.classList.contains("contact")?t.classList.remove("contact"):t.classList.contains("about")&&t.classList.remove("about")}!function(){const t=document.getElementById("content");t.appendChild(function(){const t=document.createElement("header"),d=document.createElement("nav"),s=document.createElement("button");s.textContent="Home",s.addEventListener("click",(t=>{e()}));const a=document.createElement("button");a.textContent="Menu",a.addEventListener("click",(t=>{!function(){const t=document.getElementById("info-text"),e=document.getElementById("left"),n=document.getElementById("right");t.textContent="Menu",e.textContent="",n.textContent="",e.textContent="Food\n\n dolor sit - $23\nLorem ipsum - $12\nLorem ipsum - $12\n dolor sit - $23\nLorem ipsum - $12\n dolor sit - $23\n",n.textContent="Drinks\n\nLorem ipsum - $12\n dolor sit - $23\nLorem ipsum - $12\n dolor sit - $23\nLorem ipsum - $12\n dolor sit - $23\n",o(e),e.classList.add("menu"),o(n),n.classList.add("menu")}()}));const c=document.createElement("button");c.textContent="About",c.addEventListener("click",(t=>{!function(){const t=document.getElementById("info-text"),e=document.getElementById("left"),o=document.getElementById("right");t.textContent="About us",e.textContent="",o.textContent="",e.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsam earum unde quas et eveniet quasi assumenda quo, alias, facilis eos iste ullam illum? Nam eius consequatur pariatur debitis sunt.",n(e),e.classList.add("about"),n(o),o.classList.add("about")}()}));const i=document.createElement("button");i.textContent="Contact",i.addEventListener("click",(t=>{loadContact()}));const m=document.createElement("h1");return m.classList.add("title"),m.textContent="Coffee Shop",t.appendChild(d),d.appendChild(s),d.appendChild(a),d.appendChild(c),d.appendChild(i),t.appendChild(m),t}()),t.appendChild(function(){const t=document.createElement("main"),e=document.createElement("h2"),n=document.createElement("div"),o=document.createElement("div"),d=document.createElement("div");return t.classList.add("info"),e.setAttribute("id","info-text"),n.classList.add("cards"),o.classList.add("card"),o.setAttribute("id","left"),d.classList.add("card"),d.setAttribute("id","right"),t.appendChild(e),t.appendChild(n),n.appendChild(o),n.appendChild(d),t}()),t.appendChild(function(){const t=document.createElement("footer"),e=document.createElement("div"),n=document.createElement("div"),o=document.createElement("h4"),d=document.createElement("p"),s=document.createElement("p"),a=document.createElement("p");o.textContent="Location",d.textContent="936 Kiehn Route",s.textContent="West Ned, TN 11230",a.textContent="281-330-8004";const c=document.createElement("h4"),i=document.createElement("p"),m=document.createElement("p"),l=document.createElement("p"),u=document.createElement("p");return c.textContent="Hours",i.textContent="Monday - Thursday 11am to 9pm",m.textContent="Friday 11am to 9pm",l.textContent="Saturday 10am to 10pm",u.textContent="Sunday 10am to 9pm",t.appendChild(e),e.appendChild(o),e.appendChild(d),e.appendChild(s),e.appendChild(a),t.appendChild(n),n.appendChild(c),n.appendChild(i),n.appendChild(m),n.appendChild(l),n.appendChild(u),t}()),e()}()})();