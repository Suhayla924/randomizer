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


function setup() {
  createCanvas(600, 600);
  background(150);
  textSize(35);

  text("click to randomize", 50, 50);


}

function draw() {

  if (animating == true) {
    ellipse(random(width), random(height), random(25, 200))

  }
}

function randomizer() {
  animation = false;
  if (parks[0]) {
    //displays random name and splices it out of the array list
    background(random(80, 255));
    randomIndex = int(random(parks.length));
    text(`${parks[randomIndex].name}'s favorite color is
    ${parks[randomIndex].color}`, 100, 100);
    //text(parks[randomIndex].name + "'s favorite color is" +
    //parks[randomIndex].color, 50, 50);
    parks.splice(randomIndex, 1);
  } else {
    background(random(80, 255));
    text("nothing left!", 50, 50);
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);
}



//notes
//(object.properties)
//console.log(parks[0].name);

//*computers start counting at zero
//<--------Looking up the values of an array--------->
//parks[1] ="Grand Canyon National Park"
//parks[3]="Death Valley National Park"
//parks[4]="Bryce Canyon National Park"

//console.log("intitial array is")
//console.log(parks);

//<--taking off the last item-->
//parks.pop();
//console.log("array after pop")
//console.log(parks);

//<--adding an item at the end of the list-->
//  parks.push("shasta");
//console.log("array after push")
//console.log(parks);

//<--taking out items from the beginning-->
//parks.shift();
//console.log("array after pop")
//console.log(parks);

//<--adds items to the beginning-->
//parks.unshift("shasta");
//console.log("array after push")
//console.log(parks);

//<--removing items from the middle of an array (index,number)-->
//parks.splice(4, 1);
//console.log("array after push")
//console.log(parks);
