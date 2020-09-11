import { HealthBar } from "./health-bar";
import { Physics, Scene } from "phaser";
import Player from "./player";
import ChasedObject from "./chased-object";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game'
};
export class GameScene extends Phaser.Scene {
    player: Player;
    // heart: Phaser.Physics.Arcade.Sprite;
    heart: ChasedObject;
    velocity = 500;

    destinationToMouse = { x: 0, y: 0 };
    destinationToHeart = { x: 0, y: 0 };

    constructor() {
        super(sceneConfig);
    }

    public preload() {
        // this.load.image('player', 'assets/player/idle/player.png');
        this.load.image('heart', 'assets/heart/heart_full.png');
        this.load.atlas('player', 'assets/player/player.png', 'assets/player/player.json');
        this.load.atlas('rat', 'assets/deadRat/rat.png', 'assets/deadRat/rat.json');
    }

    public create() {
        this.player = new Player(this, 50, 50, 'player');
        this.heart = new ChasedObject(this, 'heart');
        // this.player.healthBar = new HealthBar(this, 100, 20);



        function onClick(pointer: Phaser.Input.Pointer, scene: GameScene) {
            scene.destinationToMouse.x = pointer.x;
            scene.destinationToMouse.y = pointer.y;

            // scene.changeMoveAnimation(this.player, scene.destinationToMouse.x);
            if ((scene.destinationToMouse.x - scene.player.sprite.body.x) < 0) {
                scene.player.sprite.play('move').setFlipX(false);
            } else {
                scene.player.sprite.play('move').setFlipX(true);
            }
            scene.physics.moveTo(scene.player.sprite, pointer.x, pointer.y, scene.velocity);
            // console.log("initial: ", scene.destination);
        }

        this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => onClick(pointer, this));

        this.player.createAnimations();


    }

    changeMoveAnimation(player: Phaser.Scene, destinationX: number) {
        if ((destinationX - this.player.sprite.body.x) < 0) {
            this.player.sprite.play('move').setFlipX(false);
        } else {
            this.player.sprite.play('move').setFlipX(true);
        }
    }
    makeAnim(key: string, frameName: string, numberOfFrames: number) {
        let myArray = [];
        for (let i = 1; i <= numberOfFrames; i++) {
            let fn = frameName + i + '.png';
            myArray.push({
                key: key,
                frame: fn
            })
        }
        return myArray;
    }
    changeHeartCoordinates() {
        this.heart.clear();
        // this.heart = null;
        if(this.heart.exist === false){
            this.heart = new ChasedObject(this, 'heart');
        }
        
        // this.heart.sprite.disableBody(true, true);
        this.player.healthBar.increase(10);
        // this.heart.sprite.disableBody(false, false);
        console.log('changeheartcoo');

    }
    moveHeart() {
        this.physics.add.overlap(this.player.sprite, this.heart.sprite, this.changeHeartCoordinates, null, this);
    }

    public update() {

        const distMouse = Phaser.Math.Distance.Between(this.player.sprite.x, this.player.sprite.y, this.destinationToMouse.x, this.destinationToMouse.y);
        // console.log('distance:', dist);
        const distHeart = Phaser.Math.Distance.Between(this.player.sprite.x, this.player.sprite.y, this.heart.sprite.x, this.heart.sprite.y);
        // console.log(distHeart);

        if (distHeart <= 180) {
            // console.log(distHeart);

            this.moveHeart();
        }
        if (distMouse <= 10) {
            // console.log(this.destination.x - this.player.body.x, this.destination.y - this.player.body.y);
            // console.log({ player: { x: this.player.body.x, y: this.player.body.y } });
            this.player.sprite.body.velocity.setTo(0, 0);
            this.player.sprite.play('idle');
            this.destinationToMouse.x = 0;
            this.destinationToMouse.y = 0;
        }
    }

}