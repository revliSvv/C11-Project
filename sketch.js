var track, trackImg;
var runner, runnerImg;

function preload(){
  //pre-load images
  trackImg = loadImage('path.png');

  runnerImg = loadAnimation('Runner-1.png', 'Runner-2.png');
}

function setup(){
  createCanvas(400,400);
  
  //create sprites here
  track = createSprite(200, 200);
  track.addImage('path', trackImg);
  track.scale = 1.2;
  track.velocityY = 4;

  runner = createSprite(200, 300);
  runner.addAnimation('runner_running', runnerImg);
  runner.scale = 0.1;

}

function draw() {
  background(0);
  
  track.velocityY = 4;

  runner.x = mouseX;

  if (track.y > 400) {
   track.y = 250;
  }
  
  if (runner.x < 40) {
    runner.x = 40;
  }

  if (runner.x > 360) {
    runner.x = 360;
  }

  drawSprites();
}
