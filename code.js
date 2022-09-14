var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 var box1 = createSprite(20, 75, 40, 40);
var box2 = createSprite(60, 75, 40, 40);
var box3 = createSprite(100, 75, 40, 40);
var box4 = createSprite(140, 75, 40, 40);
var box5 = createSprite(180, 75, 40, 40);
var box6 = createSprite(220, 75, 40, 40);
var box7 = createSprite(260, 75, 40, 40);
var box8 = createSprite(300, 75, 40, 40);
var box9 = createSprite(340, 75, 40, 40);
var box10 = createSprite(380, 75, 40, 40);
var box12 = createSprite(20, 115, 40, 40);
var box13 = createSprite(60, 115, 40, 40);
var box14 = createSprite(100, 115, 40, 40);
var box15 = createSprite(140, 115, 40, 40);
var box16 = createSprite(180, 115, 40, 40);
var box17 = createSprite(220, 115, 40, 40);
var box18 = createSprite(260, 115, 40, 40);
var box19 = createSprite(300, 115, 40, 40);
var box20 = createSprite(340, 115, 40, 40);
var box21 = createSprite(380, 115, 40, 40);
var box22 = createSprite(20, 155, 40, 40);
var box23 = createSprite(60, 155, 40, 40);
var box24 = createSprite(100, 155, 40, 40);
var box25 = createSprite(140, 155, 40, 40);
var box26 = createSprite(180, 155, 40, 40);
var box27 = createSprite(220, 155, 40, 40);
var box28 = createSprite(260, 155, 40, 40);
var box29 = createSprite(300, 155, 40, 40);
var box30 = createSprite(340, 155, 40, 40);
var box31 = createSprite(380, 155, 40, 40);
var box32 = createSprite(20, 195, 40, 40);
var box33 = createSprite(60, 195, 40, 40);
var box34 = createSprite(100, 195, 40, 40);
var box35 = createSprite(140, 195, 40, 40);
var box36 = createSprite(180, 195, 40, 40);
var box37 = createSprite(220, 195, 40, 40);
var box38 = createSprite(260, 195, 40, 40);
var box39 = createSprite(300, 195, 40, 40);
var box40 = createSprite(340, 195, 40, 40);
var box41 = createSprite(380, 195, 40, 40);

var playerPaddle = createSprite(200, 360, 70, 10);
var ball = createSprite(200, 300, 13, 13);

var score = 0;
var gameState = "serve";

box1.shapeColor = "red"
box2.shapeColor = "red"
box3.shapeColor = "red"
box4.shapeColor = "red"
box5.shapeColor = "red"
box6.shapeColor = "red"
box7.shapeColor = "red"
box8.shapeColor = "red"
box9.shapeColor = "red"
box10.shapeColor = "red"
box12.shapeColor = "orange"
box13.shapeColor = "orange"
box14.shapeColor = "orange"
box15.shapeColor = "orange"
box16.shapeColor = "orange"
box17.shapeColor = "orange"
box18.shapeColor = "orange"
box19.shapeColor = "orange"
box20.shapeColor = "orange"
box21.shapeColor = "orange"
box22.shapeColor = "yellow"
box23.shapeColor = "yellow"
box24.shapeColor = "yellow"
box25.shapeColor = "yellow"
box26.shapeColor = "yellow"
box27.shapeColor = "yellow"
box28.shapeColor = "yellow"
box29.shapeColor = "yellow"
box30.shapeColor = "yellow"
box31.shapeColor = "yellow"
box32.shapeColor = "green"
box33.shapeColor = "green"
box34.shapeColor = "green"
box35.shapeColor = "green"
box36.shapeColor = "green"
box37.shapeColor = "green"
box38.shapeColor = "green"
box39.shapeColor = "green"
box40.shapeColor = "green"
box41.shapeColor = "green"

ball.shapeColor = "gray"
playerPaddle.shapeColor = "gray"

createEdgeSprites();

var score = 0;

function draw() {
  background("black");
  drawSprites();
  
  textSize(20);
  text("Pontuação: "+score, 13, 30);
  
  
  playerPaddle.x = World.mouseX
  
  ball.bounceOff(topEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(rightEdge);
  
  if (ball.bounceOff(playerPaddle)) {
    playSound("assets/category_objects/sharp_switch.mp3", false);
  }
  if (ball.bounceOff(box1)) {
    removeSprite(box1)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box2)) {
    removeSprite(box2)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box3)) {
    removeSprite(box3)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box4)) {
    removeSprite(box4)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box5)) {
    removeSprite(box5)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box6)) {
    removeSprite(box6)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box7)) {
    removeSprite(box7)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box8)) {
    removeSprite(box8)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box9)) {
    removeSprite(box9)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box10)) {
    removeSprite(box10)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box12)) {
    removeSprite(box12)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box13)) {
    removeSprite(box13)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box14)) {
    removeSprite(box14)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box15)) {
    removeSprite(box15)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box16)) {
    removeSprite(box16)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box17)) {
    removeSprite(box17)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box18)) {
    removeSprite(box18)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box19)) {
    removeSprite(box19)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box20)) {
    removeSprite(box20)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box21)) {
    removeSprite(box21)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box22)) {
    removeSprite(box22)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box23)) {
    removeSprite(box23)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box24)) {
    removeSprite(box24)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box25)) {
    removeSprite(box25)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box26)) {
    removeSprite(box26)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box27)) {
    removeSprite(box27)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box28)) {
    removeSprite(box28)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box29)) {
    removeSprite(box29)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box30)) {
    removeSprite(box30)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box31)) {
    removeSprite(box31)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box32)) {
    removeSprite(box32)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box33)) {
    removeSprite(box33)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box34)) {
    removeSprite(box34)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box35)) {
    removeSprite(box35)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box36)) {
    removeSprite(box36)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box37)) {
    removeSprite(box37)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box38)) {
    removeSprite(box38)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box39)) {
    removeSprite(box39)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box40)) {
    removeSprite(box40)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  if (ball.bounceOff(box41)) {
    removeSprite(box41)
    playSound("assets/category_retro/retro_game_echo_error_4.mp3", false);
    score = score + 10;
  }
  
  if (gameState == "serve") {
    textSize(20);
    text("Pressione 'Space' para começar!", 50, 260);
    if (keyDown("space")) {
      ball.velocityX = 5;
      ball.velocityY = -5;
      gameState = "play"; 
    }
  }
  
  if (gameState == "play") {
    playerPaddle.x = World.mouseX;
    if (ball.isTouching(bottomEdge) || score === 10) {
      gameState = "end";
    }
  }
  
  if (gameState == "end") {
    if (ball.isTouching(bottomEdge)) {
      ball.velocityX = 0;
      ball.velocityY = 0;
      textSize(35);
      stroke("red");
      fill("yellow");
      text("Fim de jogo!", 110, 250);
      
    }
    
  }
  
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
