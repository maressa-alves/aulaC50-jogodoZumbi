var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  
  //carrege as imagens do atirador parado e atirando
  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1
  

//crie o sprite do jogador de acordo com o exemplo do bg acima e ajuste o tamanho
 


 
  //player.debug = true
  //player.debug = false
  //player.Debug =false
  //Player.debug = true

  //player.Collider("rectagle",0,0,300,300)
  //player.setcollider("rectangle",0,0)
  //player.setCollider("rectangle",0,0,300,300)
  //player.Setcollider("rectangle",0,0,300,300)

}

function draw() {
  background(0); 

  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando touches (toques)
  if(keyDown("UP_ARROW")||touches.length>0){
    //escreva o código

  }

  if(keyDown("DOWN_ARROW")||touches.length>0){
    //escreva o código

  }


//libere as balas e mude a imagem do personagem para a posição de tiro quando a tecla espaço for pressionada
  if(keyWentDown("space")){
    //escreva o código
  
  }

//jogador volta pra imagem original quando liberar a tecla espaço
  else if(keyDown("space")){
  //player.addImage( shooter_shooting )
  //player.addImage()
  //player.addImage(shooterImg)
  //player.addImage(shooter_1.png)
  }

drawSprites();

}
