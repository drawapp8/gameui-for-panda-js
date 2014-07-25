game.module(
    'game.particles'
)
.require(
    'engine.core',
    'engine.particle',
    'game.main',
    'game.assets'
)
.body(function(){

game.icon = 'icons/genius.png';
game.addAsset(game.icon);

game.Scene.inject({
    init: function() {
        this._super();
        
        var word = game.device.mobile ? 'Touch' : 'Click';
        text = new game.BitmapText(word + ' to change', {font:'HelveticaNeue'});
        text.position.x = game.system.width / 2 - text.textWidth / 2;
        text.position.y = game.system.height - 50;
        this.stage.addChild(text);

        this.container = new game.Container();
        this.stage.addChild(this.container);

        this.emitter = new game.Emitter();
        this.emitter.position.x = game.system.width / 2;
        this.emitter.position.y = game.system.height / 2;
        this.emitter.container = this.container;
        this.emitter.textures.push('particle.png');
        this.addEmitter(this.emitter);
    },

    click: function() {
        game.nextScene();
    }
});

game.Scenes = [
    game.Scene.extend({
        init: function() {
            this._super();
            this.emitter.speedVar = 50;
        }
    }),

    game.Scene.extend({
        init: function() {
            this._super();
            this.emitter.speed = 200;
            this.emitter.rate = 0;
            this.emitter.angleVar = 0;
            this.emitter.accelSpeed = 100;
            this.emitter.endScale = 0.5;
            this.emit();

            this.addTimer(1000, this.emit.bind(this), true);
        },

        emit: function() {
            var count = 20;

            for (var i = 0; i < count; i++) {
                this.emitter.angle = Math.PI * 2 / count * i;
                this.emitter.accelAngle = this.emitter.angle - Math.PI;
                this.emitter.emit();
            }
        }
    }),

    game.Scene.extend({
        init: function() {
            this._super();
            this.emitter.rate = 0;
            this.emitter.life = 0;
            this.emitter.endAlpha = 1;
            this.emitter.speed = 300;
            this.emitter.startScale = 0.6;
            this.emitter.endScale = 0.6;
            this.emitter.startScaleVar = 0.4;
            this.emitter.target.set(game.system.width / 2, game.system.height / 2);
            this.emitter.targetForce = 700;
            this.emitter.emit(50);
        },

        mousemove: function(event) {
            this.emitter.target.set(event.global.x, event.global.y);
        }
    }),

    game.Scene.extend({
        init: function() {
            this._super();
            this.emitter.speed = 200;
            this.emitter.velRotate = 2;
        }
    }),

    game.Scene.extend({
        init: function() {
            this._super();
            this.emitter.speed = 400;
            this.emitter.life = 3;
            this.emitter.startScale = 0;
            this.emitter.endScale = 2;
            this.emitter.endAlpha = 1;
        }
    }),

    game.Scene.extend({
        init: function() {
            this._super();
            this.emitter.life = 3;
            this.emitter.speed = 300;
            this.emitter.angle = -Math.PI/2;
            this.emitter.angleVar = 0.3;
            this.emitter.accelSpeed = 200;
        }
    }),

    game.Scene.extend({
        init: function() {
            this._super();
            this.emitter.angleVar = 0;
            this.emitter.positionVar.set(game.system.width / 2, game.system.height / 2);
        }
    }),
];

game.currentScene = 0;

game.nextScene = function() {
    game.currentScene++;
    if(!game.Scenes[game.currentScene]) game.currentScene = 0;
    game.system.setScene(game.Scenes[game.currentScene]);
};

game.start(game.Scenes[game.currentScene]);

});