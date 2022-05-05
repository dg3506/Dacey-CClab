let cars;
let otherCars = [];
let goingBack = [];
let goingFront = [];
let limit = 3;
let timer = 0;

function setup() {
  createCanvas(400, 400);
   car = new Car(0, height/2-50);
  goingBack.push(new otherCar(width, random(20, height / 2 - 20), true));
  goingFront.push(new otherCar(0, random(height / 2, height - 20), false))
}

function draw() {
  background(72, 61, 139);
   timer += 1;
  push();
  fill(255,255,255);
  stroke(255,255,255);
  strokeWeight(5);
  line(0,height/2, width, height/2);
  line(0, 10, width, 10);
  line(0, height-10, width, height-10);
  pop();
  
  text("WASD", 0, 25);
  push();
  for(let i = 0; i>20; i++){
    fill(255,255,255);
    line(0, height/2 - 75, 15, height/2 - 75);
  }
  pop();
  if(timer % 100 == 0) {
    if(goingBack.length <= limit) {
      goingBack.push(new otherCar(width, random(20, height / 2 - 20), true));
    }
    if(goingFront.length <= limit) {
      goingFront.push(new otherCar(0, random(height / 2, height - 20), false));
    }
  }
  
 for(let i = 0; i < goingBack.length; i++) {
    if(goingBack[i].x < -30)
      goingBack.shift();

    if(goingBack[i].x < car.x + 35 && 
       goingBack[i].x + 35 > car.x &&
       goingBack[i].y < car.y + 25 &&
       goingBack[i].y + 25 > car.y)
      noLoop();
    
    goingBack[i].update();
    goingBack[i].display();
  }
  
  for(let i = 0; i < goingFront.length; i++) {
    if(goingFront[i].x > width)
      goingFront.shift();
      
  if(goingFront[i].x < car.x + 35 && 
     goingFront[i].x + 35 > car.x &&
     goingFront[i].y < car.y + 25 &&
     goingFront[i].y + 25 > car.y)
      noLoop();

    goingFront[i].update();
    goingFront[i].display();
  }
  
    car.update();
    car.display();
}

//Car you're driving
class Car{
  constructor(x,y){
  this.x = x;
  this.y = y;
}
  update(){
    if(keyIsDown(87)){
      this.y = this.y-1
    }
    if(keyIsDown(68)){
      this.x = this.x+1
    }
    if(keyIsDown(83)){
      this.y = this.y+1
    }
    if(keyIsDown(65)){
      this.x = this.x-1
    }
    if(this.x > width){
      this.x = 0
    }
  }
  display(){
    stroke(0, 57, 230);
    strokeWeight(2);
    fill(255,255,255);
    rect(this.x,this.y,10,25);
    rect(this.x+20,this.y,10,25);
    rect(this.x, this.y+7, 35, 12);
  }
}

//The other bitches cars
class otherCar{
  constructor(x,y,goingBack){
  this.x = x;
  this.y = y;
  this.goingBack = goingBack
}
  update(){
    if(this.goingBack){
       this.x -= 1;
       }else {
         this.x += 1;
       }
    
  }
  display(){
    stroke(173, 255, 47);
    fill(0,0,0);
    rect(this.x,this.y,10,25);
    rect(this.x+20,this.y,10,25);
    rect(this.x, this.y+7, 35, 12);
  }
}

