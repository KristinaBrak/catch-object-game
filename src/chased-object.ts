import { Physics } from "phaser";

export default class ChasedObject {
    sprite: Physics.Arcade.Sprite;
    scene: Phaser.Scene;
    exist = false;


    constructor(scene: Phaser.Scene, key: string) {
        this.scene = scene;
        const x = Math.random() * this.scene.cameras.main.centerX * 2;
        const y = Math.random() * this.scene.cameras.main.centerY * 2;
        this.exist = true;
        this.sprite = scene.physics.add.sprite(x, y, 'heart');

    }

    clear() {
        this.exist = false;
        this.sprite = null;
        this.scene = null;
    }
}