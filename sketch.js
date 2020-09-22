var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game,allPlayers;

var car_1, car_2, car_3, car_4, cars;


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
}
