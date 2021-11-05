var snow, snowflakeAnimation,snowflake,bgImage;

function preload(){
  bgImage = loadImage("snow2.jpg")
  snowflakeAnimation = loadAnimation("snow4.webp","snow5.webp");
}

function setup() {
  createCanvas(800,400);
  snowflake = createSprite(80, 315, 20, 20);
  snowflake.addAnimation("falling", snowflakeAnimation);
  snowflake.scale = 10;
}

function draw() {
  background(bgImage);  

  snowflake.velocityX = snowflake.velocityX - 8;
  drawSprites();
}