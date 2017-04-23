// variables
var circleX = 50;
var bgcolor = 0;
var bubbles = [];


// object
var circle = {
    x: 300,
    y: 80,
    diameter: 50
};

// object
var spot = {
    x: 0,
    y: 0
};

// object with a function
var bubble = {
    x: 300,
    y: 200,
    display: function() {
        stroke(random(50));
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    },
    move: function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }
};

// function setup is loaded once --> in the beginning
function setup() {
    // createCanvas(800,600);
    createCanvas(windowWidth, windowHeight);
    background(127);

    // Use the Bubble Constructor
    for (var i = 0; i < 10; i++) {
        bubbles[i] = new Bubble();
    }
}


// function draw is loaded as loop
function draw() {

    // Rect 01
    stroke(0,150,0);            // RGB (255, 0, 0) --> red
    fill(0,100,0);              // RGB (0, 255, 0) --> green
    rect(circleX, 300, 50, 50);
    circleX++;

    // Rect 02
    stroke(255,20,20);          // RGB (255, 0, 0) --> red
    fill(0,0,bgcolor);              // RGB (0, 255, 0) --> green
    rect(150, 100, 75, 200);
    bgcolor++;

    // Ellipse
    stroke(200);
    fill(20, 200, 20, 1);       // RGB with transparent mode
    ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
    if (circle.diameter < 200) {
        circle.diameter++;
    } else {
        circle.diameter = circle.diameter-150;
    }

    // Mouse
    noStroke();
    red = map(mouseX, 0, 800, 0, 255);
    blue = map (mouseX, 0, 800, 255, 0);
    fill(red,0,blue, 100);
    ellipse(mouseX, mouseY, 20, 20);

    // Random
    noStroke(),
    fill(random(0, 255));
    spot.x = random(0, width);
    spot.y = random(0, height);
    ellipse(spot.x, spot.y, 5, 5);

    // function call
    lollipop(200, 400,59);
    lollipop(500, 500, 150);

    bubble.display();
    bubble.move();

    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].display();
    }

}

// function EVENT
function mousePressed() {
    background(51);
}


function lollipop(x, y, diameter) {
    fill(0, 200, 255);
    rect (x-10, y, 20, 150);

    fill(255,0, 200);
    ellipse(x, y, diameter, diameter);
}


// make a constructor function
function Bubble() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.display = function() {
        stroke(255);
        noFill();
        ellipse(this.x, this.y, 10, 10);
    }

    this.move = function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }
}