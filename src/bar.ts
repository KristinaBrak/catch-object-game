import Status from "./status";

interface BarInterface {
  scene: Phaser.Scene;
  x: number;
  y: number;
  status: Status;
}

export class Bar {
  bar_display: Phaser.GameObjects.Graphics;
  private _status: Status;
  bar_size = {
    width: 200,
    height: 25,
  };
  bar_frame_size = this.bar_size.width * 0.02;

  constructor({ scene, x, y, status }: BarInterface) {
    this.bar_display = new Phaser.GameObjects.Graphics(scene);
    this.bar_display.x = x;
    this.bar_display.y = y;
    this._status = status;

    this.draw();

    scene.add.existing(this.bar_display);
  }

  public draw() {
    this.bar_display.clear();
    this.createEmptyStatusBar();
    this.displayStatusChange();
  }
  createEmptyStatusBar() {
    //  Creating black fream and white background
    this.bar_display.fillStyle(0x000000);
    this.bar_display.fillRect(
      this.bar_display.x,
      this.bar_display.y,
      this.bar_size.width,
      this.bar_size.height
    );

    this.bar_display.fillStyle(0xffffff);
    this.bar_display.fillRect(
      this.bar_display.x + this.bar_frame_size,
      this.bar_display.y + this.bar_frame_size,
      this.bar_size.width - this.bar_frame_size * 2,
      this.bar_size.height - this.bar_frame_size * 2
    );
  }
  changeStatusColor() {
    if (this._status.current_value <= 30) {
      this.bar_display.fillStyle(0xff0000);
    } else if (this._status.current_value <= 60) {
      this.bar_display.fillStyle(0xff9933);
    } else if (this._status.current_value <= 90) {
      this.bar_display.fillStyle(0xfff000);
    } else {
      this.bar_display.fillStyle(0x00ff00);
    }
  }
  displayStatusChange() {
    if (this._status.current_value !== 0) {
      this.changeStatusColor();
      let distance = Math.floor(
        (this._status.current_value / this._status.max_value) *
          this.bar_size.width -
          this.bar_frame_size * 2
      );
      this.bar_display.fillRect(
        this.bar_display.x + this.bar_frame_size,
        this.bar_display.y + this.bar_frame_size,
        distance,
        this.bar_size.height - this.bar_frame_size * 2
      );
    }
  }

  public set status(status: Status) {
    this._status = status;
    this.draw();
  }
}
