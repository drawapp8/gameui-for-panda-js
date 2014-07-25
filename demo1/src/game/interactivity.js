game.module(
    'game.interactivity'
)
.require(
    'engine.core',
    'game.main',
    'game.assets'
)
.body(function(){

game.icon = 'icons/cursor.png';
game.addAsset(game.icon);

SceneGame = game.Scene.extend({
    current: null,

    init: function() {
        this._super();

        var panda;

		loadScene("win-main");
    },
});

game.start(undefined, 480, 800);

});
