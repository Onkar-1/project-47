var player, clickMe;
var gameState = 0;
var deaths = 0;
var wall1, wall2, wall3, wall4, wall5;
var s2wall1, s2wall2, s2wall3, s2wall4, s2wall5, wall6, s2wall7;
var sfinalwall1, s3wall2, s3wall3, s3wall4, s3wall5;
var s3wall1, s3wall2, s3wall3, s3wall4;
var wallsGroup, wallsGroup2;
var s2wallsGroup, s2wallsGroup2;
var sfinalwallsGroup, sfinalwallsGroup2;
var s3wallsGroup;
var popoImg, karlsonImg;
var popo1, popo2, popo3, popo4, popo5, popo6, popo7, popo8, popo9, popo10;
var popoGroup, popoGroup2;


function preload() {
  popoImg = loadImage("cops.png");
  karlsonImg = loadImage("karlson.png");
  winE = loadImage("You win EEEE.png");

}



function setup() {
  createCanvas(1300,1300);

  wallsGroup = createGroup();
  wallsGroup2 = createGroup();

  s2wallsGroup = createGroup();
  s2wallsGroup2 = createGroup();

  sfinalwallsGroup = createGroup();
  sfinalwallsGroup2 = createGroup();

  s3wallsGroup = createGroup();

  popoGroup = createGroup();
  popoGroup2 = createGroup();

  player = createSprite(0, 0, 50, 50);
  player.shapeColor = "blue";
  player.addImage(karlsonImg);
  player.scale = 0.3;
  
  clickMe = createSprite(0, 0, 50, 50);
  clickMe.shapeColor = "yellow";

  s2wall7 = createSprite(500, 400, 700, 100);
  s2wall7.shapeColor = "grey";
  s2wall7.visible = false;

  s2wall1 = createSprite(-800, -0, 100, 1800);
  s2wall1.shapeColor = "grey";
  s2wall1.visible = false;

  s2wall2 = createSprite(800, 0, 100, 1800);
  s2wall2.shapeColor = "grey";
  s2wall2.visible = false;

  s2wall3 = createSprite(0, 800, 1800, 100);
  s2wall3.shapeColor = "grey";
  s2wall3.visible = false;

  s2wall4 = createSprite(-0, -800, 1800, 100);
  s2wall4.shapeColor = "grey";
  s2wall4.visible = false;

  //goal
  s2wall5 = createSprite(690, 690, 200, 200);
  s2wall5.shapeColor = "cyan";
  s2wall5.visible = false;

  s2wall6 = createSprite(-500, -400, 700, 100);
  s2wall6.shapeColor = "grey";
  s2wall6.visible = false;

  popo1 = createSprite(480, -600, 50, 50);
  popo1.addImage(popoImg);
  popo1.visible = false;
  popo1.scale = 0.4;
  popo1.velocityY = 47;
  popoGroup.add(popo1);

  popo2 = createSprite(15, -15, 50, 50);
  popo2.addImage(popoImg);
  popo2.visible = false;
  popo2.scale = 0.4;
  popoGroup.add(popo2);
  popo2.velocityY = 47;

  popo3 = createSprite(-400, 195, 50, 50);
  popo3.addImage(popoImg);
  popo3.visible = false;
  popo3.scale = 0.4;
  popoGroup.add(popo3);
  popo3.velocityX = 45;

  popo4 = createSprite(300, 615, 50, 50);
  popo4.addImage(popoImg);
  popo4.visible = false;
  popo4.scale = 0.1;
  popoGroup.add(popo4);
  popo4.velocityY = 20;
//eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
  popo5 = createSprite(-700, -300, 50, 50);
  popo5.addImage(popoImg);
  popo5.visible = false;
  popo5.scale = 0.4;
  popoGroup2.add(popo5);
  popo5.velocityX = 45;

  popo6 = createSprite(-700, 0, 50, 50);
  popo6.addImage(popoImg);
  popo6.visible = false;
  popo6.scale = 0.4;
  popoGroup2.add(popo6);
  popo6.velocityX = 45;
  
  popo7 = createSprite(700, 300, 50, 50);
  popo7.addImage(popoImg);
  popo7.visible = false;  
  popo7.scale = 0.4;
  popoGroup2.add(popo7);
  popo7.velocityX = -45;

  popo8 = createSprite(700, 0, 50, 50);
  popo8.addImage(popoImg);
  popo8.visible = false;
  popo8.scale = 0.4;
  popoGroup2.add(popo8);
  popo8.velocityX = -45;

  popo9 = createSprite(0, 445, 50, 50);
  popo9.addImage(popoImg);
  popo9.visible = false;
  popo9.scale = 0.4;
  popoGroup2.add(popo9);
  popo9.velocityX = 45;

  popo10 = createSprite(0, 445, 50, 50);
  popo10.addImage(popoImg);
  popo10.visible = false;
  popo10.scale = 0.4;
  popoGroup2.add(popo10);
  popo10.velocityX = -45;

  sfinalwall1 = createSprite(-800, -0, 100, 1800);
  sfinalwall1.shapeColor = "grey";
  sfinalwall1.visible = false;

  sfinalwall2 = createSprite(800, 0, 100, 1800);
  sfinalwall2.shapeColor = "grey";
  sfinalwall2.visible = false;

  sfinalwall3 = createSprite(0, 800, 1800, 100);
  sfinalwall3.shapeColor = "grey";
  sfinalwall3.visible = false;

  sfinalwall4 = createSprite(-0, -800, 1800, 100);
  sfinalwall4.shapeColor = "grey";
  sfinalwall4.visible = false;

  //goal
  sfinalwall5 = createSprite(0, 700, 800, 50);
  sfinalwall5.shapeColor = "cyan";
  sfinalwall5.visible = false;
}

function draw() {
  background(0,0,0);  
  // clickMe.x = player.x+400;
  // clickMe.y = player.y-400;
  camera.x = player.x;
  camera.y = player.y;

  text("X:", player.x+40, player.y-10);  
  text(player.x, player.x+55, player.y-10); 
  
  text("Y:", player.x+40, player.y+10);
    text(player.y, player.x+55, player.y+10);
  
  text("GameState: ", player.x+40, player.y-35);  
    text(gameState, player.x+110, player.y-35);

    text("Deaths: ", player.x+40, player.y-50);
    textSize(16);  
    text(deaths, player.x+80, player.y-50);

if(gameState === 0){
  
  if (mousePressedOver(clickMe) && gameState === 0) {
    Swal.fire({
      title: 'Use W,A,S,D to move around‎‎‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ( ͡° ͜ʖ ͡°)',
      showCancelButton:true,
      showDenyButton: true,
      confirmButtonText: `Tip1`,
      denyButtonText: `Tip2`,
      
    }).then((result) => {
      
      if (result.isConfirmed) {
        Swal.fire('Touch the cyan brick to get to the next level', '', 'info')
      } else if (result.isDenied) {
        Swal.fire({
          title: 'More Tips',
          showCancelButton:true,
          showDenyButton: true,
          confirmButtonText: `Tip3`,
          denyButtonText: `Tip4 `,
          
        }).then((result) => {
          
          if (result.isConfirmed) {
            Swal.fire('use 1 to restart level and use 2 to refresh/reload level to stop lag', '', 'info')
          } else if (result.isDenied) {
            Swal.fire('Dont stay in one level for too long without reloading/refreshing your game will start to lag on a FEW levels!!', '', 'warning')
          }
        })
      }
    })
  }

  wall1 = createSprite(-400, -0, 50, 900);
  wall1.shapeColor = "grey";

  wall2 = createSprite(400, 0, 50, 900);
  wall2.shapeColor = "grey";

  wall3 = createSprite(0, 400, 900, 50);
  wall3.shapeColor = "grey";

  wall4 = createSprite(-0, -400, 900, 50);
  wall4.shapeColor = "grey";

  wall5 = createSprite(0, 360, 400, 50);
  wall5.shapeColor = "cyan";

  if (player.isTouching(wallsGroup)) {
    player.x = 0;
    player.y = 0;
    deaths = deaths+1;
  }

  wallsGroup.add(wall1);
  wallsGroup.add(wall2);
  wallsGroup.add(wall3);
  wallsGroup.add(wall4);
  wallsGroup2.add(wall5);

  if (player.isTouching(wall5)) {
    gameState = 1;
    player.x = -690;
    player.y = -690;
  }
} 
//eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
  if(gameState === 1){

    if (mousePressedOver(clickMe) && gameState === 1) {
      Swal.fire(
        'Cool',
        'There is no lag like I said see i keep my promises... unles ur pc is a potato',
        'success'
      )
    }

  wallsGroup.destroyEach();
  wallsGroup2.destroyEach();

  
  popo1.bounceOff(s2wallsGroup);
  popo2.bounceOff(s2wallsGroup);
  popo3.bounceOff(s2wallsGroup);
  popo4.bounceOff(s2wallsGroup);

  if (popo1.y>400) {
    popo1.x = 480;
    popo1.y = -600;
  }

  if (popo2.y>710) {
    popo2.x = 15;
    popo2.y = -15;
  }

  if (popo3.x>690) {
    popo3.x = -400;
    popo3.y = 195;
  }

  if (popo4.y>800) {
    popo4.x = 300;
    popo4.y = 615;
  }


    if (player.isTouching(s2wall5)) {
      popoGroup.destroyEach();
      gameState = 2;
      player.x = -690;
      player.y = -690; 
    }

    if (player.isTouching(popoGroup)) {
      player.x = -690;
      player.y = -690;
      deaths = deaths+1;
    }
    //goal
  
    if (player.isTouching(s2wallsGroup)) {
      player.x = -690;
      player.y = -690;
      deaths = deaths+1;
    }

    popo1.visible = true;
    popo2.visible = true;
    popo3.visible = true;
    popo4.visible = true;

    s2wall1.visible = true;
    s2wall2.visible = true;
    s2wall3.visible = true;
    s2wall4.visible = true;
    s2wall5.visible = true;
    s2wall6.visible = true;
    s2wall7.visible = true;

  s2wallsGroup.add(s2wall1);
  s2wallsGroup.add(s2wall2);
  s2wallsGroup.add(s2wall3);
  s2wallsGroup.add(s2wall4);
  s2wallsGroup2.add(s2wall5);
  s2wallsGroup.add(s2wall6);
  s2wallsGroup.add(s2wall7);

if (player.isTouching(s2wallsGroup2)) {
  popo1.visible = false;
  popo2.visible = false;
  popo3.visible = false;
  popo4.visible = false;

  s2wall1.visible = false;
  s2wall2.visible = false;
  s2wall3.visible = false;
  s2wall4.visible = false;
  s2wall5.visible = false;
  s2wall6.visible = false;
  s2wall7.visible = false;
  popoGroup.destroyEach();
  player.x = -690;
  player.y = -690;
  gameState = 2;
}

}
//eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee

//gamestate final eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
if(gameState === 2){

  if (mousePressedOver(clickMe) && gameState === 2) {
    Swal.fire(
      'Hi again',
      'This game is fun. Still no lag btw nice.',
      'success'
    )
  }

  s2wallsGroup.destroyEach();
  s2wallsGroup2.destroyEach();

  popo5.bounceOff(sfinalwallsGroup);
  popo6.bounceOff(sfinalwallsGroup);
  popo7.bounceOff(sfinalwallsGroup);
  popo8.bounceOff(sfinalwallsGroup);
  popo9.bounceOff(sfinalwallsGroup);
  popo10.bounceOff(sfinalwallsGroup);

  popo5.visible = true;
  popo6.visible = true;
  popo7.visible = true;
  popo8.visible = true;
  popo9.visible = true;
  popo10.visible = true;

  sfinalwall1.visible = true;
  sfinalwall2.visible = true;
  sfinalwall3.visible = true;
  sfinalwall4.visible = true;
  sfinalwall5.visible = true;

  if (popo5.x>700) {
    popo5.x = -700
  }
  if (popo6.x>700) {
    popo6.x = -700
  }

  if (popo7.x<-700) {
    popo7.x = 700
  }
  if (popo8.x<-700) {
    popo8.x = 700
  }

  if (popo9.x>700) {
    popo9.x = 0
  }

  if (popo10.x<-700) {
    popo10.x = 0
  }


  if (player.isTouching(popoGroup2)) {
     player.x = -690;
     player.y = -690;
     deaths = deaths+1;
   }

    if (player.isTouching(sfinalwall5)) {
      popoGroup2.destroyEach();

      gameState = 3;

      player.x = -690;
      player.y = -690; 
    }
    //goal
  
    if (player.isTouching(sfinalwallsGroup)) {
      player.x = -690;
      player.y = -690;
      deaths = deaths+1;
    }

    sfinalwallsGroup.add(sfinalwall1);
    sfinalwallsGroup.add(sfinalwall2);
    sfinalwallsGroup.add(sfinalwall3);
    sfinalwallsGroup.add(sfinalwall4);
    sfinalwallsGroup2.add(sfinalwall5);

  if (player.isTouching(sfinalwallsGroup2)) {
    player.x = -690;
    player.y = -690;
    gameState = 3;
  }

}

//gamestate final eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee

//gamestate final eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
if(gameState === 3){

  if (mousePressedOver(clickMe) && gameState === 3) {
    Swal.fire(
      '( ͡° ͜ʖ ͡°)',
      'Haha just kidding lag go brrrrrrrrr',
      'warning'
    )
  }

  sfinalwallsGroup.destroyEach();
  sfinalwallsGroup2.destroyEach();
  popoGroup2.destroyEach();


  s3wall1 = createSprite(-800, -0, 100, 1800);
  s3wall1.shapeColor = "grey";

  s3wall2 = createSprite(800, 0, 100, 1800);
  s3wall2.shapeColor = "grey";

  s3wall3 = createSprite(0, 800, 1800, 100);
  s3wall3.shapeColor = "grey";

  s3wall4 = createSprite(-0, -800, 1800, 100);
  s3wall4.shapeColor = "grey";

  
  ewin = createSprite(1, 1, 1, 1);
    ewin.addImage(winE); 
    ewin.scale = 0.5;
    console.log("lol fps diee nerd");
  
    if (player.isTouching(s3wallsGroup)) {
      player.x = -690;
      player.y = -690;
    }

    s3wallsGroup.add(s3wall1);
    s3wallsGroup.add(s3wall2);
    s3wallsGroup.add(s3wall3);
    s3wallsGroup.add(s3wall4);

}
//gamestate final eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee

if (gameState === 6969) {
  wallsGroup.destroyEach();
  wallsGroup2.destroyEach();
  s2wallsGroup.destroyEach();
  s2wallsGroup2.destroyEach();
  s3wallsGroup.destroyEach();
  sfinalwallsGroup.destroyEach();
  sfinalwallsGroup2.destroyEach();
}

  clickMee();
  keysPressed();
  drawSprites();
}


//reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee divider


function keysPressed(){
  
  if(keyDown("w")){
 player.y = player.y-18;
}

if(keyDown("s")){
 player.y = player.y+18;
}

  if(keyDown("a")){
  player.x = player.x-18;
}

if(keyDown("d")){
  player.x = player.x+18;
}

if (keyDown("z")) {
  gameState = 0;
  player.x = 0;
  player.y = 0;
  s2wallsGroup.destroyEach();
  s2wallsGroup2.destroyEach();
  sfinalwallsGroup.destroyEach();
  sfinalwallsGroup2.destroyEach();
}

if (keyDown("x")) {
  gameState = 1;
  player.x = -690;
  player.y = -690;
  wallsGroup.destroyEach();
  wallsGroup2.destroyEach();
  sfinalwallsGroup.destroyEach();
  sfinalwallsGroup2.destroyEach();
}

if (keyDown("c")) {
  gameState = 2;
  player.x = -690;
  player.y = -690;
  wallsGroup.destroyEach();
  wallsGroup2.destroyEach();
  s2wallsGroup.destroyEach();
  s2wallsGroup2.destroyEach();
  
}

if (keyDown("v")) {
  gameState = 3;
  player.x = -690;
  player.y = -690;
  wallsGroup.destroyEach();
  wallsGroup2.destroyEach();
  s2wallsGroup.destroyEach();
  s2wallsGroup2.destroyEach();
  sfinalwallsGroup.destroyEach();
  sfinalwallsGroup2.destroyEach();
  
}

if (keyDown("1") && gameState === 0) {
  gameState = 1;
  wallsGroup.destroyEach();
  wallsGroup2.destroyEach();
  gameState = 0;
  player.x = 0;
  player.y = 0;
}
if (keyDown("2") && gameState === 0) {
  gameState = 6969;
  wallsGroup.destroyEach();
  wallsGroup2.destroyEach();
  gameState = 0;
}

if (keyDown("1") && gameState === 1) {
  gameState = 1;
  player.x = -690;
  player.y = -690;
}
if (keyDown("2") && gameState === 1) {
  console.log("dont work cus its removed and no lag at this level");
  console.log("unless ur pc is a literall potato");
}

if (keyDown("1") && gameState === 2) {
  gameState = 2;
  player.x = -690;
  player.y = -690;
}

if (keyDown("2") && gameState === 2) {
  console.log("dont work cus its removed and no lag at this level");
  console.log("unless ur pc is a literall potato");
}

if (keyDown("2") && gameState === 3) {
  console.log("( ͡° ͜ʖ ͡°) I lied");
}

// if (keyDown("2") && gameState === 0) {
//   gameState = 1;
//   player.x = 0;
//   player.y = 0;
// }

}

function clickMee() {
  if (clickMe.x === player.x+300 && clickMe.y === player.y-300) {
    
  }else{
    clickMe.x = player.x+300;
    clickMe.y = player.y-300;
  }
}


//reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee divider

