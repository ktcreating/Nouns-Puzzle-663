let bg;
let rain;
let locked;
let light;

function setup() {
let canvas = createCanvas(600, 600);
  canvas.parent('sketch-container');
rain = 0;
  
  bg = loadImage("bg.png");
  ans = loadImage("ans.png");
  lightning1 = loadImage("lightning1.png");
  rain1 = loadImage("rain1.png");
  rain2 = loadImage("rain2.png");
  rain3 = loadImage("rain3.png");
  light = false;
  
    input = createInput();
  input.position(0, 600);

  button = createButton('submit');
  button.position(input.x + input.width, 600);
  button.mousePressed(greet);

  greeting = createElement('h2');
  textAlign(CENTER);
  textSize(50)

  
function greet() {
  const password = input.value(); 
   if (password == 3746) {
      greeting.html('Congratulations! Puzzle #Noun663  Solved');
      } else {
      greeting.html('Not Correct')
      textSize(50)}
  
    input.value('');
}}

function mousePressed() {
  
  if (mouseButton === RIGHT) {
      if (overCloud) {   
          if (rain < 5) {rain += 1}  
}}  
  
  if (mouseButton === LEFT) {
      if (overCloud) {light = true}
} }

function mouseReleased() {
  light = false
}

function draw() {
  background(bg)
  
  if (
    mouseX > 112 && mouseX < 225 &&
    mouseY > 188 && mouseY < 393 ||
    
    mouseX > 225 && mouseX < 412 &&
    mouseY > 100 && mouseY < 393 ||
    
    mouseX > 412 && mouseX < 521 &&
    mouseY > 143 && mouseY < 393 
  ) {
    overCloud = true;
    if (!locked) {}
  } else {
      overCloud = false;
  } 
  
if (light) 
   { image(lightning1, 0, 0, 600, 600)}
  
if (rain ==1) 
   { image(rain1, 0, 0, 600, 600)}
  
if (rain ==2) 
   { image(rain2, 0, 0, 600, 600)}
  
if (rain >= 3) 
   { image(rain3, 0, 0, 600, 600);
      if (light)
        {image(ans,0, 0, 600, 600)}
   }
}
