
var score = 0
function preload() {
 
  
  bgImg= loadImage(" bg.jpg")
  cbImg = loadImage("cb-removebg-preview.png")
  coinImg = loadImage("coin.png")
  thiefImg = loadImage("thief.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  bg = createSprite(width/2, height/+30)
  bg.addImage(bgImg)
  bg.scale = 2.5
  bg.velocityX = -5
  
  cowboy = createSprite(150, height-150)
  cowboy.addImage(cbImg)

  edges = createEdgeSprites() //edges[left edge, right,top,bottom]

  coinGroup = createGroup()

  thiefGroup = createGroup()
}

function draw() {
  background("yellow");
  if(bg.x < 0 ){
    bg.x = width/2
  }
  coins()
  thieves()

if(keyDown("space")){
  cowboy.velocityY = -15
}
cowboy.velocityY = cowboy.velocityY + 1

if(cowboy.isTouching(coinGroup)){
  score = score + 1
  coinGroup.destroyEach()
}
  



cowboy.collide( edges[3] )
  drawSprites()

  //Score : value
  textSize(35)
  text("Score : " + score , 100, 60)
}

function coins(){
  if(frameCount % 320 === 0){
      coin = createSprite(width, height-250)
      coin.addImage(coinImg)
      coin.velocityX = -5
      coin.scale = 0.5
      coin.lifetime = width/5
      coinGroup.add(coin)
  }
}

function thieves(){
  if(frameCount % 160 ===0){
    thief = createSprite(width, height-150)
    thief.addImage(thiefImg)
    thief.velocityX = -5
    thief.scale = 0.5
   thief.lifetime = width/5
   thiefGroup.add(thief)
  }
}
