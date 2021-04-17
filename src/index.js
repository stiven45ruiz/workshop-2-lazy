/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import {registerImage} from './lazy'

//
console.log('Happy hacking :)')

const minimun = 1;
const maximun = 122;
const random = () => Math.floor(Math.random() * (maximun - minimun)) + minimun;

const createImageNode = () =>{
    const container = document.createElement('figure')
    container.className = "p-4";

    const image = document.createElement('img');
    image.className = "mx-auto";
    image.width = "320";
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(image);

    return container;

}

const nuevaImagen = createImageNode();
const mountNode = document.getElementById("images");

const addButton = document.querySelector('.butttonAdd')


const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
};
addButton.addEventListener("click", addImage);

