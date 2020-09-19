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

const dataHandler = new DataHandler();
const ws = new WebSocket("ws://localhost:32100");
ws.onopen = function () {
  ws.send("getStats");
  const game = new Phaser.Game(config);
  game.scene.start("Game", ws);
};

// ws.onmessage = function (event) {
//   console.log(event.data);
//   dataHandler.getMessage(event.data);
// };
