var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game,allPlayers;

var car_1, car_2, car_3, car_4, cars;
var carImg_1, carImg_2, carImg_3, carImg_4; 
var track;

function preload(){
carImg_1= loadImage("images/car1.png");
carImg_2= loadImage("images/car2.png");
carImg_3= loadImage("images/car3.png");
carImg_4= loadImage("images/car4.png");
track= loadImage("images/track.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if (playerCount===4){
    game.update(1);
  }

  if (gameState===1){
    clear();
    game.play();
  }

  if (gameState === 2){
    game.end();
  }
}
