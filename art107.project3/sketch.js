let lettuce;
let apple;
let orange;
let cherry;
let tomato;
let sweetp;
let strawberry;
let peach;

function preload() {
  lettuce = loadImage('fruit/lettuce.png');
  apple = loadImage('fruit/apple.png');
  orange = loadImage('fruit/orange.png');
  cherry = loadImage('fruit/cherries.png');
  tomato = loadImage('fruit/tomato.png');
  sweetp = loadImage('fruit/sweetpotatoes.png');
  strawberry = loadImage('fruit/strawberries.png');
  peach = loadImage('fruit/peaches.png');
}

function setup() {
  createCanvas(1000, 950);
  background(255, 218, 185);
  image(lettuce, 50, 33);
  image(apple, 50, 265);
  image(orange, 50, 505);
  image(cherry, 50, 750);
  image(tomato, 550, 33);
  image(sweetp, 550, 265);
  image(strawberry, 550, 505);
  image(peach, 550, 750);
}

//mouse functions for clicking of the images
function mousePressed() {
  if (mouseX > 50 && mouseX < 160 && mouseY > 50 && mouseY < 200) {
    //LETTUCE
    noStroke();
    fill(255, 0, 0, 95);
    rect(50, 33, 175);
    textLeading(10);
    textSize(17);
    text('Many migrant workers get injured when harvesting lettuce since knives are used to chop heads of lettuce.', mouseX, mouseY);
  } else if (mouseX > 50 && mouseX < 165 && mouseY > 50 && mouseY < 400) {
    //APPLE
    noStroke();
    fill(255, 0, 0, 95);
    rect(50, 265, 175);
    textSize(17);
    text('Crops that grow on trees are often difficult to harvest for migrant workers. ', 10, 500);
    text('The process is a slow and careful process since harvesters must climb up and down ladders carefully', 10, 520);
  } else if (mouseX > 50 && mouseX < 165 && mouseY > 50 && mouseY < 650) {
    //ORANGE
    noStroke();
    fill(255, 0, 0, 95);
    rect(50, 505, 175);
    textSize(17);
    text('Another labor-intensive crop to harvest that farmers pay by the bin.', 10, 500);
    text('Migrant farmers find it difficult to fill bins of oranges.', 10, 520);
  } else if (mouseX > 50 && mouseX < 165 && mouseY > 50 && mouseY < 850) {
    //CHERRY
    noStroke();
    fill(255, 0, 0, 95);
    rect(50, 750, 175);
    textSize(17);
    text('Women migrant workers are more likely to harvest cherries due to the profitless work. ', 10, 500);
    text('Cherries are a difficult crop to harvest due to their size and how easily they can bruise. ', 10, 520);
  } else if (mouseX > 550 && mouseX < 650 && mouseY > 33 && mouseY < 350) {
    //TOMATO
    noStroke();
    fill(255, 0, 0, 95);
    rect(550, 33, 175);
    textSize(17);
    text('Migrant workers in Alabama made roughly $60 in a day’s work in 2012 picking tomatoes.', 0,500);
  } else if (mouseX > 550 && mouseX < 650 && mouseY > 265 && mouseY < 450) {
    //SWEETP
    noStroke();
    fill(255, 0, 0, 95);
    rect(550, 265, 175);
    textSize(17);
    text('A migrant worker is paid 35 cents for each pounced bucket they fill with sweet potatoes along with their hourly wage of $6.75 in North Carolina.', 10, 500);
  } else if (mouseX > 550 && mouseX < 650 && mouseY > 505 && mouseY < 675) {
    //STRAWBERRY
    noStroke();
    fill(255, 0, 0, 95);
    rect(550, 505, 175);
    textSize(17);
    text('Harvesting strawberries are very labor-intensive due to their small size', 10,400);
    text('Migrant workers spend long hours crouching and bending when harvesting them.', 10,410);
    text('Like other smaller fruits, it takes a longer time to reach their quota.', 10,420);
  } else if (mouseX > 550 && mouseX < 650 && mouseY > 750 && mouseY < 850) {
    //PEACHES
    noStroke();
    fill(255, 0, 0, 95);
    rect(550, 750, 175);
    textSize(17);
    text('Many farmers pay by the bin when harvesting peaches.', 10, 400);
    text('However, it can take over an hour for  migrant workers to fill these bins depending on their experience.', 10, 410)
  }
}


function draw() {
  ///text of the produce
  drawLet();
  drawApple();
  drawOrange();
  drawCherry();
  drawTomato();
  drawSweetP();
  drawStrawberry();
  drawPeach();
  drawGrid();
}

function drawLet() {
  fill(5, 70, 40);
  noStroke();
  textSize(28);
  text('Lettuce', 250, 75);
  textSize(20);
  text('$1.3 a lb in 2019', 250, 100);

}

function drawApple() {
  fill(5, 70, 40);
  noStroke();
  textSize(28);
  text('Apples', 250, 300);
  textSize(20);
  text('$1.32 a lb in 2017', 250, 325);
}

function drawOrange() {
  fill(5, 70, 40);
  noStroke();
  textSize(24);
  text('Oranges and Lemons', 250, 540);
  textSize(20);
  text('$1.33 - $2 a lb in 2019', 250, 565);
}

function drawCherry() {
  fill(5, 70, 40);
  noStroke();
  textSize(28);
  text('Cherries', 250, 775);
  textSize(20);
  text('$3.21 per pound in 2016', 250, 800);
}

function drawTomato() {
  fill(5, 70, 40);
  noStroke();
  textSize(28);
  text('Tomatoes', 750, 75)
  textSize(20);
  text('$1.95 a lb in 2019', 750, 100);
}

function drawSweetP() {
  fill(5, 70, 40);
  noStroke();
  textSize(28);
  text('Sweet Potatoes', 750, 300);
  textSize(20);
  text('$1.05 a lb in 2016', 750, 325);
}

function drawStrawberry() {
  fill(5, 70, 40);
  noStroke();
  textSize(28);
  text('Strawberries', 750, 540);
  textSize(20);
  text('$2.51 a lb in 2016', 750, 565);
}
function drawPeach() {
  fill(5, 70, 40);
  noStroke();
  textSize(28);
  text('Peaches', 750, 775);
  textSize(20);
  text('$1.68 a lb in 2018', 750, 800);
}

function drawGrid() {
  for (var j = 0; j < width; j += width / 2) {
    for (var p = 0; p < height; p += height / 4) {
      stroke(255,153,50);
      color(55, 55, 55);
      strokeWeight(5);
      line(j, 0, j, height);
      line(0, p, width, p);
    }
  }
}
