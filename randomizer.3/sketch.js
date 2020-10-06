// Parks that I have visted with my family <3
let parks = [{
  name: "yellowstone",
  color: "yellow"
}, {
  name: "grand canyon",
  color: "rust"
}, {
  name: "sequioa",
  color: "forest"
}, {
  name: "death",
  color: "sandy"
}, {
  name: "bryce",
  color: "orange"
}, {
  name: "arches",
  color: "mars"
}, {
  name: "zion",
  color: "valleygreen"
}, {
  name: "Yosemite",
  color: "snowy"
}];

let randomIndex;
let animating = false;
let dinosaurs = [];

//image function "preload", declare a variable for the images//
function preload() {

  //create an array for the list of images//
  for (let i = 0; i <= 5; i++){
    dinosaurs[i] = loadImage(`assets/dinosaur_${i}.png`)
    //"i is the variable number" ALT way of writing the code (`assets/troll_${i}.JPG`)//
  }

}


function setup() {
  createCanvas(600, 600);
  background(150);
  textSize(35, color(random(255)));

  text("click to randomize", 50, 50);
  console.log(dinosaur);


}

function draw() {

  if (animating == true) {
    stroke(random(width), random(height), random(25, 200))
    fill(random(255))
    ellipse(random(width), random(height), random(255))

  }
}

function randomizer() {
  animation = false;
  if (parks[0]) {
    //displays random name and splices it out of the array list
    background(random(80, 150));
    randomIndex = int(random(parks.length));
    text(`${parks[randomIndex].name}'s favorite color is
    ${parks[randomIndex].color}`, 100, 200);
    //text(parks[randomIndex].name + "'s favorite color is" +
    //parks[randomIndex].color, 50, 50);
    parks.splice(randomIndex, 1);
  } else {
    background(random(80, 150));
    text("nothing left!", 100, 200);
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);
}
