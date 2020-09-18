import { HealthBar } from "./health-bar";
import { Physics } from "phaser";

export default class Player {
  healthBar: HealthBar;
  sprite: Physics.Arcade.Sprite;
  scene: Phaser.Scene;
  constructor(scene: Phaser.Scene, x: number, y: number, key: string) {
    this.scene = scene;
    this.healthBar = new HealthBar(scene, 100, 20);
    this.sprite = scene.physics.add.sprite(x, y, "player");
    this.sprite.setScale(4, 4);
  }

  createAnimations() {
    this.scene.anims.create({
      key: "idle",
      frames: this.makeAnimation("player", "player_idle_00", 4),
      frameRate: 8,
      repeat: -1,
    });
    this.scene.anims.create({
      key: "move",
      frames: this.makeAnimation("player", "player_walk_left_00", 6),
      frameRate: 8,
      repeat: -1,
    });
  }
  makeAnimation(key: string, frameName: string, numberOfFrames: number) {
    const myArray = [];
    for (let i = 1; i <= numberOfFrames; i++) {
      const fn = frameName + i + ".png";
      myArray.push({
        key: key,
        frame: fn,
      });
    }
    return myArray;
  }
  changeBarValue(value: number){
      this.healthBar.current_value = value;
  }
}
