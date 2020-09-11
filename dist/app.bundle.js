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
    function ChasedObject(scene, key) {
        this.exist = false;
        this.scene = scene;
        var x = Math.random() * this.scene.cameras.main.centerX * 2;
        var y = Math.random() * this.scene.cameras.main.centerY * 2;
        this.exist = true;
        this.sprite = scene.physics.add.sprite(x, y, 'heart');
    }
    ChasedObject.prototype.clear = function () {
        this.exist = false;
        this.sprite = null;
        this.scene = null;
    };
    return ChasedObject;
}());
exports.default = ChasedObject;


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
    key: 'Game'
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
        this.load.image('heart', 'assets/heart/heart_full.png');
        this.load.atlas('player', 'assets/player/player.png', 'assets/player/player.json');
        this.load.atlas('rat', 'assets/deadRat/rat.png', 'assets/deadRat/rat.json');
    };
    GameScene.prototype.create = function () {
        var _this = this;
        this.player = new player_1.default(this, 50, 50, 'player');
        this.heart = new chased_object_1.default(this, 'heart');
        // this.player.healthBar = new HealthBar(this, 100, 20);
        function onClick(pointer, scene) {
            scene.destinationToMouse.x = pointer.x;
            scene.destinationToMouse.y = pointer.y;
            // scene.changeMoveAnimation(this.player, scene.destinationToMouse.x);
            if ((scene.destinationToMouse.x - scene.player.sprite.body.x) < 0) {
                scene.player.sprite.play('move').setFlipX(false);
            }
            else {
                scene.player.sprite.play('move').setFlipX(true);
            }
            scene.physics.moveTo(scene.player.sprite, pointer.x, pointer.y, scene.velocity);
            // console.log("initial: ", scene.destination);
        }
        this.input.on('pointerdown', function (pointer) { return onClick(pointer, _this); });
        this.player.createAnimations();
    };
    GameScene.prototype.changeMoveAnimation = function (player, destinationX) {
        if ((destinationX - this.player.sprite.body.x) < 0) {
            this.player.sprite.play('move').setFlipX(false);
        }
        else {
            this.player.sprite.play('move').setFlipX(true);
        }
    };
    GameScene.prototype.makeAnim = function (key, frameName, numberOfFrames) {
        var myArray = [];
        for (var i = 1; i <= numberOfFrames; i++) {
            var fn = frameName + i + '.png';
            myArray.push({
                key: key,
                frame: fn
            });
        }
        return myArray;
    };
    GameScene.prototype.changeHeartCoordinates = function () {
        this.heart.clear();
        // this.heart = null;
        if (this.heart.exist === false) {
            this.heart = new chased_object_1.default(this, 'heart');
        }
        // this.heart.sprite.disableBody(true, true);
        this.player.healthBar.increase(10);
        // this.heart.sprite.disableBody(false, false);
        console.log('changeheartcoo');
    };
    GameScene.prototype.moveHeart = function () {
        this.physics.add.overlap(this.player.sprite, this.heart.sprite, this.changeHeartCoordinates, null, this);
    };
    GameScene.prototype.update = function () {
        var distMouse = Phaser.Math.Distance.Between(this.player.sprite.x, this.player.sprite.y, this.destinationToMouse.x, this.destinationToMouse.y);
        // console.log('distance:', dist);
        var distHeart = Phaser.Math.Distance.Between(this.player.sprite.x, this.player.sprite.y, this.heart.sprite.x, this.heart.sprite.y);
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
var config = {
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
    scene: game_scene_1.GameScene
};
var game = new Phaser.Game(config);


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
        this.sprite = scene.physics.add.sprite(x, y, 'player');
        this.sprite.setScale(4, 4);
        this.healthBar = new health_bar_1.HealthBar(scene, 100, 20);
    }
    Player.prototype.createAnimations = function () {
        this.scene.anims.create({
            key: 'idle',
            frames: this.makeAnimation('player', 'player_idle_00', 4),
            frameRate: 8,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'move',
            frames: this.makeAnimation('player', 'player_walk_left_00', 6),
            frameRate: 8,
            repeat: -1
        });
    };
    Player.prototype.makeAnimation = function (key, frameName, numberOfFrames) {
        var myArray = [];
        for (var i = 1; i <= numberOfFrames; i++) {
            var fn = frameName + i + '.png';
            myArray.push({
                key: key,
                frame: fn
            });
        }
        return myArray;
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

__webpack_require__(/*! /home/kristina/MyProjects/phaser3-typescript-project-template-master/node_modules/webpack-dev-server/client/index.js?http://localhost:8080 */"./node_modules/webpack-dev-server/client/index.js?http://localhost:8080");
module.exports = __webpack_require__(/*! ./src/main.ts */"./src/main.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXNlZC1vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWx0aC1iYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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Q0FBQztJQUNuRCxDQUFDO0lBQ0QsaUNBQWdCLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsRUFBRSxNQUFNO1lBQ1gsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQztZQUN6RCxTQUFTLEVBQUUsQ0FBQztZQUNaLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDYixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDcEIsR0FBRyxFQUFFLE1BQU07WUFDWCxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO1lBQzlELFNBQVMsRUFBRSxDQUFDO1lBQ1osTUFBTSxFQUFFLENBQUMsQ0FBQztTQUNiLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCw4QkFBYSxHQUFiLFVBQWMsR0FBVyxFQUFFLFNBQWlCLEVBQUUsY0FBc0I7UUFDaEUsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsSUFBTSxFQUFFLEdBQUcsU0FBUyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7WUFDbEMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDVCxHQUFHLEVBQUUsR0FBRztnQkFDUixLQUFLLEVBQUUsRUFBRTthQUNaLENBQUM7U0FDTDtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFTCxhQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9sb2dcIjogXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9sb2cuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3Qgc3luYyBeXFxcXC5cXFxcL2xvZyRcIjsiLCJpbXBvcnQgeyBQaHlzaWNzIH0gZnJvbSBcInBoYXNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFzZWRPYmplY3Qge1xuICAgIHNwcml0ZTogUGh5c2ljcy5BcmNhZGUuU3ByaXRlO1xuICAgIHNjZW5lOiBQaGFzZXIuU2NlbmU7XG4gICAgZXhpc3QgPSBmYWxzZTtcblxuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwga2V5OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuc2NlbmUuY2FtZXJhcy5tYWluLmNlbnRlclggKiAyO1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuc2NlbmUuY2FtZXJhcy5tYWluLmNlbnRlclkgKiAyO1xuICAgICAgICB0aGlzLmV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBzY2VuZS5waHlzaWNzLmFkZC5zcHJpdGUoeCwgeSwgJ2hlYXJ0Jyk7XG5cbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5leGlzdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNwcml0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBudWxsO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBIZWFsdGhCYXIgfSBmcm9tIFwiLi9oZWFsdGgtYmFyXCI7XG5pbXBvcnQgeyBQaHlzaWNzLCBTY2VuZSB9IGZyb20gXCJwaGFzZXJcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgQ2hhc2VkT2JqZWN0IGZyb20gXCIuL2NoYXNlZC1vYmplY3RcIjtcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICBrZXk6ICdHYW1lJ1xufTtcbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICAgIHBsYXllcjogUGxheWVyO1xuICAgIC8vIGhlYXJ0OiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlO1xuICAgIGhlYXJ0OiBDaGFzZWRPYmplY3Q7XG4gICAgdmVsb2NpdHkgPSA1MDA7XG5cbiAgICBkZXN0aW5hdGlvblRvTW91c2UgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICBkZXN0aW5hdGlvblRvSGVhcnQgPSB7IHg6IDAsIHk6IDAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XG4gICAgfVxuXG4gICAgcHVibGljIHByZWxvYWQoKSB7XG4gICAgICAgIC8vIHRoaXMubG9hZC5pbWFnZSgncGxheWVyJywgJ2Fzc2V0cy9wbGF5ZXIvaWRsZS9wbGF5ZXIucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnaGVhcnQnLCAnYXNzZXRzL2hlYXJ0L2hlYXJ0X2Z1bGwucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5hdGxhcygncGxheWVyJywgJ2Fzc2V0cy9wbGF5ZXIvcGxheWVyLnBuZycsICdhc3NldHMvcGxheWVyL3BsYXllci5qc29uJyk7XG4gICAgICAgIHRoaXMubG9hZC5hdGxhcygncmF0JywgJ2Fzc2V0cy9kZWFkUmF0L3JhdC5wbmcnLCAnYXNzZXRzL2RlYWRSYXQvcmF0Lmpzb24nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcywgNTAsIDUwLCAncGxheWVyJyk7XG4gICAgICAgIHRoaXMuaGVhcnQgPSBuZXcgQ2hhc2VkT2JqZWN0KHRoaXMsICdoZWFydCcpO1xuICAgICAgICAvLyB0aGlzLnBsYXllci5oZWFsdGhCYXIgPSBuZXcgSGVhbHRoQmFyKHRoaXMsIDEwMCwgMjApO1xuXG5cblxuICAgICAgICBmdW5jdGlvbiBvbkNsaWNrKHBvaW50ZXI6IFBoYXNlci5JbnB1dC5Qb2ludGVyLCBzY2VuZTogR2FtZVNjZW5lKSB7XG4gICAgICAgICAgICBzY2VuZS5kZXN0aW5hdGlvblRvTW91c2UueCA9IHBvaW50ZXIueDtcbiAgICAgICAgICAgIHNjZW5lLmRlc3RpbmF0aW9uVG9Nb3VzZS55ID0gcG9pbnRlci55O1xuXG4gICAgICAgICAgICAvLyBzY2VuZS5jaGFuZ2VNb3ZlQW5pbWF0aW9uKHRoaXMucGxheWVyLCBzY2VuZS5kZXN0aW5hdGlvblRvTW91c2UueCk7XG4gICAgICAgICAgICBpZiAoKHNjZW5lLmRlc3RpbmF0aW9uVG9Nb3VzZS54IC0gc2NlbmUucGxheWVyLnNwcml0ZS5ib2R5LngpIDwgMCkge1xuICAgICAgICAgICAgICAgIHNjZW5lLnBsYXllci5zcHJpdGUucGxheSgnbW92ZScpLnNldEZsaXBYKGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2NlbmUucGxheWVyLnNwcml0ZS5wbGF5KCdtb3ZlJykuc2V0RmxpcFgodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzY2VuZS5waHlzaWNzLm1vdmVUbyhzY2VuZS5wbGF5ZXIuc3ByaXRlLCBwb2ludGVyLngsIHBvaW50ZXIueSwgc2NlbmUudmVsb2NpdHkpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbml0aWFsOiBcIiwgc2NlbmUuZGVzdGluYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCAocG9pbnRlcjogUGhhc2VyLklucHV0LlBvaW50ZXIpID0+IG9uQ2xpY2socG9pbnRlciwgdGhpcykpO1xuXG4gICAgICAgIHRoaXMucGxheWVyLmNyZWF0ZUFuaW1hdGlvbnMoKTtcblxuXG4gICAgfVxuXG4gICAgY2hhbmdlTW92ZUFuaW1hdGlvbihwbGF5ZXI6IFBoYXNlci5TY2VuZSwgZGVzdGluYXRpb25YOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKChkZXN0aW5hdGlvblggLSB0aGlzLnBsYXllci5zcHJpdGUuYm9keS54KSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNwcml0ZS5wbGF5KCdtb3ZlJykuc2V0RmxpcFgoZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc3ByaXRlLnBsYXkoJ21vdmUnKS5zZXRGbGlwWCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtYWtlQW5pbShrZXk6IHN0cmluZywgZnJhbWVOYW1lOiBzdHJpbmcsIG51bWJlck9mRnJhbWVzOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IG15QXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtYmVyT2ZGcmFtZXM7IGkrKykge1xuICAgICAgICAgICAgbGV0IGZuID0gZnJhbWVOYW1lICsgaSArICcucG5nJztcbiAgICAgICAgICAgIG15QXJyYXkucHVzaCh7XG4gICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgZnJhbWU6IGZuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBteUFycmF5O1xuICAgIH1cbiAgICBjaGFuZ2VIZWFydENvb3JkaW5hdGVzKCkge1xuICAgICAgICB0aGlzLmhlYXJ0LmNsZWFyKCk7XG4gICAgICAgIC8vIHRoaXMuaGVhcnQgPSBudWxsO1xuICAgICAgICBpZih0aGlzLmhlYXJ0LmV4aXN0ID09PSBmYWxzZSl7XG4gICAgICAgICAgICB0aGlzLmhlYXJ0ID0gbmV3IENoYXNlZE9iamVjdCh0aGlzLCAnaGVhcnQnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gdGhpcy5oZWFydC5zcHJpdGUuZGlzYWJsZUJvZHkodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMucGxheWVyLmhlYWx0aEJhci5pbmNyZWFzZSgxMCk7XG4gICAgICAgIC8vIHRoaXMuaGVhcnQuc3ByaXRlLmRpc2FibGVCb2R5KGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2VoZWFydGNvbycpO1xuXG4gICAgfVxuICAgIG1vdmVIZWFydCgpIHtcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5vdmVybGFwKHRoaXMucGxheWVyLnNwcml0ZSwgdGhpcy5oZWFydC5zcHJpdGUsIHRoaXMuY2hhbmdlSGVhcnRDb29yZGluYXRlcywgbnVsbCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSgpIHtcblxuICAgICAgICBjb25zdCBkaXN0TW91c2UgPSBQaGFzZXIuTWF0aC5EaXN0YW5jZS5CZXR3ZWVuKHRoaXMucGxheWVyLnNwcml0ZS54LCB0aGlzLnBsYXllci5zcHJpdGUueSwgdGhpcy5kZXN0aW5hdGlvblRvTW91c2UueCwgdGhpcy5kZXN0aW5hdGlvblRvTW91c2UueSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdkaXN0YW5jZTonLCBkaXN0KTtcbiAgICAgICAgY29uc3QgZGlzdEhlYXJ0ID0gUGhhc2VyLk1hdGguRGlzdGFuY2UuQmV0d2Vlbih0aGlzLnBsYXllci5zcHJpdGUueCwgdGhpcy5wbGF5ZXIuc3ByaXRlLnksIHRoaXMuaGVhcnQuc3ByaXRlLngsIHRoaXMuaGVhcnQuc3ByaXRlLnkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkaXN0SGVhcnQpO1xuXG4gICAgICAgIGlmIChkaXN0SGVhcnQgPD0gMTgwKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkaXN0SGVhcnQpO1xuXG4gICAgICAgICAgICB0aGlzLm1vdmVIZWFydCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXN0TW91c2UgPD0gMTApIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGVzdGluYXRpb24ueCAtIHRoaXMucGxheWVyLmJvZHkueCwgdGhpcy5kZXN0aW5hdGlvbi55IC0gdGhpcy5wbGF5ZXIuYm9keS55KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHsgcGxheWVyOiB7IHg6IHRoaXMucGxheWVyLmJvZHkueCwgeTogdGhpcy5wbGF5ZXIuYm9keS55IH0gfSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5zcHJpdGUuYm9keS52ZWxvY2l0eS5zZXRUbygwLCAwKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNwcml0ZS5wbGF5KCdpZGxlJyk7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uVG9Nb3VzZS54ID0gMDtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb25Ub01vdXNlLnkgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiXG5leHBvcnQgY2xhc3MgSGVhbHRoQmFyIHtcbiAgICBiYXJfZGlzcGxheTogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzO1xuICAgIG1heF92YWx1ZTogbnVtYmVyO1xuICAgIGN1cnJlbnRfdmFsdWU6IG51bWJlcjtcbiAgICBiYXJfc2l6ZSA9IHtcbiAgICAgICAgd2lkdGg6IDQwMCxcbiAgICAgICAgaGVpZ2h0OiA1MFxuICAgIH07XG4gICAgYmFyX2ZyYW1lX3NpemUgPSB0aGlzLmJhcl9zaXplLndpZHRoICogMC4wMjtcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYmFyX2Rpc3BsYXkgPSBuZXcgUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzKHNjZW5lKTtcblxuICAgICAgICB0aGlzLmJhcl9kaXNwbGF5LnggPSB4O1xuICAgICAgICB0aGlzLmJhcl9kaXNwbGF5LnkgPSB5O1xuICAgICAgICB0aGlzLm1heF92YWx1ZSA9IDEwMDtcbiAgICAgICAgdGhpcy5jdXJyZW50X3ZhbHVlID0gMDtcblxuICAgICAgICB0aGlzLmRyYXcoKTtcblxuICAgICAgICBzY2VuZS5hZGQuZXhpc3RpbmcodGhpcy5iYXJfZGlzcGxheSk7XG4gICAgfVxuXG4gICAgZGVjcmVhc2UoYW1vdW50KSB7XG4gICAgICAgIHRoaXMuY3VycmVudF92YWx1ZSAtPSBhbW91bnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudF92YWx1ZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudF92YWx1ZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRyYXcoKTtcblxuICAgICAgICByZXR1cm4gKHRoaXMuY3VycmVudF92YWx1ZSA9PT0gMCk7XG4gICAgfVxuICAgIGluY3JlYXNlKGFtb3VudCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRfdmFsdWUgKz0gYW1vdW50O1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRfdmFsdWUgPnRoaXMubWF4X3ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRfdmFsdWUgPSB0aGlzLm1heF92YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZHJhdygpO1xuXG4gICAgICAgIHJldHVybiAodGhpcy5jdXJyZW50X3ZhbHVlID09PSB0aGlzLm1heF92YWx1ZSk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5iYXJfZGlzcGxheS5jbGVhcigpO1xuICAgICAgICB0aGlzLmNyZWF0ZUVtcHR5U3RhdHVzQmFyKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheVN0YXR1c0NoYW5nZSgpO1xuXG5cbiAgICB9XG4gICAgY3JlYXRlRW1wdHlTdGF0dXNCYXIoKXtcbiAgICAgICAgLy8gIENyZWF0aW5nIGJsYWNrIGZyZWFtIGFuZCB3aGl0ZSBiYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuYmFyX2Rpc3BsYXkuZmlsbFN0eWxlKDB4MDAwMDAwKTtcbiAgICAgICAgdGhpcy5iYXJfZGlzcGxheS5maWxsUmVjdCh0aGlzLmJhcl9kaXNwbGF5LngsIHRoaXMuYmFyX2Rpc3BsYXkueSwgdGhpcy5iYXJfc2l6ZS53aWR0aCwgdGhpcy5iYXJfc2l6ZS5oZWlnaHQpO1xuXG4gICAgICAgIHRoaXMuYmFyX2Rpc3BsYXkuZmlsbFN0eWxlKDB4ZmZmZmZmKTtcbiAgICAgICAgdGhpcy5iYXJfZGlzcGxheS5maWxsUmVjdCh0aGlzLmJhcl9kaXNwbGF5LnggKyB0aGlzLmJhcl9mcmFtZV9zaXplLCB0aGlzLmJhcl9kaXNwbGF5LnkgKyB0aGlzLmJhcl9mcmFtZV9zaXplLCB0aGlzLmJhcl9zaXplLndpZHRoIC0gdGhpcy5iYXJfZnJhbWVfc2l6ZSAqIDIsIHRoaXMuYmFyX3NpemUuaGVpZ2h0IC0gdGhpcy5iYXJfZnJhbWVfc2l6ZSAqIDIpO1xuXG4gICAgfVxuICAgIGNoYW5nZVN0YXR1c0NvbG9yKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50X3ZhbHVlIDw9IDMwKSB7XG4gICAgICAgICAgICB0aGlzLmJhcl9kaXNwbGF5LmZpbGxTdHlsZSgweGZmMDAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jdXJyZW50X3ZhbHVlIDw9IDYwKSB7XG4gICAgICAgICAgICB0aGlzLmJhcl9kaXNwbGF5LmZpbGxTdHlsZSgweGZmOTkzMyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jdXJyZW50X3ZhbHVlIDw9IDkwKSB7XG4gICAgICAgICAgICB0aGlzLmJhcl9kaXNwbGF5LmZpbGxTdHlsZSgweGZmZjAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJhcl9kaXNwbGF5LmZpbGxTdHlsZSgweDAwZmYwMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzcGxheVN0YXR1c0NoYW5nZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudF92YWx1ZSAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0dXNDb2xvcigpO1xuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5mbG9vcih0aGlzLmN1cnJlbnRfdmFsdWUgLyB0aGlzLm1heF92YWx1ZSAqIHRoaXMuYmFyX3NpemUud2lkdGggLSB0aGlzLmJhcl9mcmFtZV9zaXplICogMik7XG4gICAgICAgICAgICB0aGlzLmJhcl9kaXNwbGF5LmZpbGxSZWN0KHRoaXMuYmFyX2Rpc3BsYXkueCArIHRoaXMuYmFyX2ZyYW1lX3NpemUsIHRoaXMuYmFyX2Rpc3BsYXkueSArIHRoaXMuYmFyX2ZyYW1lX3NpemUsIGRpc3RhbmNlLCB0aGlzLmJhcl9zaXplLmhlaWdodCAtIHRoaXMuYmFyX2ZyYW1lX3NpemUgKiAyKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgJ3BoYXNlcic7XG4vLyBpbXBvcnQgRGVtbyBmcm9tICcuL2RlbW8nO1xuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSAnLi9nYW1lLXNjZW5lJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuXG5cbmNvbnN0IGNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcbiAgICB0eXBlOiBQaGFzZXIuQVVUTyxcbiAgICBzY2FsZToge1xuICAgICAgICB3aWR0aDogODAwLFxuICAgICAgICBoZWlnaHQ6IDYwMFxuICAgIH0sXG4gICAgLy8gcGl4ZWxBcnQ6IHRydWUsLy9oZXJlXG5cbiAgICBwaHlzaWNzOiB7XG4gICAgICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxuICAgICAgICBhcmNhZGU6IHtcbiAgICAgICAgICAgIGRlYnVnOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICByZW5kZXI6IHtcbiAgICAgICAgcGl4ZWxBcnQ6IHRydWVcbiAgICB9LFxuICAgIHBhcmVudDogJ2dhbWUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyM3NjU0NzgnLFxuICAgIC8vIGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnLFxuICAgIC8vIHNjZW5lOiBEZW1vXG4gICAgc2NlbmU6IEdhbWVTY2VuZVxufTtcblxuXG5jb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGNvbmZpZyk7IiwiaW1wb3J0IHsgSGVhbHRoQmFyIH0gZnJvbSBcIi4vaGVhbHRoLWJhclwiO1xuaW1wb3J0IHsgUGh5c2ljcyB9IGZyb20gXCJwaGFzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBoZWFsdGhCYXI6IEhlYWx0aEJhcjtcbiAgICBzcHJpdGU6IFBoeXNpY3MuQXJjYWRlLlNwcml0ZTtcbiAgICBzY2VuZTogUGhhc2VyLlNjZW5lO1xuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBrZXk6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgICAgIHRoaXMuc3ByaXRlID0gc2NlbmUucGh5c2ljcy5hZGQuc3ByaXRlKHgsIHksICdwbGF5ZXInKTtcbiAgICAgICAgdGhpcy5zcHJpdGUuc2V0U2NhbGUoNCwgNCk7XG4gICAgICAgIHRoaXMuaGVhbHRoQmFyID0gbmV3IEhlYWx0aEJhcihzY2VuZSwgMTAwLCAyMCk7XG4gICAgfVxuICAgIGNyZWF0ZUFuaW1hdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuc2NlbmUuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAgICAgIGtleTogJ2lkbGUnLFxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLm1ha2VBbmltYXRpb24oJ3BsYXllcicsICdwbGF5ZXJfaWRsZV8wMCcsIDQpLFxuICAgICAgICAgICAgZnJhbWVSYXRlOiA4LFxuICAgICAgICAgICAgcmVwZWF0OiAtMVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zY2VuZS5hbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiAnbW92ZScsXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMubWFrZUFuaW1hdGlvbigncGxheWVyJywgJ3BsYXllcl93YWxrX2xlZnRfMDAnLCA2KSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogOCxcbiAgICAgICAgICAgIHJlcGVhdDogLTFcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1ha2VBbmltYXRpb24oa2V5OiBzdHJpbmcsIGZyYW1lTmFtZTogc3RyaW5nLCBudW1iZXJPZkZyYW1lczogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG15QXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtYmVyT2ZGcmFtZXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZm4gPSBmcmFtZU5hbWUgKyBpICsgJy5wbmcnO1xuICAgICAgICAgICAgbXlBcnJheS5wdXNoKHtcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICBmcmFtZTogZm5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG15QXJyYXk7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9