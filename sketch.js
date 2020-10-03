var car, wall, speed, weight;

function setup() {
  createCanvas(1600,800);
 car = createSprite(50, 200, 50, 50);
 wall = createSprite(800, 200, 60, height/2);
 speed = random(55, 90);
 weight = random(400,1500);
}

function draw() {
  background(255,255,255);
  car.velocityX = speed;
  if(wall.x-car.x < car.width/2 + wall.width/2){
    car.velocityX = 0;
    var deform = 0.5 * speed * weight * speed/22509;
    if(deform > 180){
      car.shapeColor = "red";
    }
    if(deform < 180 && deform > 100){
      car.shapeColor = "blue";
    }
    if(deform < 100){
      car.shapeColor = "green";
    }
    
  }
  
  drawSprites();
}