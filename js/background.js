const images=[
    "background1.jpg",
    "background2.jpg",
    "background3.jpg",
];

const chosenImage=images[Math.floor(Math.random()*images.length)];

const bg=document.createElement("img");

bg.src=`images/${chosenImage}`;

document.body.appendChild(bg);