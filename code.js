"use strict"

let swt = document.getElementById("switch");

let vid = document.getElementById("vid-js");


swt.addEventListener("click", (e) => {

    if (swt.querySelector("#in").checked === true) {

        vid.pause();
    }
    else {

        vid.play();
    }
})