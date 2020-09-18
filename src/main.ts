import "phaser";
// import Demo from './demo';
import { GameScene } from "./game-scene";
import DataHandler from "./data-handler";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  scale: {
    width: 800,
    height: 600,
  },
  // pixelArt: true,//here

  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  render: {
    pixelArt: true,
  },
  parent: "game",
  backgroundColor: "#765478",
  // backgroundColor: '#FFFFFF',
  // scene: Demo
  scene: GameScene,
};

const ws = new WebSocket("ws://localhost:32100");
const dataHandler = new DataHandler();

ws.onopen = function () {
  ws.send("getStats");
};

ws.onmessage = function (event) {
  console.log(event.data);
  dataHandler.getMessage(event.data);
};

// const game = new Phaser.Game(config);
