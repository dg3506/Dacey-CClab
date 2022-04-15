/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 32).
  2. adjust line 19 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
  
*/
let dancer;

function setup() {
  // no adjustments in the setup function needed...
  createCanvas(windowWidth, windowHeight);
  // ...except to adjust the dancer's name on the next line:
  dancer = new daceyDancer(width/2, height/2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  dancer.update();
  dancer.display(); 
}


// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class daceyDancer{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    this.angle = [];
    this.angleV = [];
    this.amp = 15;
    this.sinAxisIncrement = random(0,360);
    this.total = 55
    for(let i = 0; i < this.total; i++){
      this.angle[i] = map(i, 0, this.total, 0, 2*TWO_PI);
    } 
    
  }  
  update(){
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    let rad = radians(this.sinAxisIncrement);
    let sinValue = sin(rad);
    
    this.xOffset = map(sinValue, -1, 1, -10, 10);
    
    this.sinAxisIncrement += 1; 
    
    
    
  }
  display(){
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);
    
    let rad = radians(this.sinAxisIncrement);
    // ******** //
    // ⬇️ draw your dancer here ⬇️
    //butt
    push();
    translate(0 - this.xOffset,0);
    fill("#7C3A52");
    ellipse(0,35, 65, 50)
    pop();
    //body
    push();
    fill("#E3B580");
    ellipse(0,25, 60,70);
    pop();
    //left
    push();
    beginShape();
    for(let i = 0; i < this.angle.length; i++){
      stroke(227, 181, 128);
      fill(227, 181, 128);
      let y = map(sin(this.angle[i]), -1, 1, 0, 7);
      let x = map(i, 0, this.angle.length, -55, -25);
      vertex(x,y)
    }
    endShape(CLOSE);
    pop();
    //right arm
    push();
    beginShape();
     for(let i = 0; i < this.angle.length; i++){
      fill(227, 181, 128);
      stroke(227, 181, 128);
      let y = map(sin(this.angle[i]), -1, 1, 0, 7);
      let x = map(i, 0, this.angle.length, 25, 55)
      vertex(x,y)
      this.angle[i]+= 0.25;
    }
    endShape(CLOSE);
    pop();
    //legs
    push();
    stroke("#E3B580");
    strokeWeight(5);
    line(-10,55, -10, 75);
    line(10,55, 10, 75)
    pop();
    //pants
    push();
    fill("#7C3A52");
    rect(-29,38, 30, 25);
    rect(0,38, 30, 25);
    pop();
    //face
    push();
    translate(0 + this.xOffset, 0);
    push();
    fill("#E3B580");
    ellipse(0,0,55,50);
    pop();
    //eyes
    circle(-14,1,12);
    circle(14,1,12);
    push();
    fill(0);
    circle(-14,1,6.5);
    circle(14,1,6.5);
    pop();
    //nose
    push();
    noFill();
    arc(0, 6, 16, 5, PI,TWO_PI)
    pop();
    push();
    fill("#2A57C4")
    arc(0,4,6,9, TWO_PI,PI)
    pop();
    //mouth
    push();
    noFill();
    line(0, 10, 0, 14);
    arc(-4, 15, 10, 5, TWO_PI + 0.3, PI );
    arc(4, 15, 10, 5, TWO_PI, PI - 0.3);
    pop();
    //hat
    push();
    fill("#EB6976")
    ellipse(0,-13,55,15);
    noStroke();
    rect(-20, -52, 40, 40,10);
    pop();
    //Cross thing
    push();
    stroke("#F5F5F5");
    strokeWeight(7);
    line(-5, -20, 5, -30);
    line(5, -20, -5, -30)
    pop();
    push();
    fill("#A87A49");
    stroke("#A87A49");
    strokeWeight(5);
    line()
    pop();
    pop();
    
    
    
    // ⬆️ draw your dancer here ⬆️
    
    
    pop();
  }  
  
  
}





/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmomize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 

*/