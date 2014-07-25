game.module(
    'game.assets'
)
.require(
    'engine.audio'
)
.body(function() {

game.addAsset('particle.png');
game.addAsset('panda.png');
game.addAsset('panda2.png');
game.addAsset('font.fnt');

GameUI.preloadAssetsInUIData(guiData, game);

});
