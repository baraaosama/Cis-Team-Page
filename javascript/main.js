const barIcon = document.querySelector(".bar img");
const barMenu = document.querySelector(".bar-menu");
barIcon.addEventListener("click", () => {
    if (barMenu.style.display === "block") {
        barMenu.style.display = "none";
        barIcon.src = "images/bars-solid.svg";
    } else {
        barMenu.style.display = "block";
        barIcon.src = "images/xmark-solid.svg"
    }
})
const events = Array.from(document.querySelectorAll(".event"));
const radios = Array.from(document.querySelectorAll(".radio"));
for (i = 0; i < events.length; i++) {
    events[i].style.display = "none";
    if (i == 2) {
        events[i].style.display = "flex"
    }
}
radios.map((o, index) => {
    o.addEventListener("click", () => {
        radios.map((e) => {
            e.classList.remove("active")
        })
        o.classList.add("active");
        events.map((e) => {
            e.style.display = "none"
        })
        events[index].style.display = "flex"
    })
})
const sponserImages = Array.from(document.querySelectorAll(".sponser img"));
sponserImages.map((e) => {
    e.addEventListener("click", () => {
        sponserImages.map((o) => {
            o.src = "images/TeamYea 4.png"
        })
        e.src = "images/TeamYea 3.png"
    })
})



