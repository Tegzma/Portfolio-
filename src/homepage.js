const homepageSelector = document.querySelector("#homePageSelector");

const title = document.createElement("h1");
title.textContent = "Welcome to my World!";
const clickPrompt = document.createElement("p");
clickPrompt.textContent = "Click on the image to explore..";
homepageSelector.appendChild(title);
homepageSelector.appendChild(clickPrompt);
