game.module(
    'game.main'
)
.require(
    'engine.scene'
)
.body(function(){

game.Scene.inject({
    backgroundColor: 0xeeeeee,
    
    init: function() {
        var sprite = new game.Graphics();

        sprite.beginFill(0xb9bec7);
        sprite.drawRect(0,0,game.system.width,game.system.height);
        this.stage.addChild(sprite);

    	GameUI.init(game, this.stage, guiData, game.system.canvas);

        sprite = new game.Sprite('panda.png', 10, 0);
        this.stage.addChild(sprite);

        sprite = new game.Sprite(game.icon);
        sprite.position.x = game.system.width - sprite.width - 10;

        this.stage.addChild(sprite);
    }
});

});
