// Parks that I have visted with my family <3
let parks = ["yellowstone","grand", "sequioa", "death", "bryce", "arches", "zion", "Yosemite"];

function setup() {
  createCanvas(600, 600);
  background(220);

  //*computers start counting at zero
  //<--------Looking up the values of an array--------->
  //parks[1] ="Grand Canyon National Park"
  //parks[3]="Death Valley National Park"
  //parks[4]="Bryce Canyon National Park"

  console.log("intitial array is")
  console.log(parks);

  parks.pop();
  console.log("array after pop")
  console.log(parks);

  dogs.push("shasta");
  console.log("array after push")
  console.log(parks);

}

function draw() {

}
