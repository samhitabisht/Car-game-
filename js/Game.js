class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car_1= createSprite(100, 100, 50, 50);
    car_1.addImage(carImg_1);
    car_2= createSprite(300, 100, 50, 50);
    car_2.addImage(carImg_2);
    car_3= createSprite(500, 100, 50, 50);
    car_3.addImage(carImg_3);
    car_4= createSprite(700, 100, 50, 50);
    car_4.addImage(carImg_4);
    cars= [car_1, car_2, car_3, car_4];
  }

  play(){
    form.hide();
    //textSize(30);
    //text("Game Start", 120, 100)
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    if(allPlayers !== undefined){
      background("#c68767");
      image(track, 0, -displayHeight*4, displayWidth, displayHeight*5)
      var index= 0
      var x= 165; 
      var y;
      //var display_position = 130;
      for(var plr in allPlayers){
        index= index+1
        x= x+200
        y= displayHeight-allPlayers[plr].distance;
        cars[index-1].x=x
        cars[index-1].y= y
        if (index=== player.index){
          //cars[index-1].shapeColor= "red";
          stroke("blue");
          strokeWeight(3);
          fill("green");
          ellipse(x, y, 60,60)
          camera.position.x=displayWidth/2;
          camera.position.y= cars[index-1].y
        }
        /*display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        */
      }
    }
    if (player.distance>3950){
      gameState= 2;
      player.rank+=1
      Player.updateCarsAtEnd(player.rank);
    }
    if(keyIsDown(UP_ARROW) && player.index !== null && player.distance<=3950){
      player.distance +=50
      player.update();
    }
    drawSprites();
  }
  end(){
    textSize(50);
    text("Game Ended",displayWidth/2, -3200 )
    text(player.rank, displayWidth/2, -3200+150)
  }

}
