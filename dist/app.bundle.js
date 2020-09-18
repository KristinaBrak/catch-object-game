/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/chased-object.ts":
/*!******************************!*\
  !*** ./src/chased-object.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChasedObject = /** @class */ (function () {
    function ChasedObject(scene, player, key) {
        this.exist = 0;
        this.scene = scene;
        this.player = player;
        var x = Math.random() * this.scene.cameras.main.centerX * 2;
        var y = Math.random() * this.scene.cameras.main.centerY * 2;
        this.exist += 1;
        this.sprite = scene.physics.add.sprite(x, y, 'heart');
    }
    ChasedObject.prototype.move = function () {
        while (Phaser.Math.Distance.Between(this.sprite.x, this.sprite.y, this.player.sprite.x, this.player.sprite.y) < 100) {
            var x = Math.random() * this.scene.cameras.main.centerX * 2;
            var y = Math.random() * this.scene.cameras.main.centerY * 2;
            this.sprite.x = x;
            this.sprite.y = y;
        }
    };
    return ChasedObject;
}());
exports.default = ChasedObject;


/***/ }),

/***/ "./src/data-handler.ts":
/*!*****************************!*\
  !*** ./src/data-handler.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DataHandler = /** @class */ (function () {
    function DataHandler() {
        this.list = ["getStats", "lol", "mau"];
        this.statuses = ["energy", "mood", "health", "sleep"];
    }
    // constructor(player: Player) {
    //   this.player = player;
    // }
    DataHandler.prototype.getMessage = function (message) {
        console.log("got", message);
        this.checkMessage(message);
    };
    DataHandler.prototype.checkMessage = function (message) {
        var _this = this;
        var data = this.getArray(message);
        if (data.length == 1) {
            var found = this.list.find(function (element) { return element == message; });
            console.log("found", found);
        }
        else {
            var statusHealth_1;
            data.forEach(function (element) {
                statusHealth_1 = _this.statuses.find(function (status) { return status.toLowerCase == element.toLowerCase; });
                console.log(statusHealth_1);
                _this.player.changeBarValue(0);
            });
        }
    };
    DataHandler.prototype.getArray = function (message) {
        var data;
        data = message.split(new RegExp("[\n\t ]"));
        data.forEach(function (element) {
            element.trim();
            // console.log(element);
        });
        return data;
    };
    return DataHandler;
}());
exports.default = DataHandler;


/***/ }),

/***/ "./src/game-scene.ts":
/*!***************************!*\
  !*** ./src/game-scene.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = __webpack_require__(/*! ./player */ "./src/player.ts");
var chased_object_1 = __webpack_require__(/*! ./chased-object */ "./src/chased-object.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: "Game",
};
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.velocity = 500;
        _this.destinationToMouse = { x: 0, y: 0 };
        _this.destinationToHeart = { x: 0, y: 0 };
        return _this;
    }
    GameScene.prototype.preload = function () {
        // this.load.image('player', 'assets/player/idle/player.png');
        this.load.image("heart", "assets/heart/heart_full.png");
        this.load.atlas("player", "assets/player/player.png", "assets/player/player.json");
        this.load.atlas("rat", "assets/deadRat/rat.png", "assets/deadRat/rat.json");
    };
    GameScene.prototype.create = function () {
        var _this = this;
        this.player = new player_1.default(this, 50, 50, "player");
        this.heart = new chased_object_1.default(this, this.player, "heart");
        // this.player.healthBar = new HealthBar(this, 100, 20);
        // this.dataHandler = new DataHandler(this.player);
        function onClick(pointer, scene) {
            scene.destinationToMouse.x = pointer.x;
            scene.destinationToMouse.y = pointer.y;
            // scene.changeMoveAnimation(this.player, scene.destinationToMouse.x);
            if (scene.destinationToMouse.x - scene.player.sprite.body.x < 0) {
                scene.player.sprite.play("move").setFlipX(false);
            }
            else {
                scene.player.sprite.play("move").setFlipX(true);
            }
            scene.physics.moveTo(scene.player.sprite, pointer.x, pointer.y, scene.velocity);
            // console.log("initial: ", scene.destination);
        }
        this.input.on("pointerdown", function (pointer) {
            return onClick(pointer, _this);
        });
        this.player.createAnimations();
        this.physics.add.overlap(this.player.sprite, this.heart.sprite, this.playerCollideHeart, null, this);
    };
    GameScene.prototype.changeMoveAnimation = function (player, destinationX) {
        if (destinationX - this.player.sprite.body.x < 0) {
            this.player.sprite.play("move").setFlipX(false);
        }
        else {
            this.player.sprite.play("move").setFlipX(true);
        }
    };
    GameScene.prototype.makeAnim = function (key, frameName, numberOfFrames) {
        var myArray = [];
        for (var i = 1; i <= numberOfFrames; i++) {
            var fn = frameName + i + ".png";
            myArray.push({
                key: key,
                frame: fn,
            });
        }
        return myArray;
    };
    GameScene.prototype.playerCollideHeart = function () {
        this.player.healthBar.increase(10);
        this.heart.move();
    };
    GameScene.prototype.update = function () {
        var distMouse = Phaser.Math.Distance.Between(this.player.sprite.x, this.player.sprite.y, this.destinationToMouse.x, this.destinationToMouse.y);
        // console.log('distance:', dist);
        var distHeart = Phaser.Math.Distance.Between(this.player.sprite.x, this.player.sprite.y, this.heart.sprite.x, this.heart.sprite.y);
        // console.log(distHeart);
        if (distMouse <= 10) {
            // console.log(this.destination.x - this.player.body.x, this.destination.y - this.player.body.y);
            // console.log({ player: { x: this.player.body.x, y: this.player.body.y } });
            this.player.sprite.body.velocity.setTo(0, 0);
            this.player.sprite.play("idle");
            this.destinationToMouse.x = 0;
            this.destinationToMouse.y = 0;
        }
    };
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;


/***/ }),

/***/ "./src/health-bar.ts":
/*!***************************!*\
  !*** ./src/health-bar.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HealthBar = /** @class */ (function () {
    function HealthBar(scene, x, y) {
        this.bar_size = {
            width: 400,
            height: 50
        };
        this.bar_frame_size = this.bar_size.width * 0.02;
        this.bar_display = new Phaser.GameObjects.Graphics(scene);
        this.bar_display.x = x;
        this.bar_display.y = y;
        this.max_value = 100;
        this.current_value = 0;
        this.draw();
        scene.add.existing(this.bar_display);
    }
    HealthBar.prototype.decrease = function (amount) {
        this.current_value -= amount;
        if (this.current_value < 0) {
            this.current_value = 0;
        }
        this.draw();
        return (this.current_value === 0);
    };
    HealthBar.prototype.increase = function (amount) {
        this.current_value += amount;
        if (this.current_value > this.max_value) {
            this.current_value = this.max_value;
        }
        this.draw();
        return (this.current_value === this.max_value);
    };
    HealthBar.prototype.draw = function () {
        this.bar_display.clear();
        this.createEmptyStatusBar();
        this.displayStatusChange();
    };
    HealthBar.prototype.createEmptyStatusBar = function () {
        //  Creating black fream and white background
        this.bar_display.fillStyle(0x000000);
        this.bar_display.fillRect(this.bar_display.x, this.bar_display.y, this.bar_size.width, this.bar_size.height);
        this.bar_display.fillStyle(0xffffff);
        this.bar_display.fillRect(this.bar_display.x + this.bar_frame_size, this.bar_display.y + this.bar_frame_size, this.bar_size.width - this.bar_frame_size * 2, this.bar_size.height - this.bar_frame_size * 2);
    };
    HealthBar.prototype.changeStatusColor = function () {
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
    };
    HealthBar.prototype.displayStatusChange = function () {
        if (this.current_value !== 0) {
            this.changeStatusColor();
            var distance = Math.floor(this.current_value / this.max_value * this.bar_size.width - this.bar_frame_size * 2);
            this.bar_display.fillRect(this.bar_display.x + this.bar_frame_size, this.bar_display.y + this.bar_frame_size, distance, this.bar_size.height - this.bar_frame_size * 2);
        }
    };
    return HealthBar;
}());
exports.HealthBar = HealthBar;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
// import Demo from './demo';
var game_scene_1 = __webpack_require__(/*! ./game-scene */ "./src/game-scene.ts");
var data_handler_1 = __webpack_require__(/*! ./data-handler */ "./src/data-handler.ts");
var config = {
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
    scene: game_scene_1.GameScene,
};
var ws = new WebSocket("ws://localhost:32100");
var dataHandler = new data_handler_1.default();
ws.onopen = function () {
    ws.send("getStats");
};
ws.onmessage = function (event) {
    console.log(event.data);
    dataHandler.getMessage(event.data);
};
// const game = new Phaser.Game(config);


/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var health_bar_1 = __webpack_require__(/*! ./health-bar */ "./src/health-bar.ts");
var Player = /** @class */ (function () {
    function Player(scene, x, y, key) {
        this.scene = scene;
        this.healthBar = new health_bar_1.HealthBar(scene, 100, 20);
        this.sprite = scene.physics.add.sprite(x, y, "player");
        this.sprite.setScale(4, 4);
    }
    Player.prototype.createAnimations = function () {
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
    };
    Player.prototype.makeAnimation = function (key, frameName, numberOfFrames) {
        var myArray = [];
        for (var i = 1; i <= numberOfFrames; i++) {
            var fn = frameName + i + ".png";
            myArray.push({
                key: key,
                frame: fn,
            });
        }
        return myArray;
    };
    Player.prototype.changeBarValue = function (value) {
        this.healthBar.current_value = value;
    };
    return Player;
}());
exports.default = Player;


/***/ }),

/***/ 0:
/*!*****************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://localhost:8080 ./src/main.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/kristina/MyProjects/catch-object/node_modules/webpack-dev-server/client/index.js?http://localhost:8080 */"./node_modules/webpack-dev-server/client/index.js?http://localhost:8080");
module.exports = __webpack_require__(/*! ./src/main.ts */"./src/main.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXNlZC1vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEtaGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVhbHRoLWJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7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RSxNQUFNO1lBQ1gsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQztZQUN6RCxTQUFTLEVBQUUsQ0FBQztZQUNaLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDWCxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDdEIsR0FBRyxFQUFFLE1BQU07WUFDWCxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO1lBQzlELFNBQVMsRUFBRSxDQUFDO1lBQ1osTUFBTSxFQUFFLENBQUMsQ0FBQztTQUNYLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCw4QkFBYSxHQUFiLFVBQWMsR0FBVyxFQUFFLFNBQWlCLEVBQUUsY0FBc0I7UUFDbEUsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsSUFBTSxFQUFFLEdBQUcsU0FBUyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7WUFDbEMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDWCxHQUFHLEVBQUUsR0FBRztnQkFDUixLQUFLLEVBQUUsRUFBRTthQUNWLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUNELCtCQUFjLEdBQWQsVUFBZSxLQUFhO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUN6QyxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vbG9nXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvbG9nLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90IHN5bmMgXlxcXFwuXFxcXC9sb2ckXCI7IiwiaW1wb3J0IHsgUGh5c2ljcyB9IGZyb20gXCJwaGFzZXJcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhc2VkT2JqZWN0IHtcblxuICAgIHNwcml0ZTogUGh5c2ljcy5BcmNhZGUuU3ByaXRlO1xuICAgIHNjZW5lOiBQaGFzZXIuU2NlbmU7XG4gICAgcGxheWVyOiBQbGF5ZXI7XG4gICAgZXhpc3QgPSAwO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCBwbGF5ZXI6IFBsYXllciwga2V5OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICAgICAgY29uc3QgeCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLnNjZW5lLmNhbWVyYXMubWFpbi5jZW50ZXJYICogMjtcbiAgICAgICAgY29uc3QgeSA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLnNjZW5lLmNhbWVyYXMubWFpbi5jZW50ZXJZICogMjtcbiAgICAgICAgdGhpcy5leGlzdCArPSAxO1xuICAgICAgICB0aGlzLnNwcml0ZSA9IHNjZW5lLnBoeXNpY3MuYWRkLnNwcml0ZSh4LCB5LCAnaGVhcnQnKTtcblxuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIHdoaWxlIChQaGFzZXIuTWF0aC5EaXN0YW5jZS5CZXR3ZWVuKHRoaXMuc3ByaXRlLngsIHRoaXMuc3ByaXRlLnksIHRoaXMucGxheWVyLnNwcml0ZS54LCB0aGlzLnBsYXllci5zcHJpdGUueSkgPCAxMDApIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLnJhbmRvbSgpICogdGhpcy5zY2VuZS5jYW1lcmFzLm1haW4uY2VudGVyWCAqIDI7XG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuc2NlbmUuY2FtZXJhcy5tYWluLmNlbnRlclkgKiAyO1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUueCA9IHg7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS55ID0geTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhSGFuZGxlciB7XG4gIGxpc3QgPSBbXCJnZXRTdGF0c1wiLCBcImxvbFwiLCBcIm1hdVwiXTtcbiAgc3RhdHVzZXMgPSBbXCJlbmVyZ3lcIiwgXCJtb29kXCIsIFwiaGVhbHRoXCIsIFwic2xlZXBcIl07XG4gIHBsYXllcjogUGxheWVyO1xuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxuXG4gIC8vIGNvbnN0cnVjdG9yKHBsYXllcjogUGxheWVyKSB7XG4gIC8vICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gIC8vIH1cblxuICBwdWJsaWMgZ2V0TWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZyhcImdvdFwiLCBtZXNzYWdlKTtcbiAgICB0aGlzLmNoZWNrTWVzc2FnZShtZXNzYWdlKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGxldCBkYXRhID0gdGhpcy5nZXRBcnJheShtZXNzYWdlKTtcbiAgICBpZiAoZGF0YS5sZW5ndGggPT0gMSkge1xuICAgICAgbGV0IGZvdW5kID0gdGhpcy5saXN0LmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT0gbWVzc2FnZSk7XG4gICAgICBjb25zb2xlLmxvZyhcImZvdW5kXCIsIGZvdW5kKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHN0YXR1c0hlYWx0aDtcbiAgICAgIGRhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBzdGF0dXNIZWFsdGggPSB0aGlzLnN0YXR1c2VzLmZpbmQoXG4gICAgICAgICAgKHN0YXR1cykgPT4gc3RhdHVzLnRvTG93ZXJDYXNlID09IGVsZW1lbnQudG9Mb3dlckNhc2VcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhzdGF0dXNIZWFsdGgpO1xuICAgICAgICB0aGlzLnBsYXllci5jaGFuZ2VCYXJWYWx1ZSgwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0QXJyYXkobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgbGV0IGRhdGE6IHN0cmluZ1tdO1xuICAgIGRhdGEgPSBtZXNzYWdlLnNwbGl0KG5ldyBSZWdFeHAoXCJbXFxuXFx0IF1cIikpO1xuICAgIGRhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC50cmltKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSGVhbHRoQmFyIH0gZnJvbSBcIi4vaGVhbHRoLWJhclwiO1xuaW1wb3J0IHsgUGh5c2ljcywgU2NlbmUgfSBmcm9tIFwicGhhc2VyXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IENoYXNlZE9iamVjdCBmcm9tIFwiLi9jaGFzZWQtb2JqZWN0XCI7XG5pbXBvcnQgRGF0YUhhbmRsZXIgZnJvbSBcIi4vZGF0YS1oYW5kbGVyXCI7XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiBcIkdhbWVcIixcbn07XG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgcGxheWVyOiBQbGF5ZXI7XG4gIC8vIGhlYXJ0OiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlO1xuICBoZWFydDogQ2hhc2VkT2JqZWN0O1xuICB2ZWxvY2l0eSA9IDUwMDtcbiAgZGF0YUhhbmRsZXI6IERhdGFIYW5kbGVyO1xuXG4gIGRlc3RpbmF0aW9uVG9Nb3VzZSA9IHsgeDogMCwgeTogMCB9O1xuICBkZXN0aW5hdGlvblRvSGVhcnQgPSB7IHg6IDAsIHk6IDAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XG4gIH1cblxuICBwdWJsaWMgcHJlbG9hZCgpIHtcbiAgICAvLyB0aGlzLmxvYWQuaW1hZ2UoJ3BsYXllcicsICdhc3NldHMvcGxheWVyL2lkbGUvcGxheWVyLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZShcImhlYXJ0XCIsIFwiYXNzZXRzL2hlYXJ0L2hlYXJ0X2Z1bGwucG5nXCIpO1xuICAgIHRoaXMubG9hZC5hdGxhcyhcbiAgICAgIFwicGxheWVyXCIsXG4gICAgICBcImFzc2V0cy9wbGF5ZXIvcGxheWVyLnBuZ1wiLFxuICAgICAgXCJhc3NldHMvcGxheWVyL3BsYXllci5qc29uXCJcbiAgICApO1xuICAgIHRoaXMubG9hZC5hdGxhcyhcInJhdFwiLCBcImFzc2V0cy9kZWFkUmF0L3JhdC5wbmdcIiwgXCJhc3NldHMvZGVhZFJhdC9yYXQuanNvblwiKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUoKSB7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMsIDUwLCA1MCwgXCJwbGF5ZXJcIik7XG4gICAgdGhpcy5oZWFydCA9IG5ldyBDaGFzZWRPYmplY3QodGhpcywgdGhpcy5wbGF5ZXIsIFwiaGVhcnRcIik7XG4gICAgLy8gdGhpcy5wbGF5ZXIuaGVhbHRoQmFyID0gbmV3IEhlYWx0aEJhcih0aGlzLCAxMDAsIDIwKTtcbiAgICBcbiAgICAvLyB0aGlzLmRhdGFIYW5kbGVyID0gbmV3IERhdGFIYW5kbGVyKHRoaXMucGxheWVyKTtcblxuICAgIGZ1bmN0aW9uIG9uQ2xpY2socG9pbnRlcjogUGhhc2VyLklucHV0LlBvaW50ZXIsIHNjZW5lOiBHYW1lU2NlbmUpIHtcbiAgICAgIHNjZW5lLmRlc3RpbmF0aW9uVG9Nb3VzZS54ID0gcG9pbnRlci54O1xuICAgICAgc2NlbmUuZGVzdGluYXRpb25Ub01vdXNlLnkgPSBwb2ludGVyLnk7XG5cbiAgICAgIC8vIHNjZW5lLmNoYW5nZU1vdmVBbmltYXRpb24odGhpcy5wbGF5ZXIsIHNjZW5lLmRlc3RpbmF0aW9uVG9Nb3VzZS54KTtcbiAgICAgIGlmIChzY2VuZS5kZXN0aW5hdGlvblRvTW91c2UueCAtIHNjZW5lLnBsYXllci5zcHJpdGUuYm9keS54IDwgMCkge1xuICAgICAgICBzY2VuZS5wbGF5ZXIuc3ByaXRlLnBsYXkoXCJtb3ZlXCIpLnNldEZsaXBYKGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjZW5lLnBsYXllci5zcHJpdGUucGxheShcIm1vdmVcIikuc2V0RmxpcFgodHJ1ZSk7XG4gICAgICB9XG4gICAgICBzY2VuZS5waHlzaWNzLm1vdmVUbyhcbiAgICAgICAgc2NlbmUucGxheWVyLnNwcml0ZSxcbiAgICAgICAgcG9pbnRlci54LFxuICAgICAgICBwb2ludGVyLnksXG4gICAgICAgIHNjZW5lLnZlbG9jaXR5XG4gICAgICApO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJpbml0aWFsOiBcIiwgc2NlbmUuZGVzdGluYXRpb24pO1xuICAgIH1cblxuICAgIHRoaXMuaW5wdXQub24oXCJwb2ludGVyZG93blwiLCAocG9pbnRlcjogUGhhc2VyLklucHV0LlBvaW50ZXIpID0+XG4gICAgICBvbkNsaWNrKHBvaW50ZXIsIHRoaXMpXG4gICAgKTtcblxuICAgIHRoaXMucGxheWVyLmNyZWF0ZUFuaW1hdGlvbnMoKTtcblxuICAgIHRoaXMucGh5c2ljcy5hZGQub3ZlcmxhcChcbiAgICAgIHRoaXMucGxheWVyLnNwcml0ZSxcbiAgICAgIHRoaXMuaGVhcnQuc3ByaXRlLFxuICAgICAgdGhpcy5wbGF5ZXJDb2xsaWRlSGVhcnQsXG4gICAgICBudWxsLFxuICAgICAgdGhpc1xuICAgICk7XG4gIH1cblxuICBjaGFuZ2VNb3ZlQW5pbWF0aW9uKHBsYXllcjogUGhhc2VyLlNjZW5lLCBkZXN0aW5hdGlvblg6IG51bWJlcikge1xuICAgIGlmIChkZXN0aW5hdGlvblggLSB0aGlzLnBsYXllci5zcHJpdGUuYm9keS54IDwgMCkge1xuICAgICAgdGhpcy5wbGF5ZXIuc3ByaXRlLnBsYXkoXCJtb3ZlXCIpLnNldEZsaXBYKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wbGF5ZXIuc3ByaXRlLnBsYXkoXCJtb3ZlXCIpLnNldEZsaXBYKHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIG1ha2VBbmltKGtleTogc3RyaW5nLCBmcmFtZU5hbWU6IHN0cmluZywgbnVtYmVyT2ZGcmFtZXM6IG51bWJlcikge1xuICAgIGxldCBteUFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtYmVyT2ZGcmFtZXM7IGkrKykge1xuICAgICAgbGV0IGZuID0gZnJhbWVOYW1lICsgaSArIFwiLnBuZ1wiO1xuICAgICAgbXlBcnJheS5wdXNoKHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIGZyYW1lOiBmbixcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbXlBcnJheTtcbiAgfVxuXG4gIHBsYXllckNvbGxpZGVIZWFydCgpIHtcbiAgICB0aGlzLnBsYXllci5oZWFsdGhCYXIuaW5jcmVhc2UoMTApO1xuICAgIHRoaXMuaGVhcnQubW92ZSgpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBkaXN0TW91c2UgPSBQaGFzZXIuTWF0aC5EaXN0YW5jZS5CZXR3ZWVuKFxuICAgICAgdGhpcy5wbGF5ZXIuc3ByaXRlLngsXG4gICAgICB0aGlzLnBsYXllci5zcHJpdGUueSxcbiAgICAgIHRoaXMuZGVzdGluYXRpb25Ub01vdXNlLngsXG4gICAgICB0aGlzLmRlc3RpbmF0aW9uVG9Nb3VzZS55XG4gICAgKTtcbiAgICAvLyBjb25zb2xlLmxvZygnZGlzdGFuY2U6JywgZGlzdCk7XG4gICAgY29uc3QgZGlzdEhlYXJ0ID0gUGhhc2VyLk1hdGguRGlzdGFuY2UuQmV0d2VlbihcbiAgICAgIHRoaXMucGxheWVyLnNwcml0ZS54LFxuICAgICAgdGhpcy5wbGF5ZXIuc3ByaXRlLnksXG4gICAgICB0aGlzLmhlYXJ0LnNwcml0ZS54LFxuICAgICAgdGhpcy5oZWFydC5zcHJpdGUueVxuICAgICk7XG4gICAgLy8gY29uc29sZS5sb2coZGlzdEhlYXJ0KTtcblxuICAgIGlmIChkaXN0TW91c2UgPD0gMTApIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGVzdGluYXRpb24ueCAtIHRoaXMucGxheWVyLmJvZHkueCwgdGhpcy5kZXN0aW5hdGlvbi55IC0gdGhpcy5wbGF5ZXIuYm9keS55KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHsgcGxheWVyOiB7IHg6IHRoaXMucGxheWVyLmJvZHkueCwgeTogdGhpcy5wbGF5ZXIuYm9keS55IH0gfSk7XG4gICAgICB0aGlzLnBsYXllci5zcHJpdGUuYm9keS52ZWxvY2l0eS5zZXRUbygwLCAwKTtcbiAgICAgIHRoaXMucGxheWVyLnNwcml0ZS5wbGF5KFwiaWRsZVwiKTtcbiAgICAgIHRoaXMuZGVzdGluYXRpb25Ub01vdXNlLnggPSAwO1xuICAgICAgdGhpcy5kZXN0aW5hdGlvblRvTW91c2UueSA9IDA7XG4gICAgfVxuICB9XG59XG4iLCJcbmV4cG9ydCBjbGFzcyBIZWFsdGhCYXIge1xuICAgIGJhcl9kaXNwbGF5OiBQaGFzZXIuR2FtZU9iamVjdHMuR3JhcGhpY3M7XG4gICAgbWF4X3ZhbHVlOiBudW1iZXI7XG4gICAgY3VycmVudF92YWx1ZTogbnVtYmVyO1xuICAgIGJhcl9zaXplID0ge1xuICAgICAgICB3aWR0aDogNDAwLFxuICAgICAgICBoZWlnaHQ6IDUwXG4gICAgfTtcbiAgICBiYXJfZnJhbWVfc2l6ZSA9IHRoaXMuYmFyX3NpemUud2lkdGggKiAwLjAyO1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5iYXJfZGlzcGxheSA9IG5ldyBQaGFzZXIuR2FtZU9iamVjdHMuR3JhcGhpY3Moc2NlbmUpO1xuXG4gICAgICAgIHRoaXMuYmFyX2Rpc3BsYXkueCA9IHg7XG4gICAgICAgIHRoaXMuYmFyX2Rpc3BsYXkueSA9IHk7XG4gICAgICAgIHRoaXMubWF4X3ZhbHVlID0gMTAwO1xuICAgICAgICB0aGlzLmN1cnJlbnRfdmFsdWUgPSAwO1xuXG4gICAgICAgIHRoaXMuZHJhdygpO1xuXG4gICAgICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzLmJhcl9kaXNwbGF5KTtcbiAgICB9XG5cbiAgICBkZWNyZWFzZShhbW91bnQpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50X3ZhbHVlIC09IGFtb3VudDtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50X3ZhbHVlIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50X3ZhbHVlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZHJhdygpO1xuXG4gICAgICAgIHJldHVybiAodGhpcy5jdXJyZW50X3ZhbHVlID09PSAwKTtcbiAgICB9XG4gICAgaW5jcmVhc2UoYW1vdW50KSB7XG4gICAgICAgIHRoaXMuY3VycmVudF92YWx1ZSArPSBhbW91bnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudF92YWx1ZSA+dGhpcy5tYXhfdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudF92YWx1ZSA9IHRoaXMubWF4X3ZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kcmF3KCk7XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLmN1cnJlbnRfdmFsdWUgPT09IHRoaXMubWF4X3ZhbHVlKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmJhcl9kaXNwbGF5LmNsZWFyKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlRW1wdHlTdGF0dXNCYXIoKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U3RhdHVzQ2hhbmdlKCk7XG5cblxuICAgIH1cbiAgICBjcmVhdGVFbXB0eVN0YXR1c0Jhcigpe1xuICAgICAgICAvLyAgQ3JlYXRpbmcgYmxhY2sgZnJlYW0gYW5kIHdoaXRlIGJhY2tncm91bmRcbiAgICAgICAgdGhpcy5iYXJfZGlzcGxheS5maWxsU3R5bGUoMHgwMDAwMDApO1xuICAgICAgICB0aGlzLmJhcl9kaXNwbGF5LmZpbGxSZWN0KHRoaXMuYmFyX2Rpc3BsYXkueCwgdGhpcy5iYXJfZGlzcGxheS55LCB0aGlzLmJhcl9zaXplLndpZHRoLCB0aGlzLmJhcl9zaXplLmhlaWdodCk7XG5cbiAgICAgICAgdGhpcy5iYXJfZGlzcGxheS5maWxsU3R5bGUoMHhmZmZmZmYpO1xuICAgICAgICB0aGlzLmJhcl9kaXNwbGF5LmZpbGxSZWN0KHRoaXMuYmFyX2Rpc3BsYXkueCArIHRoaXMuYmFyX2ZyYW1lX3NpemUsIHRoaXMuYmFyX2Rpc3BsYXkueSArIHRoaXMuYmFyX2ZyYW1lX3NpemUsIHRoaXMuYmFyX3NpemUud2lkdGggLSB0aGlzLmJhcl9mcmFtZV9zaXplICogMiwgdGhpcy5iYXJfc2l6ZS5oZWlnaHQgLSB0aGlzLmJhcl9mcmFtZV9zaXplICogMik7XG5cbiAgICB9XG4gICAgY2hhbmdlU3RhdHVzQ29sb3IoKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRfdmFsdWUgPD0gMzApIHtcbiAgICAgICAgICAgIHRoaXMuYmFyX2Rpc3BsYXkuZmlsbFN0eWxlKDB4ZmYwMDAwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmN1cnJlbnRfdmFsdWUgPD0gNjApIHtcbiAgICAgICAgICAgIHRoaXMuYmFyX2Rpc3BsYXkuZmlsbFN0eWxlKDB4ZmY5OTMzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmN1cnJlbnRfdmFsdWUgPD0gOTApIHtcbiAgICAgICAgICAgIHRoaXMuYmFyX2Rpc3BsYXkuZmlsbFN0eWxlKDB4ZmZmMDAwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYmFyX2Rpc3BsYXkuZmlsbFN0eWxlKDB4MDBmZjAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNwbGF5U3RhdHVzQ2hhbmdlKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50X3ZhbHVlICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXR1c0NvbG9yKCk7XG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLmZsb29yKHRoaXMuY3VycmVudF92YWx1ZSAvIHRoaXMubWF4X3ZhbHVlICogdGhpcy5iYXJfc2l6ZS53aWR0aCAtIHRoaXMuYmFyX2ZyYW1lX3NpemUgKiAyKTtcbiAgICAgICAgICAgIHRoaXMuYmFyX2Rpc3BsYXkuZmlsbFJlY3QodGhpcy5iYXJfZGlzcGxheS54ICsgdGhpcy5iYXJfZnJhbWVfc2l6ZSwgdGhpcy5iYXJfZGlzcGxheS55ICsgdGhpcy5iYXJfZnJhbWVfc2l6ZSwgZGlzdGFuY2UsIHRoaXMuYmFyX3NpemUuaGVpZ2h0IC0gdGhpcy5iYXJfZnJhbWVfc2l6ZSAqIDIpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBcInBoYXNlclwiO1xuLy8gaW1wb3J0IERlbW8gZnJvbSAnLi9kZW1vJztcbmltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gXCIuL2dhbWUtc2NlbmVcIjtcbmltcG9ydCBEYXRhSGFuZGxlciBmcm9tIFwiLi9kYXRhLWhhbmRsZXJcIjtcblxuY29uc3QgY29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xuICB0eXBlOiBQaGFzZXIuQVVUTyxcbiAgc2NhbGU6IHtcbiAgICB3aWR0aDogODAwLFxuICAgIGhlaWdodDogNjAwLFxuICB9LFxuICAvLyBwaXhlbEFydDogdHJ1ZSwvL2hlcmVcblxuICBwaHlzaWNzOiB7XG4gICAgZGVmYXVsdDogXCJhcmNhZGVcIixcbiAgICBhcmNhZGU6IHtcbiAgICAgIGRlYnVnOiBmYWxzZSxcbiAgICB9LFxuICB9LFxuICByZW5kZXI6IHtcbiAgICBwaXhlbEFydDogdHJ1ZSxcbiAgfSxcbiAgcGFyZW50OiBcImdhbWVcIixcbiAgYmFja2dyb3VuZENvbG9yOiBcIiM3NjU0NzhcIixcbiAgLy8gYmFja2dyb3VuZENvbG9yOiAnI0ZGRkZGRicsXG4gIC8vIHNjZW5lOiBEZW1vXG4gIHNjZW5lOiBHYW1lU2NlbmUsXG59O1xuXG5jb25zdCB3cyA9IG5ldyBXZWJTb2NrZXQoXCJ3czovL2xvY2FsaG9zdDozMjEwMFwiKTtcbmNvbnN0IGRhdGFIYW5kbGVyID0gbmV3IERhdGFIYW5kbGVyKCk7XG5cbndzLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgd3Muc2VuZChcImdldFN0YXRzXCIpO1xufTtcblxud3Mub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnNvbGUubG9nKGV2ZW50LmRhdGEpO1xuICBkYXRhSGFuZGxlci5nZXRNZXNzYWdlKGV2ZW50LmRhdGEpO1xufTtcblxuLy8gY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShjb25maWcpO1xuIiwiaW1wb3J0IHsgSGVhbHRoQmFyIH0gZnJvbSBcIi4vaGVhbHRoLWJhclwiO1xuaW1wb3J0IHsgUGh5c2ljcyB9IGZyb20gXCJwaGFzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgaGVhbHRoQmFyOiBIZWFsdGhCYXI7XG4gIHNwcml0ZTogUGh5c2ljcy5BcmNhZGUuU3ByaXRlO1xuICBzY2VuZTogUGhhc2VyLlNjZW5lO1xuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwga2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5oZWFsdGhCYXIgPSBuZXcgSGVhbHRoQmFyKHNjZW5lLCAxMDAsIDIwKTtcbiAgICB0aGlzLnNwcml0ZSA9IHNjZW5lLnBoeXNpY3MuYWRkLnNwcml0ZSh4LCB5LCBcInBsYXllclwiKTtcbiAgICB0aGlzLnNwcml0ZS5zZXRTY2FsZSg0LCA0KTtcbiAgfVxuXG4gIGNyZWF0ZUFuaW1hdGlvbnMoKSB7XG4gICAgdGhpcy5zY2VuZS5hbmltcy5jcmVhdGUoe1xuICAgICAga2V5OiBcImlkbGVcIixcbiAgICAgIGZyYW1lczogdGhpcy5tYWtlQW5pbWF0aW9uKFwicGxheWVyXCIsIFwicGxheWVyX2lkbGVfMDBcIiwgNCksXG4gICAgICBmcmFtZVJhdGU6IDgsXG4gICAgICByZXBlYXQ6IC0xLFxuICAgIH0pO1xuICAgIHRoaXMuc2NlbmUuYW5pbXMuY3JlYXRlKHtcbiAgICAgIGtleTogXCJtb3ZlXCIsXG4gICAgICBmcmFtZXM6IHRoaXMubWFrZUFuaW1hdGlvbihcInBsYXllclwiLCBcInBsYXllcl93YWxrX2xlZnRfMDBcIiwgNiksXG4gICAgICBmcmFtZVJhdGU6IDgsXG4gICAgICByZXBlYXQ6IC0xLFxuICAgIH0pO1xuICB9XG4gIG1ha2VBbmltYXRpb24oa2V5OiBzdHJpbmcsIGZyYW1lTmFtZTogc3RyaW5nLCBudW1iZXJPZkZyYW1lczogbnVtYmVyKSB7XG4gICAgY29uc3QgbXlBcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG51bWJlck9mRnJhbWVzOyBpKyspIHtcbiAgICAgIGNvbnN0IGZuID0gZnJhbWVOYW1lICsgaSArIFwiLnBuZ1wiO1xuICAgICAgbXlBcnJheS5wdXNoKHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIGZyYW1lOiBmbixcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbXlBcnJheTtcbiAgfVxuICBjaGFuZ2VCYXJWYWx1ZSh2YWx1ZTogbnVtYmVyKXtcbiAgICAgIHRoaXMuaGVhbHRoQmFyLmN1cnJlbnRfdmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==