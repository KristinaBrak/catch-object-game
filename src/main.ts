import 'phaser';
// import Demo from './demo';
import { GameScene } from './game-scene';
import Player from './player';


const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    scale: {
        width: 800,
        height: 600
    },
    // pixelArt: true,//here

    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    render: {
        pixelArt: true
    },
    parent: 'game',
    backgroundColor: '#765478',
    // backgroundColor: '#FFFFFF',
    // scene: Demo
    scene: GameScene
};


const game = new Phaser.Game(config);