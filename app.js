console.log("hello!");

console.dir(document);

//we are going to create a place to store our images
let images = [
  {
    src: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A blonde mouse clasping its hands",
    width: 300,
    height: 200,
  },
  {
    src: "https://images.unsplash.com/photo-1531488152450-3df4d43d3366?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A blonde mouse in leaves with nut in mouth",
    width: 300,
    height: 200,
  },
];

//============================================================//
//!This is help for the arrow keys stretch goal
//you need a gloabal variable to keep track of the index value
//let currentIndex = 0
//============================================================//

//step 1: select the DOM elements that will contain my images
//select the thumbnail container
//select the main image container
const thumbnailContainer = document.getElementById("thumbnail-container");
console.log(thumbnailContainer);
let currentImageIndex = 0;
const mainImageContainer = document.getElementById("main-image-container");
console.log(mainImageContainer);

function init() {
  console.log(images);
  createThumbnails(thumbnailContainer);
  updateMainImage(images[currentImageIndex]);
}
//step 2: we are going to write a function to create the images in our thumbnail

function createThumbnails(thumbnailContainer) {
  images.forEach(function (image, index) {
    let smallImage = document.createElement("img");
    smallImage.setAttribute("src", image.src);
    smallImage.setAttribute("alt", image.alt);
    smallImage.setAttribute("tabindex", "0");
    smallImage.width = 100;
    smallImage.height = 100;
    thumbnailContainer.appendChild(smallImage);
    smallImage.addEventListener("click", function () {
      updateDisplayImage(image);
      document.getElementById("announcer").textContent = thumbnail.alt;
    });
    smallImage.addEventListener("keydown", function (event) {
      if (event.key === "Enter") updateDisplayImage(thumbnail);
      {
        document.getElementById("announcer").textContent = image.alt;
      }
    });
  });
}

// createThumbnails(thumbnailContainer);

window.onload = init;
//we need a loop to run through the array of images and create an instance of each of them
//a document method to create a DOM element to contain my image information(<img>)
//assign a value to the image attributes (src, alt, width, height) -> img.src = "value"
//optional: you can also give each image a classname
//append the new images to the DOM container
//add an event listener to each image, so when the user clicks, the big image shows on the screen
//function eventHandler(){
//when the user clicks the image, we are going to call the function that creates the big image

// createLargeImage(thumbnail[index]);

//}
//thumbnail.addEventListener("click", event handler)

//step3: we need to write a function to create the big image

// function createLargeImage(largeImage) {}

//!you will find a problem here - need to make image being replaced disappear
// set the innerHTML = ""
//
//create an img element
//optional: give images a classname
//set src value
//set alt value
//append large img to the DOM
//dont need a loop for the large images
