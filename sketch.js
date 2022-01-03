var canvas, backgroundImage;
var hogwarts;
var questions;
var button,button2;
var question, contestant, quiz;

function preload(){
  hogwarts=loadImage("hogwarts.jpg");
}
function setup(){
  canvas = createCanvas(windowWidth,windowHeight);

  database = firebase.database();
  quiz = new Quiz();
//call the start() method inside the quiz class
quiz.start();
}


function draw(){
  background(hogwarts);

}
