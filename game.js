// Create a new scene
var gameScene = new Phaser.Scene('Game');

// Load assets
gameScene.preload = function(){
    // Load images
    this.load.image('background', 'assets/background.png');
};

gameScene.create = function(){
    let gameW = this.sys.game.config.width;
    let gameH = this.sys.game.config.height;

    // Create background image
    var bg = this.add.sprite(0, 0, 'background');

    // Place sprite in the center
    bg.setPosition(gameW/2, gameH/2);

};

// Set the configuration of the game
var config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    scene: gameScene
};

var game = new Phaser.Game(config);
