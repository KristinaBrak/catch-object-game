
export class HealthBar {
    bar_display: Phaser.GameObjects.Graphics;
    max_value: number;
    current_value: number;
    bar_size = {
        width: 400,
        height: 50
    };
    bar_frame_size = this.bar_size.width * 0.02;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        this.bar_display = new Phaser.GameObjects.Graphics(scene);

        this.bar_display.x = x;
        this.bar_display.y = y;
        this.max_value = 100;
        this.current_value = 0;

        this.draw();

        scene.add.existing(this.bar_display);
    }

    decrease(amount) {
        this.current_value -= amount;

        if (this.current_value < 0) {
            this.current_value = 0;
        }

        this.draw();

        return (this.current_value === 0);
    }
    increase(amount) {
        this.current_value += amount;

        if (this.current_value >this.max_value) {
            this.current_value = this.max_value;
        }

        this.draw();

        return (this.current_value === this.max_value);
    }

    draw() {
        this.bar_display.clear();
        this.createEmptyStatusBar();
        this.displayStatusChange();


    }
    createEmptyStatusBar(){
        //  Creating black fream and white background
        this.bar_display.fillStyle(0x000000);
        this.bar_display.fillRect(this.bar_display.x, this.bar_display.y, this.bar_size.width, this.bar_size.height);

        this.bar_display.fillStyle(0xffffff);
        this.bar_display.fillRect(this.bar_display.x + this.bar_frame_size, this.bar_display.y + this.bar_frame_size, this.bar_size.width - this.bar_frame_size * 2, this.bar_size.height - this.bar_frame_size * 2);

    }
    changeStatusColor() {
        if (this.current_value <= 30) {
            this.bar_display.fillStyle(0xff0000);
        }
        else if (this.current_value <= 60) {
            this.bar_display.fillStyle(0xff9933);
        }
        else if (this.current_value <= 90) {
            this.bar_display.fillStyle(0xfff000);
        }
        else {
            this.bar_display.fillStyle(0x00ff00);
        }
    }
    displayStatusChange() {
        if (this.current_value !== 0) {
            this.changeStatusColor();
            let distance = Math.floor(this.current_value / this.max_value * this.bar_size.width - this.bar_frame_size * 2);
            this.bar_display.fillRect(this.bar_display.x + this.bar_frame_size, this.bar_display.y + this.bar_frame_size, distance, this.bar_size.height - this.bar_frame_size * 2);
        }
    }
}