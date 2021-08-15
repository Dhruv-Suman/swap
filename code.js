var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8693db22-4674-449d-9795-c5cfd1fbe9e9","ccc987c0-1e3e-41d3-93b9-82455bc370c7"],"propsByKey":{"8693db22-4674-449d-9795-c5cfd1fbe9e9":{"name":"monstertruck_02_1","sourceUrl":null,"frameSize":{"x":26,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"uj9QOjlgq0DCk3r5uefLWg1NmgZFVEC5","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":26,"y":15},"rootRelativePath":"assets/8693db22-4674-449d-9795-c5cfd1fbe9e9.png"},"ccc987c0-1e3e-41d3-93b9-82455bc370c7":{"name":"gameplayobject_arrow_02_1","sourceUrl":null,"frameSize":{"x":16,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"lHKQE7Jh.SxsH1DDqYcU.ACPMYaAFwcY","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":20},"rootRelativePath":"assets/ccc987c0-1e3e-41d3-93b9-82455bc370c7.png"}}};
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

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  sam.setAnimation("monstertruck_02_1");
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car1.setAnimation("gameplayobject_arrow_02_1");
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car2.setAnimation("gameplayobject_arrow_02_1");
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car3.setAnimation("gameplayobject_arrow_02_1");
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car4.setAnimation("gameplayobject_arrow_02_1");
  car1.velocityY = 3;
  car2.velocityY = 3;
  car3.velocityY = -3;
  car4.velocityY = -3;
  
 
//add the velocity to make the car move.

function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  
  if (keyDown("RIGHT_ARROW")) {
  sam.x=sam.x+2;  
  }
  if (keyDown("LEFT_ARROW")) {
  sam.x=sam.x-2;  
  }
  if (sam.isTouching(car1)|| 
      sam.isTouching(car2)|| 
      sam.isTouching(car3)|| 
      sam.isTouching(car4)) {
  sam.x= 20;
  sam.y=190;
  life=life+1;
  }
 
 
  
  
  
// create bounceoff function to make the car bounceoff the boundaries
//Add the condition to make the sam move left and right
//Add the condition to reduce the life of sam if it touches the car.
  
 drawSprites();
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
