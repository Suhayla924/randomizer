// Parks that I have visted with my family <3
let parks = [{
  name: "yellowstone",
  color: "yellowy"
}, {
  name: "grand canyon",
  color: "rusty"
}, {
  name: "sequioa",
  color: "blue"
}, {
  name: "John Muir",
  color: "olive"
}, {
  name: "bryce",
  color: "orangey"
}, {
  name: "arches",
  color: "marsy"
}, {
  name: "zion",
  color: "valleygreeny"
}, {
  name: "Yosemite",
  color: "snowy"
},{
  name: "Serria",
  color: "steel"
},{
  name: "Tahoe",
  color: "violet"
}];

let randomIndex;
let animating = false;
let dinosaurs = [];
let imageCounter = 0;
let button;

//image function "preload", declare a variable for the images//
function preload() {

  //create an array for the list of images//
  for (let i = 0; i <= 8; i++) {
    dinosaurs[i] = loadImage("assets/dinosaur_" + i + ".png")
    //"i is the variable number" ALT way of writing the code (`assets/troll_${i}.JPG`)//
  }

}


function setup() {
  createCanvas(700, 700);
  background(150);
  textSize(35, color(random(255)));
  textAlign(CENTER);
  imageMode(CENTER);
  frameRate(7);

  text("click to randomize", 50, 50, width / 2, height / 2);
  console.log(dinosaurs);

  button = createButton("click to randomize!");
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");

}

function draw() {

  if (animating == true) {
    clear();
    image(dinosaurs[imageCounter], width / 2, height / 2);

    if (imageCounter < dinosaurs.length) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
      }
    }

}

function randomizer() {
  animation = false;
  if (parks[0]) {
    //displays random name and splices it out of the array list
    //background(random(80, 150));
    clear();
    randomIndex = int(random(parks.length));
    text(` A ${parks[randomIndex].color} dinosaur named ${parks[randomIndex].name}
    pops out of the egg!`,width / 2, height - 10);
    image(random(dinosaurs), width / 2, height / 2);
    //text(parks[randomIndex].name + "'s favorite color is" +
    //parks[randomIndex].color, 50, 50);
    parks.splice(randomIndex, 1);
  } else {
    background(random(80, 150));
    text("nothing left!", 100, 200, width / 2, height / 2);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);
}
