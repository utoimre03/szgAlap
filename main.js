import { gombOsszeallit } from "./fuggvenyek.js";

const szamokELEM = document.getElementsByClassName("szamok")
szamokELEM[0].innerHTML = gombOsszeallit();

const gombELEMEK = document.querySelectorAll(".szamok button")

for (let index = 0; index < gombELEMEK.length; index++) {
    gombELEMEK[index].addEventListener("click", kattintas)
}

function kattintas(event) {
    console.log(event.target)
    const kifELEM = document.querySelector(".kifejezes")
    kifELEM.innerHTML += event.target.innerHTML
}