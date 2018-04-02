var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: playState.preload, create: playState.create, update: playState.update, render: playState.render });
		

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);
game.state.add('lose', loseState);

game.state.add('cleared', clearedState);

game.state.start('boot');