

function setup() {
  createCanvas(windowWidth, windowHeight);
  gui = new Gui();
  let gui_setup= new dat.GUI();
  
  gui_setup.add(gui, "points", 0, 50);
  gui_setup.add(gui, "stroke", 0, 15);
  gui_setup.add(gui, "radius1", 10,100);
  gui_setup.add(gui, "radius2", 50,300);
  gui_setup.addColor(gui,"color");
  gui_setup.addColor(gui,"background");
  
  // numbers after names are ranges for the gui to slide from 
  
  
}

function draw() {
  background(gui.background);
  strokeWeight(gui.stroke);
  fill(0,0,0,0);
  stroke(gui.color);
  //star(windowWidth/2, windowHeight/2,gui.radius1, gui.radius2, gui.points);
  
  for(let x=windowWidth *.25; x<=windowWidth*.75; x+=windowWidth*.25){
    for(let y=windowHeight*.25; y<=windowHeight*.75; y+=windowHeight*.25){
      star(x, y, gui.radius1, gui.radius2, gui.points);
      
      
    }
  }
  
  noStroke();
  fill(255);
  textAlign(CENTER);
    textSize(30);
    textFont('Poppins');

    text('hello :)', windowWidth/2, windowHeight/2);
   

  
  
}

function Gui(){
  this.points = 5;
  this.stroke = 10;
  this.radius1 = 22;
  this.radius2 = 55;
  this.color = '#0096ff';
  this.background = '#e6a7df';
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);

}