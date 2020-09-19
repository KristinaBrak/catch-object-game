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

/***/ "./src/bar.ts":
/*!********************!*\
  !*** ./src/bar.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Bar = /** @class */ (function () {
    function Bar(_a) {
        var scene = _a.scene, x = _a.x, y = _a.y, status = _a.status;
        this.bar_size = {
            width: 400,
            height: 50,
        };
        this.bar_frame_size = this.bar_size.width * 0.02;
        this.bar_display = new Phaser.GameObjects.Graphics(scene);
        this.bar_display.x = x;
        this.bar_display.y = y;
        this.status = status;
        this.draw();
        scene.add.existing(this.bar_display);
    }
    Bar.prototype.draw = function () {
        this.bar_display.clear();
        this.createEmptyStatusBar();
        this.displayStatusChange();
    };
    Bar.prototype.createEmptyStatusBar = function () {
        //  Creating black fream and white background
        this.bar_display.fillStyle(0x000000);
        this.bar_display.fillRect(this.bar_display.x, this.bar_display.y, this.bar_size.width, this.bar_size.height);
        this.bar_display.fillStyle(0xffffff);
        this.bar_display.fillRect(this.bar_display.x + this.bar_frame_size, this.bar_display.y + this.bar_frame_size, this.bar_size.width - this.bar_frame_size * 2, this.bar_size.height - this.bar_frame_size * 2);
    };
    Bar.prototype.changeStatusColor = function () {
        if (this.status.current_value <= 30) {
            this.bar_display.fillStyle(0xff0000);
        }
        else if (this.status.current_value <= 60) {
            this.bar_display.fillStyle(0xff9933);
        }
        else if (this.status.current_value <= 90) {
            this.bar_display.fillStyle(0xfff000);
        }
        else {
            this.bar_display.fillStyle(0x00ff00);
        }
    };
    Bar.prototype.displayStatusChange = function () {
        if (this.status.current_value !== 0) {
            this.changeStatusColor();
            var distance = Math.floor((this.status.current_value / this.status.max_value) * this.bar_size.width -
                this.bar_frame_size * 2);
            this.bar_display.fillRect(this.bar_display.x + this.bar_frame_size, this.bar_display.y + this.bar_frame_size, distance, this.bar_size.height - this.bar_frame_size * 2);
        }
    };
    return Bar;
}());
exports.Bar = Bar;


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
var bar_1 = __webpack_require__(/*! ./bar */ "./src/bar.ts");
var player_1 = __webpack_require__(/*! ./player */ "./src/player.ts");
var chased_object_1 = __webpack_require__(/*! ./chased-object */ "./src/chased-object.ts");
var status_1 = __webpack_require__(/*! ./status */ "./src/status.ts");
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
    GameScene.prototype.create = function (ws) {
        var _this = this;
        this.player = new player_1.default(this, 50, 50, "player");
        this.heart = new chased_object_1.default(this, this.player, "heart");
        // this.player.healthBar = new HealthBar(this, 100, 20);
        this.ws = ws;
        var statuses;
        this.ws.onmessage = function (event) {
            var stats = event.data;
            statuses = stats
                .split("\t")
                .filter(function (stat) { return stat != ""; })
                .map(function (stat) {
                var _a = stat.split(" "), name = _a[0], value = _a[1];
                return new status_1.default(name, Number(value));
            });
            console.log(statuses);
            var barY = 0;
            var bars = statuses.map(function (status) {
                var bar = new bar_1.Bar({ scene: _this, x: 0, y: barY, status: status });
                barY += 50;
                return bar;
            });
            bars.forEach(function (bar) {
                bar.draw();
            });
        };
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
        // this.player.healthBar.increase(10);
        this.heart.move();
    };
    GameScene.prototype.update = function () {
        var distMouse = Phaser.Math.Distance.Between(this.player.sprite.x, this.player.sprite.y, this.destinationToMouse.x, this.destinationToMouse.y);
        // console.log('distance:', dist);
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
var dataHandler = new data_handler_1.default();
var ws = new WebSocket("ws://localhost:32100");
ws.onopen = function () {
    ws.send("getStats");
    var game = new Phaser.Game(config);
    game.scene.start("Game", ws);
};
// ws.onmessage = function (event) {
//   console.log(event.data);
//   dataHandler.getMessage(event.data);
// };


/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player(scene, x, y, key) {
        this.scene = scene;
        // this.healthBar = new Bar(scene, 100, 20);
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
        this.healthBar.status.current_value = value;
    };
    return Player;
}());
exports.default = Player;


/***/ }),

/***/ "./src/status.ts":
/*!***********************!*\
  !*** ./src/status.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Status = /** @class */ (function () {
    function Status(name, current_value) {
        this._max_value = 100;
        this._min_value = 0;
        this._name = name;
        this._current_value = current_value;
    }
    Object.defineProperty(Status.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Status.prototype, "current_value", {
        get: function () {
            return this._current_value;
        },
        set: function (value) {
            this._current_value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Status.prototype, "max_value", {
        get: function () {
            return this._max_value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Status.prototype, "min_value", {
        get: function () {
            return this._min_value;
        },
        enumerable: true,
        configurable: true
    });
    return Status;
}());
exports.default = Status;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhc2VkLW9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS1oYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7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cUI7UUFIdkMsZUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNqQixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBR3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxzQkFBVyx3QkFBSTthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsaUNBQWE7YUFJeEI7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQzthQU5ELFVBQXlCLEtBQWE7WUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFNRCxzQkFBVyw2QkFBUzthQUFwQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDZCQUFTO2FBQXBCO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBQ0gsYUFBQztBQUFELENBQUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vbG9nXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvbG9nLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90IHN5bmMgXlxcXFwuXFxcXC9sb2ckXCI7IiwiaW1wb3J0IFN0YXR1cyBmcm9tIFwiLi9zdGF0dXNcIjtcblxuaW50ZXJmYWNlIEJhckludGVyZmFjZSB7XG4gIHNjZW5lOiBQaGFzZXIuU2NlbmU7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBzdGF0dXM6IFN0YXR1cztcbn1cblxuZXhwb3J0IGNsYXNzIEJhciB7XG4gIGJhcl9kaXNwbGF5OiBQaGFzZXIuR2FtZU9iamVjdHMuR3JhcGhpY3M7XG4gIHN0YXR1czogU3RhdHVzO1xuICBiYXJfc2l6ZSA9IHtcbiAgICB3aWR0aDogNDAwLFxuICAgIGhlaWdodDogNTAsXG4gIH07XG4gIGJhcl9mcmFtZV9zaXplID0gdGhpcy5iYXJfc2l6ZS53aWR0aCAqIDAuMDI7XG5cbiAgY29uc3RydWN0b3IoeyBzY2VuZSwgeCwgeSwgc3RhdHVzIH06IEJhckludGVyZmFjZSkge1xuICAgIHRoaXMuYmFyX2Rpc3BsYXkgPSBuZXcgUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzKHNjZW5lKTtcbiAgICB0aGlzLmJhcl9kaXNwbGF5LnggPSB4O1xuICAgIHRoaXMuYmFyX2Rpc3BsYXkueSA9IHk7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG5cbiAgICB0aGlzLmRyYXcoKTtcblxuICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzLmJhcl9kaXNwbGF5KTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3KCkge1xuICAgIHRoaXMuYmFyX2Rpc3BsYXkuY2xlYXIoKTtcbiAgICB0aGlzLmNyZWF0ZUVtcHR5U3RhdHVzQmFyKCk7XG4gICAgdGhpcy5kaXNwbGF5U3RhdHVzQ2hhbmdlKCk7XG4gIH1cbiAgY3JlYXRlRW1wdHlTdGF0dXNCYXIoKSB7XG4gICAgLy8gIENyZWF0aW5nIGJsYWNrIGZyZWFtIGFuZCB3aGl0ZSBiYWNrZ3JvdW5kXG4gICAgdGhpcy5iYXJfZGlzcGxheS5maWxsU3R5bGUoMHgwMDAwMDApO1xuICAgIHRoaXMuYmFyX2Rpc3BsYXkuZmlsbFJlY3QoXG4gICAgICB0aGlzLmJhcl9kaXNwbGF5LngsXG4gICAgICB0aGlzLmJhcl9kaXNwbGF5LnksXG4gICAgICB0aGlzLmJhcl9zaXplLndpZHRoLFxuICAgICAgdGhpcy5iYXJfc2l6ZS5oZWlnaHRcbiAgICApO1xuXG4gICAgdGhpcy5iYXJfZGlzcGxheS5maWxsU3R5bGUoMHhmZmZmZmYpO1xuICAgIHRoaXMuYmFyX2Rpc3BsYXkuZmlsbFJlY3QoXG4gICAgICB0aGlzLmJhcl9kaXNwbGF5LnggKyB0aGlzLmJhcl9mcmFtZV9zaXplLFxuICAgICAgdGhpcy5iYXJfZGlzcGxheS55ICsgdGhpcy5iYXJfZnJhbWVfc2l6ZSxcbiAgICAgIHRoaXMuYmFyX3NpemUud2lkdGggLSB0aGlzLmJhcl9mcmFtZV9zaXplICogMixcbiAgICAgIHRoaXMuYmFyX3NpemUuaGVpZ2h0IC0gdGhpcy5iYXJfZnJhbWVfc2l6ZSAqIDJcbiAgICApO1xuICB9XG4gIGNoYW5nZVN0YXR1c0NvbG9yKCkge1xuICAgIGlmICh0aGlzLnN0YXR1cy5jdXJyZW50X3ZhbHVlIDw9IDMwKSB7XG4gICAgICB0aGlzLmJhcl9kaXNwbGF5LmZpbGxTdHlsZSgweGZmMDAwMCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXR1cy5jdXJyZW50X3ZhbHVlIDw9IDYwKSB7XG4gICAgICB0aGlzLmJhcl9kaXNwbGF5LmZpbGxTdHlsZSgweGZmOTkzMyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXR1cy5jdXJyZW50X3ZhbHVlIDw9IDkwKSB7XG4gICAgICB0aGlzLmJhcl9kaXNwbGF5LmZpbGxTdHlsZSgweGZmZjAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmFyX2Rpc3BsYXkuZmlsbFN0eWxlKDB4MDBmZjAwKTtcbiAgICB9XG4gIH1cbiAgZGlzcGxheVN0YXR1c0NoYW5nZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0dXMuY3VycmVudF92YWx1ZSAhPT0gMCkge1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0dXNDb2xvcigpO1xuICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5mbG9vcihcbiAgICAgICAgKHRoaXMuc3RhdHVzLmN1cnJlbnRfdmFsdWUgLyB0aGlzLnN0YXR1cy5tYXhfdmFsdWUpICogdGhpcy5iYXJfc2l6ZS53aWR0aCAtXG4gICAgICAgICAgdGhpcy5iYXJfZnJhbWVfc2l6ZSAqIDJcbiAgICAgICk7XG4gICAgICB0aGlzLmJhcl9kaXNwbGF5LmZpbGxSZWN0KFxuICAgICAgICB0aGlzLmJhcl9kaXNwbGF5LnggKyB0aGlzLmJhcl9mcmFtZV9zaXplLFxuICAgICAgICB0aGlzLmJhcl9kaXNwbGF5LnkgKyB0aGlzLmJhcl9mcmFtZV9zaXplLFxuICAgICAgICBkaXN0YW5jZSxcbiAgICAgICAgdGhpcy5iYXJfc2l6ZS5oZWlnaHQgLSB0aGlzLmJhcl9mcmFtZV9zaXplICogMlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBoeXNpY3MgfSBmcm9tIFwicGhhc2VyXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXNlZE9iamVjdCB7XG5cbiAgICBzcHJpdGU6IFBoeXNpY3MuQXJjYWRlLlNwcml0ZTtcbiAgICBzY2VuZTogUGhhc2VyLlNjZW5lO1xuICAgIHBsYXllcjogUGxheWVyO1xuICAgIGV4aXN0ID0gMDtcblxuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgcGxheWVyOiBQbGF5ZXIsIGtleTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICAgIGNvbnN0IHggPSBNYXRoLnJhbmRvbSgpICogdGhpcy5zY2VuZS5jYW1lcmFzLm1haW4uY2VudGVyWCAqIDI7XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLnJhbmRvbSgpICogdGhpcy5zY2VuZS5jYW1lcmFzLm1haW4uY2VudGVyWSAqIDI7XG4gICAgICAgIHRoaXMuZXhpc3QgKz0gMTtcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBzY2VuZS5waHlzaWNzLmFkZC5zcHJpdGUoeCwgeSwgJ2hlYXJ0Jyk7XG5cbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB3aGlsZSAoUGhhc2VyLk1hdGguRGlzdGFuY2UuQmV0d2Vlbih0aGlzLnNwcml0ZS54LCB0aGlzLnNwcml0ZS55LCB0aGlzLnBsYXllci5zcHJpdGUueCwgdGhpcy5wbGF5ZXIuc3ByaXRlLnkpIDwgMTAwKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuc2NlbmUuY2FtZXJhcy5tYWluLmNlbnRlclggKiAyO1xuICAgICAgICAgICAgY29uc3QgeSA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLnNjZW5lLmNhbWVyYXMubWFpbi5jZW50ZXJZICogMjtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnggPSB4O1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUueSA9IHk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YUhhbmRsZXIge1xuICBsaXN0ID0gW1wiZ2V0U3RhdHNcIiwgXCJsb2xcIiwgXCJtYXVcIl07XG4gIHN0YXR1c2VzID0gW1wiZW5lcmd5XCIsIFwibW9vZFwiLCBcImhlYWx0aFwiLCBcInNsZWVwXCJdO1xuICBwbGF5ZXI6IFBsYXllcjtcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge31cblxuICAvLyBjb25zdHJ1Y3RvcihwbGF5ZXI6IFBsYXllcikge1xuICAvLyAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAvLyB9XG5cbiAgcHVibGljIGdldE1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coXCJnb3RcIiwgbWVzc2FnZSk7XG4gICAgdGhpcy5jaGVja01lc3NhZ2UobWVzc2FnZSk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0QXJyYXkobWVzc2FnZSk7XG4gICAgaWYgKGRhdGEubGVuZ3RoID09IDEpIHtcbiAgICAgIGxldCBmb3VuZCA9IHRoaXMubGlzdC5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50ID09IG1lc3NhZ2UpO1xuICAgICAgY29uc29sZS5sb2coXCJmb3VuZFwiLCBmb3VuZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzdGF0dXNIZWFsdGg7XG4gICAgICBkYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgc3RhdHVzSGVhbHRoID0gdGhpcy5zdGF0dXNlcy5maW5kKFxuICAgICAgICAgIChzdGF0dXMpID0+IHN0YXR1cy50b0xvd2VyQ2FzZSA9PSBlbGVtZW50LnRvTG93ZXJDYXNlXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc29sZS5sb2coc3RhdHVzSGVhbHRoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuY2hhbmdlQmFyVmFsdWUoMCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEFycmF5KG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGxldCBkYXRhOiBzdHJpbmdbXTtcbiAgICBkYXRhID0gbWVzc2FnZS5zcGxpdChuZXcgUmVnRXhwKFwiW1xcblxcdCBdXCIpKTtcbiAgICBkYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQudHJpbSgpO1xuICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn1cbiIsImltcG9ydCB7IEJhciB9IGZyb20gXCIuL2JhclwiO1xuaW1wb3J0IHsgUGh5c2ljcywgU2NlbmUgfSBmcm9tIFwicGhhc2VyXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IENoYXNlZE9iamVjdCBmcm9tIFwiLi9jaGFzZWQtb2JqZWN0XCI7XG5pbXBvcnQgRGF0YUhhbmRsZXIgZnJvbSBcIi4vZGF0YS1oYW5kbGVyXCI7XG5pbXBvcnQgU3RhdHVzIGZyb20gXCIuL3N0YXR1c1wiO1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogXCJHYW1lXCIsXG59O1xuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIHBsYXllcjogUGxheWVyO1xuICAvLyBoZWFydDogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZTtcbiAgaGVhcnQ6IENoYXNlZE9iamVjdDtcbiAgdmVsb2NpdHkgPSA1MDA7XG4gIGRhdGFIYW5kbGVyOiBEYXRhSGFuZGxlcjtcbiAgd3M6IFdlYlNvY2tldDtcblxuICBkZXN0aW5hdGlvblRvTW91c2UgPSB7IHg6IDAsIHk6IDAgfTtcbiAgZGVzdGluYXRpb25Ub0hlYXJ0ID0geyB4OiAwLCB5OiAwIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICB9XG5cbiAgcHVibGljIHByZWxvYWQoKSB7XG4gICAgLy8gdGhpcy5sb2FkLmltYWdlKCdwbGF5ZXInLCAnYXNzZXRzL3BsYXllci9pZGxlL3BsYXllci5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoXCJoZWFydFwiLCBcImFzc2V0cy9oZWFydC9oZWFydF9mdWxsLnBuZ1wiKTtcbiAgICB0aGlzLmxvYWQuYXRsYXMoXG4gICAgICBcInBsYXllclwiLFxuICAgICAgXCJhc3NldHMvcGxheWVyL3BsYXllci5wbmdcIixcbiAgICAgIFwiYXNzZXRzL3BsYXllci9wbGF5ZXIuanNvblwiXG4gICAgKTtcbiAgICB0aGlzLmxvYWQuYXRsYXMoXCJyYXRcIiwgXCJhc3NldHMvZGVhZFJhdC9yYXQucG5nXCIsIFwiYXNzZXRzL2RlYWRSYXQvcmF0Lmpzb25cIik7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlKHdzOiBXZWJTb2NrZXQpIHtcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcywgNTAsIDUwLCBcInBsYXllclwiKTtcbiAgICB0aGlzLmhlYXJ0ID0gbmV3IENoYXNlZE9iamVjdCh0aGlzLCB0aGlzLnBsYXllciwgXCJoZWFydFwiKTtcbiAgICAvLyB0aGlzLnBsYXllci5oZWFsdGhCYXIgPSBuZXcgSGVhbHRoQmFyKHRoaXMsIDEwMCwgMjApO1xuICAgIHRoaXMud3MgPSB3cztcbiAgICBsZXQgc3RhdHVzZXM6IFN0YXR1c1tdO1xuICAgIHRoaXMud3Mub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0czogc3RyaW5nID0gZXZlbnQuZGF0YTtcbiAgICAgIHN0YXR1c2VzID0gc3RhdHNcbiAgICAgICAgLnNwbGl0KFwiXFx0XCIpXG4gICAgICAgIC5maWx0ZXIoKHN0YXQpID0+IHN0YXQgIT0gXCJcIilcbiAgICAgICAgLm1hcCgoc3RhdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IFtuYW1lLCB2YWx1ZV0gPSBzdGF0LnNwbGl0KFwiIFwiKTtcbiAgICAgICAgICByZXR1cm4gbmV3IFN0YXR1cyhuYW1lLCBOdW1iZXIodmFsdWUpKTtcbiAgICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhzdGF0dXNlcyk7XG4gICAgICBsZXQgYmFyWSA9IDA7XG4gICAgICBsZXQgYmFycyA9IHN0YXR1c2VzLm1hcCgoc3RhdHVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGJhciA9IG5ldyBCYXIoeyBzY2VuZTogdGhpcywgeDogMCwgeTogYmFyWSwgc3RhdHVzIH0pO1xuICAgICAgICBiYXJZICs9IDUwO1xuICAgICAgICByZXR1cm4gYmFyO1xuICAgICAgfSk7XG4gICAgICBiYXJzLmZvckVhY2goKGJhcikgPT4ge1xuICAgICAgICBiYXIuZHJhdygpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIHRoaXMuZGF0YUhhbmRsZXIgPSBuZXcgRGF0YUhhbmRsZXIodGhpcy5wbGF5ZXIpO1xuXG4gICAgZnVuY3Rpb24gb25DbGljayhwb2ludGVyOiBQaGFzZXIuSW5wdXQuUG9pbnRlciwgc2NlbmU6IEdhbWVTY2VuZSkge1xuICAgICAgc2NlbmUuZGVzdGluYXRpb25Ub01vdXNlLnggPSBwb2ludGVyLng7XG4gICAgICBzY2VuZS5kZXN0aW5hdGlvblRvTW91c2UueSA9IHBvaW50ZXIueTtcblxuICAgICAgLy8gc2NlbmUuY2hhbmdlTW92ZUFuaW1hdGlvbih0aGlzLnBsYXllciwgc2NlbmUuZGVzdGluYXRpb25Ub01vdXNlLngpO1xuICAgICAgaWYgKHNjZW5lLmRlc3RpbmF0aW9uVG9Nb3VzZS54IC0gc2NlbmUucGxheWVyLnNwcml0ZS5ib2R5LnggPCAwKSB7XG4gICAgICAgIHNjZW5lLnBsYXllci5zcHJpdGUucGxheShcIm1vdmVcIikuc2V0RmxpcFgoZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NlbmUucGxheWVyLnNwcml0ZS5wbGF5KFwibW92ZVwiKS5zZXRGbGlwWCh0cnVlKTtcbiAgICAgIH1cbiAgICAgIHNjZW5lLnBoeXNpY3MubW92ZVRvKFxuICAgICAgICBzY2VuZS5wbGF5ZXIuc3ByaXRlLFxuICAgICAgICBwb2ludGVyLngsXG4gICAgICAgIHBvaW50ZXIueSxcbiAgICAgICAgc2NlbmUudmVsb2NpdHlcbiAgICAgICk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImluaXRpYWw6IFwiLCBzY2VuZS5kZXN0aW5hdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dC5vbihcInBvaW50ZXJkb3duXCIsIChwb2ludGVyOiBQaGFzZXIuSW5wdXQuUG9pbnRlcikgPT5cbiAgICAgIG9uQ2xpY2socG9pbnRlciwgdGhpcylcbiAgICApO1xuXG4gICAgdGhpcy5wbGF5ZXIuY3JlYXRlQW5pbWF0aW9ucygpO1xuXG4gICAgdGhpcy5waHlzaWNzLmFkZC5vdmVybGFwKFxuICAgICAgdGhpcy5wbGF5ZXIuc3ByaXRlLFxuICAgICAgdGhpcy5oZWFydC5zcHJpdGUsXG4gICAgICB0aGlzLnBsYXllckNvbGxpZGVIZWFydCxcbiAgICAgIG51bGwsXG4gICAgICB0aGlzXG4gICAgKTtcbiAgfVxuXG4gIGNoYW5nZU1vdmVBbmltYXRpb24ocGxheWVyOiBQaGFzZXIuU2NlbmUsIGRlc3RpbmF0aW9uWDogbnVtYmVyKSB7XG4gICAgaWYgKGRlc3RpbmF0aW9uWCAtIHRoaXMucGxheWVyLnNwcml0ZS5ib2R5LnggPCAwKSB7XG4gICAgICB0aGlzLnBsYXllci5zcHJpdGUucGxheShcIm1vdmVcIikuc2V0RmxpcFgoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBsYXllci5zcHJpdGUucGxheShcIm1vdmVcIikuc2V0RmxpcFgodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgbWFrZUFuaW0oa2V5OiBzdHJpbmcsIGZyYW1lTmFtZTogc3RyaW5nLCBudW1iZXJPZkZyYW1lczogbnVtYmVyKSB7XG4gICAgbGV0IG15QXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBudW1iZXJPZkZyYW1lczsgaSsrKSB7XG4gICAgICBsZXQgZm4gPSBmcmFtZU5hbWUgKyBpICsgXCIucG5nXCI7XG4gICAgICBteUFycmF5LnB1c2goe1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgZnJhbWU6IGZuLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBteUFycmF5O1xuICB9XG5cbiAgcGxheWVyQ29sbGlkZUhlYXJ0KCkge1xuICAgIC8vIHRoaXMucGxheWVyLmhlYWx0aEJhci5pbmNyZWFzZSgxMCk7XG4gICAgdGhpcy5oZWFydC5tb3ZlKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKCkge1xuICAgIGNvbnN0IGRpc3RNb3VzZSA9IFBoYXNlci5NYXRoLkRpc3RhbmNlLkJldHdlZW4oXG4gICAgICB0aGlzLnBsYXllci5zcHJpdGUueCxcbiAgICAgIHRoaXMucGxheWVyLnNwcml0ZS55LFxuICAgICAgdGhpcy5kZXN0aW5hdGlvblRvTW91c2UueCxcbiAgICAgIHRoaXMuZGVzdGluYXRpb25Ub01vdXNlLnlcbiAgICApO1xuICAgIC8vIGNvbnNvbGUubG9nKCdkaXN0YW5jZTonLCBkaXN0KTtcblxuICAgIGlmIChkaXN0TW91c2UgPD0gMTApIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGVzdGluYXRpb24ueCAtIHRoaXMucGxheWVyLmJvZHkueCwgdGhpcy5kZXN0aW5hdGlvbi55IC0gdGhpcy5wbGF5ZXIuYm9keS55KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHsgcGxheWVyOiB7IHg6IHRoaXMucGxheWVyLmJvZHkueCwgeTogdGhpcy5wbGF5ZXIuYm9keS55IH0gfSk7XG4gICAgICB0aGlzLnBsYXllci5zcHJpdGUuYm9keS52ZWxvY2l0eS5zZXRUbygwLCAwKTtcbiAgICAgIHRoaXMucGxheWVyLnNwcml0ZS5wbGF5KFwiaWRsZVwiKTtcbiAgICAgIHRoaXMuZGVzdGluYXRpb25Ub01vdXNlLnggPSAwO1xuICAgICAgdGhpcy5kZXN0aW5hdGlvblRvTW91c2UueSA9IDA7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgXCJwaGFzZXJcIjtcbi8vIGltcG9ydCBEZW1vIGZyb20gJy4vZGVtbyc7XG5pbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tIFwiLi9nYW1lLXNjZW5lXCI7XG5pbXBvcnQgRGF0YUhhbmRsZXIgZnJvbSBcIi4vZGF0YS1oYW5kbGVyXCI7XG5cbmNvbnN0IGNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcbiAgdHlwZTogUGhhc2VyLkFVVE8sXG4gIHNjYWxlOiB7XG4gICAgd2lkdGg6IDgwMCxcbiAgICBoZWlnaHQ6IDYwMCxcbiAgfSxcbiAgLy8gcGl4ZWxBcnQ6IHRydWUsLy9oZXJlXG5cbiAgcGh5c2ljczoge1xuICAgIGRlZmF1bHQ6IFwiYXJjYWRlXCIsXG4gICAgYXJjYWRlOiB7XG4gICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgcmVuZGVyOiB7XG4gICAgcGl4ZWxBcnQ6IHRydWUsXG4gIH0sXG4gIHBhcmVudDogXCJnYW1lXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCIjNzY1NDc4XCIsXG4gIC8vIGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnLFxuICAvLyBzY2VuZTogRGVtb1xuICBzY2VuZTogR2FtZVNjZW5lLFxufTtcblxuY29uc3QgZGF0YUhhbmRsZXIgPSBuZXcgRGF0YUhhbmRsZXIoKTtcbmNvbnN0IHdzID0gbmV3IFdlYlNvY2tldChcIndzOi8vbG9jYWxob3N0OjMyMTAwXCIpO1xud3Mub25vcGVuID0gZnVuY3Rpb24gKCkge1xuICB3cy5zZW5kKFwiZ2V0U3RhdHNcIik7XG4gIGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoY29uZmlnKTtcbiAgZ2FtZS5zY2VuZS5zdGFydChcIkdhbWVcIiwgd3MpO1xufTtcblxuLy8gd3Mub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4vLyAgIGNvbnNvbGUubG9nKGV2ZW50LmRhdGEpO1xuLy8gICBkYXRhSGFuZGxlci5nZXRNZXNzYWdlKGV2ZW50LmRhdGEpO1xuLy8gfTtcbiIsImltcG9ydCB7IEJhciB9IGZyb20gXCIuL2JhclwiO1xuaW1wb3J0IHsgUGh5c2ljcyB9IGZyb20gXCJwaGFzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgaGVhbHRoQmFyOiBCYXI7XG4gIG1vb2RCYXI6IEJhcjtcbiAgc2xlZXBCYXI6QmFyO1xuICBlbmVyZ3lCYXI6QmFyO1xuICBcbiAgc3ByaXRlOiBQaHlzaWNzLkFyY2FkZS5TcHJpdGU7XG4gIHNjZW5lOiBQaGFzZXIuU2NlbmU7XG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBrZXk6IHN0cmluZykge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICAvLyB0aGlzLmhlYWx0aEJhciA9IG5ldyBCYXIoc2NlbmUsIDEwMCwgMjApO1xuICAgIHRoaXMuc3ByaXRlID0gc2NlbmUucGh5c2ljcy5hZGQuc3ByaXRlKHgsIHksIFwicGxheWVyXCIpO1xuICAgIHRoaXMuc3ByaXRlLnNldFNjYWxlKDQsIDQpO1xuICB9XG5cbiAgY3JlYXRlQW5pbWF0aW9ucygpIHtcbiAgICB0aGlzLnNjZW5lLmFuaW1zLmNyZWF0ZSh7XG4gICAgICBrZXk6IFwiaWRsZVwiLFxuICAgICAgZnJhbWVzOiB0aGlzLm1ha2VBbmltYXRpb24oXCJwbGF5ZXJcIiwgXCJwbGF5ZXJfaWRsZV8wMFwiLCA0KSxcbiAgICAgIGZyYW1lUmF0ZTogOCxcbiAgICAgIHJlcGVhdDogLTEsXG4gICAgfSk7XG4gICAgdGhpcy5zY2VuZS5hbmltcy5jcmVhdGUoe1xuICAgICAga2V5OiBcIm1vdmVcIixcbiAgICAgIGZyYW1lczogdGhpcy5tYWtlQW5pbWF0aW9uKFwicGxheWVyXCIsIFwicGxheWVyX3dhbGtfbGVmdF8wMFwiLCA2KSxcbiAgICAgIGZyYW1lUmF0ZTogOCxcbiAgICAgIHJlcGVhdDogLTEsXG4gICAgfSk7XG4gIH1cbiAgbWFrZUFuaW1hdGlvbihrZXk6IHN0cmluZywgZnJhbWVOYW1lOiBzdHJpbmcsIG51bWJlck9mRnJhbWVzOiBudW1iZXIpIHtcbiAgICBjb25zdCBteUFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtYmVyT2ZGcmFtZXM7IGkrKykge1xuICAgICAgY29uc3QgZm4gPSBmcmFtZU5hbWUgKyBpICsgXCIucG5nXCI7XG4gICAgICBteUFycmF5LnB1c2goe1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgZnJhbWU6IGZuLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBteUFycmF5O1xuICB9XG4gIGNoYW5nZUJhclZhbHVlKHZhbHVlOiBudW1iZXIpe1xuICAgICAgdGhpcy5oZWFsdGhCYXIuc3RhdHVzLmN1cnJlbnRfdmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdHVzIHtcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9jdXJyZW50X3ZhbHVlOiBudW1iZXI7XG4gIHByaXZhdGUgX21heF92YWx1ZSA9IDEwMDtcbiAgcHJpdmF0ZSBfbWluX3ZhbHVlID0gMDtcblxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGN1cnJlbnRfdmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuX2N1cnJlbnRfdmFsdWUgPSBjdXJyZW50X3ZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBwdWJsaWMgc2V0IGN1cnJlbnRfdmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2N1cnJlbnRfdmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY3VycmVudF92YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudF92YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWF4X3ZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhfdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1pbl92YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWluX3ZhbHVlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9