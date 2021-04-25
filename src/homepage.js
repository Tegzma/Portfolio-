const homepageSelector = document.querySelector("#homePageSelector");

// const photoDiv = createElement("div");
const studentPhoto = createElement("img");
// studentPhoto.src = "../static/studentPhoto.jpeg";
const title = document.createElement("h1");
title.textContent = "Welcome to my World";
const clickPrompt = document.createElement("p");
clickPrompt.textContent = "Click on the image to explore..";
// photoDiv.appendChild(studentPhoto);
// homepageSelector.appendChild(studentPhoto);
homepageSelector.appendChild(title);
homepageSelector.appendChild(clickPrompt);
