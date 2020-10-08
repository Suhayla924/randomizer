

let randomIndex;
let animating = false;
let dinosaurs = [];
let imageCounter = 0;
let button;
let cnv;
let nameInputs = [];

//image function "preload", declare a variable for the images//
function preload() {

  //create an array for the list of images//
  for (let i = 0; i <= 8; i++) {
    dinosaurs[i] = loadImage("assets/dinosaur_" + i + ".png")
    //"i is the variable number" ALT way of writing the code (`assets/troll_${i}.JPG`)//
  }

}

function setup() {
  cnv = createCanvas(850, 700);
  cnv.parent("#canvasDiv");
  background(150);
  textSize(35, color(random(255)));
  textAlign(CENTER);
  imageMode(CENTER);
  frameRate(7);

  //text("click to randomize", 50, 50, width / 2, height / 2);
  console.log(dinosaurs);

  //button = createButton("click to randomize!");
  button = select("#startButton");
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");

  nameInput.push(createInput());
  nameInput.parent("#inputFields");

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
  if (tasks[0]) {
    //displays random name and splices it out of the array list
    //background(random(80, 150));
    clear();
    randomIndex = int(random(tasks.length));
    text(` Let's ${tasks[randomIndex].name} ${tasks[randomIndex].object} and ${tasks[randomIndex].food}
    today.`,width / 2, height - 10);
    image(random(dinosaurs), width / 2, height / 2);
    //text(parks[randomIndex].name + "'s favorite color is" +
    //parks[randomIndex].color, 50, 50);
    tasks.splice(randomIndex, 1);
  } else {
    background(random(80, 150));
    text("nothing left!", 100, 200, width / 2, height / 2);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);
}
