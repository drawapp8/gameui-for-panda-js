game.module(
    'game.sprites'
)
.require(
    'engine.core',
    'game.main',
    'game.assets'
)
.body(function(){

game.icon = 'icons/image.png';
game.addAsset(game.icon);

SceneGame = game.Scene.extend({
    init: function() {
        var sprite, text;

        sprite = new game.Sprite('panda2.png', game.system.width / 2 - 200, 200, {anchor: {x:0.5, y:0.5}});
        this.addTween(sprite.position, {x: game.system.width / 2 + 200}, 2000, {repeat: Infinity, yoyo: true}).start();
        this.stage.addChild(sprite);

        sprite = new game.Sprite('panda2.png', game.system.width / 2 - 200, 400, {anchor: {x:0.5, y:0.5}});
        this.addTween(sprite.scale, {x: 0, y: 0}, 2000, {repeat: Infinity, yoyo: true}).start();
        this.stage.addChild(sprite);

        sprite = new game.Sprite('panda2.png', game.system.width / 2 + 200, 400, {anchor: {x:0.5, y:0.5}});
        this.addTween(sprite, {rotation: Math.PI * 2}, 2000, {repeat: Infinity, yoyo: true}).start();
        this.stage.addChild(sprite);

        sprite = new game.Sprite('panda2.png', game.system.width / 2, 550, {anchor: {x:0.5, y:0.5}});
        this.addTween(sprite, {alpha: 0}, 2000, {repeat: Infinity, yoyo: true}).start();
        this.stage.addChild(sprite);

        text = new game.BitmapText('Position', {font:'HelveticaNeue'});
        text.position.x = game.system.width / 2 - text.textWidth / 2;
        text.position.y = 250;
        this.stage.addChild(text);

        text = new game.BitmapText('Scale', {font:'HelveticaNeue'});
        text.position.x = game.system.width / 2 - text.textWidth / 2 - 200;
        text.position.y = 450;
        this.stage.addChild(text);

        text = new game.BitmapText('Rotation', {font:'HelveticaNeue'});
        text.position.x = game.system.width / 2 - text.textWidth / 2 + 200;
        text.position.y = 450;
        this.stage.addChild(text);

        text = new game.BitmapText('Alpha', {font:'HelveticaNeue'});
        text.position.x = game.system.width / 2 - text.textWidth / 2;
        text.position.y = 600;
        this.stage.addChild(text);

        this._super();
    }
});

game.start();

});