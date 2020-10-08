
let randomIndex;
let animating = false;
let fruits = [];
let imageCounter = 0;
let button;
let cnv;


//image function "preload", declare a variable for the images//
function preload() {

  //create an array for the list of images//
  for (let i = 0; i <= 11; i++) {
    fruits[i] = loadImage("fruits/fruit_" + i + ".png")
    //"i is the variable number" ALT way of writing the code (`assets/troll_${i}.JPG`)//
  }

}

function setup() {
  cnv = createCanvas(850, 700);
  cnv.parent("#canvasDiv");
  background(201, 249, 255);
  textSize(20, color(51, 28, 28));
  textFont('Courier new');
  textStyle(BOLD);
  textAlign(CENTER);
  imageMode(CENTER);
  frameRate(7);

  //text("click to randomize", 50, 50, width / 2, height / 2);
  console.log(fruits);

  //button = createButton("click to randomize!");
  button = select("#startButton");
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");

}

function draw() {

  if (animating == true) {
    clear();
    image(fruits[imageCounter], width / 2, height / 2.5);

    if (imageCounter < fruits.length) {
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
    clear();
    randomIndex = int(random(tasks.length));
    text(` Let's ${tasks[randomIndex].name} ${tasks[randomIndex].object} and ${tasks[randomIndex].food}
    today!`, 410, 600);


    image(random(fruits), width / 2, height / 2.5);
    //text(parks[randomIndex].name + "'s favorite color is" +
    //parks[randomIndex].color, 50, 50);
    tasks.splice(randomIndex, 1);
  } else {
    background(random(80,80, 150));
    text("Refresh the page for more!", 200, 200, width / 2, height / 2);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);
}
