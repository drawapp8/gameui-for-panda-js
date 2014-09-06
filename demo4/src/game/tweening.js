game.module(
    'game.tweening'
)
.require(
    'engine.core',
    'game.main',
    'game.assets'
)
.body(function(){

game.icon = 'icons/settings.png';
game.addAsset(game.icon);

var easings = [];
var currentEasing = 0;
for(var i in game.Tween.Easing) {
    if(i !== 'Linear') easings.push(i);
}

SceneGame = game.Scene.extend({
    init: function() {
        this._super();
        var text;
        var sprite;

        sprite = new game.Sprite('panda2.png', game.system.width / 2 - 200, game.system.height / 2 - 100, {anchor: {x:0.5, y:0.5}});
        this.stage.addChild(sprite);
        this.addTween(sprite.position, {y: game.system.height / 2 + 200}, 2000, {easing: game.Tween.Easing[easings[currentEasing]]['In'], repeat: Infinity, yoyo: true}).start();
        text = new game.BitmapText('In', {font: 'HelveticaNeue'});
        text.position.x = game.system.width / 2 - 200 - text.textWidth / 2;
        text.position.y = 130;
        this.stage.addChild(text);

        sprite = new game.Sprite('panda2.png', game.system.width / 2, game.system.height / 2 - 100, {anchor: {x:0.5, y:0.5}});
        this.stage.addChild(sprite);
        this.addTween(sprite.position, {y: game.system.height / 2 + 200}, 2000, {easing: game.Tween.Easing[easings[currentEasing]]['Out'], repeat: Infinity, yoyo: true}).start();
        text = new game.BitmapText('Out', {font: 'HelveticaNeue'});
        text.position.x = game.system.width / 2 - text.textWidth / 2;
        text.position.y = 130;
        this.stage.addChild(text);

        sprite = new game.Sprite('panda2.png', game.system.width / 2 + 200, game.system.height / 2 - 100, {anchor: {x:0.5, y:0.5}});
        this.stage.addChild(sprite);
        this.addTween(sprite.position, {y: game.system.height / 2 + 200}, 2000, {easing: game.Tween.Easing[easings[currentEasing]]['InOut'], repeat: Infinity, yoyo: true}).start();
        text = new game.BitmapText('InOut', {font: 'HelveticaNeue'});
        text.position.x = game.system.width / 2 + 200 - text.textWidth / 2;
        text.position.y = 130;
        this.stage.addChild(text);

        var word = game.device.mobile ? 'Touch' : 'Click';
        text = new game.BitmapText(word + ' to change', {font:'HelveticaNeue'});
        text.position.x = game.system.width / 2 - text.textWidth / 2;
        text.position.y = game.system.height - 50;
        this.stage.addChild(text);

        text = new game.BitmapText(easings[currentEasing], {font: 'HelveticaNeue'});
        text.position.x = game.system.width / 2 - text.textWidth / 2;
        text.position.y = 80;
        this.stage.addChild(text);
    },

    click: function() {
        currentEasing++;
        if(!easings[currentEasing]) currentEasing = 0;
        game.system.setScene(SceneGame);
    }
});

game.start();

});