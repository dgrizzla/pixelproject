var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-game', { preload: preload, create: create, update: update});


var index = 0;
var arrHair = ['hair0','hair1','hair2'];

function preload() {
  game.load.image('body1','assets/body/body1.png');
  game.load.image('btnleft','assets/left.png');
  game.load.image('btnright','assets/right.png');
  game.load.image('hair0','assets/hair/hair0.png');
  game.load.image('hair1','assets/hair/hair1.png');
  game.load.image('hair2','assets/hair/hair2.png');
  game.load.image('top1','assets/top/top1.png')
  game.load.image('bottom1','assets/bottom/bottom1.png');
}

var hair,left,right;

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

function create() {
  game.stage.backgroundColor = "#4488AA";

  game.add.image(150,75,'body1');

  hair = game.add.sprite(141,-30,arrHair[index]);
  game.add.image(141,66,'top1');
  game.add.image(150,93,'bottom1');

  hairLeft = game.add.button(247,130,'btnleft',onLeftHair).scale.setTo(0.8);
  hairRight = game.add.button(410,130,'btnright',onRightHair).scale.setTo(0.8);

  game.add.image(247,250,'btnleft').scale.setTo(0.8);
  game.add.image(410,250,'btnright').scale.setTo(0.8);

  game.add.image(247,370,'btnleft').scale.setTo(0.8);
  game.add.image(410,370,'btnright').scale.setTo(0.8);

}

function update() {}
