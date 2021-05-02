const homepageSelector = document.querySelector("#homePageSelector");

const title = document.createElement("h1");
// new CircleType(title).radius(384);
title.textContent = "Welcome to my World";
const clickPrompt = document.createElement("p");
clickPrompt.textContent = "Click on the image to explore..";
const photoDiv = document.createElement("div");
const studentPhoto = document.createElement("img");
studentPhoto.src = "../static/img/studentPhoto.jpeg";
photoDiv.classList.add("homepage");
homepageSelector.appendChild(title);
homepageSelector.appendChild(clickPrompt);
photoDiv.appendChild(studentPhoto);
homepageSelector.appendChild(photoDiv);
