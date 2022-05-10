let car;
let goingBack = [];
let goingFront = [];
let limit = 12;
let timer = 0;
let laps = 0;
let gameOver = false;
let b

function setup() {
  createCanvas(outerWidth, 400);
  car = new Car(0, height/2-50);
  goingBack.push(new otherCar(width, random(20, height / 2 - 20), true));
  goingFront.push(new otherCar(0, random(height / 2, height - 20), false));
  b = createButton('Replay');
}

function drawBackground() {
  let darkness = gameOver ? 50 : 0;
  
  background(72 - darkness, 61 - darkness, 139 - darkness);
  push();
  fill(255 - darkness,255 - darkness,255 - darkness);
  stroke(255 - darkness,255 - darkness,255 - darkness);
  strokeWeight(5);
  line(0,height/2, width, height/2);
  line(0, 10, width, 10);
  line(0, height-10, width, height-10);
  pop();
}

function draw() {
  if(!gameOver) {
    drawBackground()

    timer += 1;

    text("Up Down Left Right", 0, 25);
    text("Lap " + laps, 0, 40)
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
        gameOver = true;

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
        gameOver = true;

      goingFront[i].update();
      goingFront[i].display();
    }

    if(laps == 3)
      gameOver = true;  

    car.update(this);
    car.display();
  } else {
    drawGameOver();
    noLoop();
  }
}

function drawGameOver() {
  drawBackground();
 
  b.size(100, 50);
  b.position(width / 2 - 100 / 2, height / 2 - 50 / 2);
  b.mousePressed(() => {
    goingBack = [];
    goingFront = [];
    car = new Car(0, height/2-50);
    goingBack.push(new otherCar(width, random(20, height / 2 - 20), true));
    goingFront.push(new otherCar(0, random(height / 2, height - 20), false));
    timer = 0;
    laps = 0;
    gameOver = false;
    b.position(-100, -100);
    loop();
  });
  
  for(let i = 0; i < goingBack.length; i++)
    goingBack[i].display();

  for(let i = 0; i < goingFront.length; i++) 
    goingFront[i].display();
  
  car.display();

}

//Car you're driving
class Car{
  constructor(x,y){
  this.x = x;
  this.y = y;
}
  update(){
    if(keyIsDown(UP_ARROW)){
      this.y = this.y-1
    }
    if(keyIsDown(RIGHT_ARROW)){
      this.x = this.x+1
    }
    if(keyIsDown(DOWN_ARROW)){
      this.y = this.y+1
    }
    if(keyIsDown(LEFT_ARROW)){
      this.x = this.x-1
    }
    if(this.x > width){
      laps += 1
      this.x = 0
    }

  }
  display(){
    let darkness = gameOver ? 50 : 0;
    
    stroke(0 - darkness, 57 - darkness, 230 - darkness);
    strokeWeight(2);
    fill(255 - darkness,255 - darkness,255 - darkness);
    rect(this.x,this.y,10,25);
    rect(this.x+20,this.y,10,25);
    rect(this.x, this.y+7, 35, 12);
  }
}

//The other cars
class otherCar{
  constructor(x,y,goingBack){
  this.x = x;
  this.y = y;
  this.goingBack = goingBack;
  this.speed = random(1,4);
}
  update(){
    if(this.goingBack){
       this.x -= this.speed;
       }else {
        this.x += this.speed;
       }
    
  }
  display(){
    let darkness = gameOver ? 50 : 0;
    
    stroke(173 - darkness, 255 - darkness, 47 - darkness);
    fill(0,0,0);
    rect(this.x,this.y,10,25);
    rect(this.x+20,this.y,10,25);
    rect(this.x, this.y+7, 35, 12);
  }
}
