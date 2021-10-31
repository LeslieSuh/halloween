const images = [
  "halloween1.jpg",
  "halloween2.jpg",
  "halloween3.png",
  "halloween4.jpg",
  "halloween5.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
