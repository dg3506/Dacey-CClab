//look at random() slides from today
let x;
let y;
//if speed is negative it moves to the left
let speedX = 1;
let speedY = 2;
//let acceleration = 0.1;

function setup() {
  createCanvas(600, 600);
  y = height/2;
  x = width/2;
  prevX = width/2;
  prevY = height/2;
  
  // speedX = random(-10, 10);
  // speedY = random(-10, 10);
  console.log("SPEED X is: ", speedX);
  console.log("SPEED Y is: ", speedY);
}

function draw() {
  background(0,5);
  speedX = random(-10,10);
  speedY = random(-10,10);
  // apply acceleration to speed;
  //speed = speed + acceleration;
  
  //assure speed is never bigger than 30
  //if(speed>30){
    //speed=30;
  //}
  //speed = constrain(speed,0,30);
  
  //apply speed to location;
  x = x + speedX;
  y = y + speedY;
  
  
 //  if(x>width){
   //makes it bounce back and forth
 //    speed = -10;
  //makes x restart from 0
 //    //x=0;
 // }else if(x<0){
 //   speed = 10;
 // }
  //shorter way to make it bounce
  if( x > width-25 || x < 25){
    speedX = speedX*-1
  }
  //Can adjust by adding the circle's radius to make the bounce look more realistic, as seen with the 25
  if( y > height-25|| y < 25){
    speedY = speedY*-1
  }
  
  
  
  //draw circle at new location;
  fill("AliceBlue")
  ellipse(x,y,50);
  
  stroke(255);
  line(prevX, prevY, x, y);
  
  prevX = x;
  prevY = y;

}