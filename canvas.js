var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
// var pi circle
var pCircle = Math.PI * 2;
var position = innerWidth/2;
var positionY = innerHeight /2;
// Random Integer Generator
function getRandomInt(min, max){
   min = Math.ceil(min);
   max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
// object 
function Sun( x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
    //draw 
    this.draw = function(){
        c.beginPath();
        c.arc( this.x, this.y, this.radius, 0, pCircle, false);
        c.fillStyle = 'black';
        c.fill();
    }
    this.update = function(){
    }
}
// PLANETS
function Planet( x, y, radius, distance, velocity){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.radians = 0;
    this.velocity = 0.008 * velocity;
    this.distance = distance;
    //draw 
    this.draw = function(){
        c.beginPath();
        c.arc( this.x, this.y, this.radius, 0, pCircle, false);
        c.fillStyle = 'black';
        c.fill();
    }
    this.update = function(){
        this.radians += this.velocity;
        this.x = x + Math.cos(this.radians) * (this.distance * .60); 
        this.y = y + Math.sin(this.radians) * (this.distance * .25);


        this.draw();
    }
    this.currentX = function(){
        return this.x;
    }
    this.currentY = function(){
        return this.y;
    }
}
// MOON
function Moon( x, y, radius,){
    this.x = planet.currentX();
    this.y = planet.currentY();
    this.radius = radius;
    this.radians = 0;
    this.velocity = 0.01;
    this.cx = planet.currentX();
    this.cy = planet.currentY();
    //draw 
    this.draw = function(){
        c.beginPath();
        c.arc( this.x, this.y, this.radius, 0, pCircle, false);
        c.fillStyle = 'black';
        c.fill();
    }
    this.update = function(){
        this.radians += this.velocity;
        this.x = this.cx + Math.cos(this.radians) * 100;
        this.y = this.cy + Math.sin(this.radians) * 100;
    }
}
//objects
var sun;
//planets
var mercury, venus, earth, mars, jupiter, saturn, uranus, neptune;


//moons
var moon;
//Init
function init(){
    //Initialize objects
    sun = new Sun(position, innerHeight/2, 10);
    mercury = new Planet(position, positionY, 3.8, 57, 1.607);
    venus = new Planet(position, positionY, 9.5, 108, 1.174);
    earth = new Planet(position, positionY, 10, 149, 1);
    mars = new Planet(position, positionY, 5.3, 228, 0.802);
    jupiter = new Planet(position, positionY, 38.8, 378, 0.434);
    saturn = new Planet(position, positionY, 31.5, 576, 0.323);
    uranus = new Planet(position, positionY, 24.8, 693, 0.228);
    neptune = new Planet(position, positionY, 22.1, 900, 0.182);
}
//animate
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    sun.draw();
    mercury.update();
    venus.update();
    earth.update();
    mars.update();
    jupiter.update();
    saturn.update();
    uranus.update();
    neptune.update();
}
init();
animate();