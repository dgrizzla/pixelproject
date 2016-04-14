var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-game', { preload: preload, create: create, update: update});


var index = 0;
var arrHair = ['hair1','hair2','hair3'];
var arrTop = ['top1','top2','top3'];
var arrBottom = ['bottom1','bottom2','bottom3']
var hair,left,right,topA,bottomA; //se usa para mientras topA y bottomA porque top y botton ya existe
//anchor 207:45
function preload() {

   game.load.image('btnleft','assets/left.png');
   game.load.image('btnright','assets/right.png');
   game.load.image('body1','assets/body/body1.png');
   game.load.image('hair1','assets/hair/hair1.png');
   game.load.image('top1','assets/top/top1.png')
   game.load.image('bottom1','assets/bottom/bottom1.png');
   game.load.image('body2','assets/body/body2.png');
   game.load.image('hair2','assets/hair/hair2.png');
   game.load.image('top2','assets/top/top2.png')
   game.load.image('bottom2','assets/bottom/bottom2.png');
   game.load.image('hair3','assets/hair/hair3.png');
   game.load.image('top3','assets/top/top3.png')
   game.load.image('bottom3','assets/bottom/bottom3.png');
}

function onLeftHair() {
  if (index <= 0) {
    index = 3;
  }
  index--;
  hair.loadTexture(arrHair[index]);
}

function onRightHair() {
  if (index >= 2) {
    index = -1;
  }
  index++;
  hair.loadTexture(arrHair[index]);
}

function onLeftTop() {
  if (index <= 0) {
    index = 3;
  }
  index--;
  topA.loadTexture(arrTop[index]);
}

function onRightTop() {
  if (index >= 2) {
    index = -1;
  }
  index++;
  topA.loadTexture(arrTop[index]);
}

function onLeftBottom() {
  if (index <= 0) {
    index = 3;
  }
  index--;
  bottomA.loadTexture(arrBottom[index]);
}

function onRightBottom() {
  if (index >= 2) {
    index = -1;
  }
  index++;
  bottomA.loadTexture(arrBottom[index]);
}


function create() {
  game.stage.backgroundColor = "#4488AA";
  game.add.image(140,75,'body1');
  hair = game.add.sprite(140,75,arrHair[index]);
  topA = game.add.sprite(140,75,arrTop[index]);
  bottomA = game.add.sprite(140,75,arrBottom[index]);

  hairLeft = game.add.button(247,130,'btnleft',onLeftHair).scale.setTo(0.8);
  hairRight = game.add.button(410,130,'btnright',onRightHair).scale.setTo(0.8);

  topLeft = game.add.button(247,250,'btnleft',onLeftTop).scale.setTo(0.8);
  topRight = game.add.button(410,250,'btnright',onRightTop).scale.setTo(0.8);

  bottomLeft = game.add.button(247,370,'btnleft',onLeftBottom).scale.setTo(0.8);
  bottomRight = game.add.button(410,370,'btnright',onRightBottom).scale.setTo(0.8);

}

function update() {}
