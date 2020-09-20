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
            width: 200,
            height: 25,
        };
        this.bar_frame_size = this.bar_size.width * 0.02;
        this.bar_display = new Phaser.GameObjects.Graphics(scene);
        this.bar_display.x = x;
        this.bar_display.y = y;
        this._status = status;
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
        if (this._status.current_value <= 30) {
            this.bar_display.fillStyle(0xff0000);
        }
        else if (this._status.current_value <= 60) {
            this.bar_display.fillStyle(0xff9933);
        }
        else if (this._status.current_value <= 90) {
            this.bar_display.fillStyle(0xfff000);
        }
        else {
            this.bar_display.fillStyle(0x00ff00);
        }
    };
    Bar.prototype.displayStatusChange = function () {
        if (this._status.current_value !== 0) {
            this.changeStatusColor();
            var distance = Math.floor((this._status.current_value / this._status.max_value) *
                this.bar_size.width -
                this.bar_frame_size * 2);
            this.bar_display.fillRect(this.bar_display.x + this.bar_frame_size, this.bar_display.y + this.bar_frame_size, distance, this.bar_size.height - this.bar_frame_size * 2);
        }
    };
    Object.defineProperty(Bar.prototype, "status", {
        set: function (status) {
            this._status = status;
            this.draw();
        },
        enumerable: true,
        configurable: true
    });
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

/***/ "./src/data-handler/data-handler.ts":
/*!******************************************!*\
  !*** ./src/data-handler/data-handler.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var status_1 = __webpack_require__(/*! ../status */ "./src/status.ts");
var DataHandler = /** @class */ (function () {
    function DataHandler(player) {
        this.actions = ["statuses"];
        this.player = player;
    }
    DataHandler.prototype.getMessage = function (message) {
        var json = JSON.parse(message);
        console.log("got", json);
        var found = this.actions.find(function (action) { return action === json.name; });
        switch (found) {
            case "statuses":
                var statusesData = json;
                console.log("statusesData", statusesData);
                this.player.statuses = statusesData.statuses.map(function (_a) {
                    var name = _a.name, value = _a.value;
                    console.log(name, value);
                    return new status_1.default(name, value);
                });
        }
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
var data_handler_1 = __webpack_require__(/*! ./data-handler/data-handler */ "./src/data-handler/data-handler.ts");
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
        var dataHandler = new data_handler_1.default(this.player);
        this.ws.onmessage = function (event) {
            dataHandler.getMessage(event.data);
            // const stats: string = event.data;
            // statuses = stats
            //   .split("\t")
            //   .filter((stat) => stat != "")
            //   .map((stat) => {
            //     const [name, value] = stat.split(" ");
            //     return new Status(name, Number(value));
            //   });
            // console.log(statuses);
            // let barY = 0;
            // let bars = statuses.map((status) => {
            //   const bar = new Bar({ scene: this, x: 0, y: barY, status });
            //   barY += 50;
            //   return bar;
            // });
            // bars.forEach((bar) => {
            //   bar.draw();
            // });
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
var game_scene_1 = __webpack_require__(/*! ./game-scene */ "./src/game-scene.ts");
var config = {
    type: Phaser.AUTO,
    scale: {
        width: 800,
        height: 600,
    },
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
    scene: game_scene_1.GameScene,
};
var ws = new WebSocket("ws://localhost:32100");
ws.onopen = function () {
    ws.send("getStats");
    var game = new Phaser.Game(config);
    game.scene.start("Game", ws);
};


/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bar_1 = __webpack_require__(/*! ./bar */ "./src/bar.ts");
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
    Object.defineProperty(Player.prototype, "statuses", {
        set: function (statuses) {
            var _this = this;
            if (!this._statuses) {
                var y_1 = 10;
                this._statuses = statuses.map(function (status) {
                    var bar = new bar_1.Bar({ scene: _this.scene, x: 10, y: y_1, status: status });
                    y_1 += 15;
                    return bar;
                });
            }
            else {
                statuses.forEach(function (status, index) {
                    _this._statuses[index].status = status;
                });
            }
        },
        enumerable: true,
        configurable: true
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhc2VkLW9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS1oYW5kbGVyL2RhdGEtaGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0dXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNB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O1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsNkJBQVM7YUFBcEI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFDSCxhQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9sb2dcIjogXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9sb2cuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3Qgc3luYyBeXFxcXC5cXFxcL2xvZyRcIjsiLCJpbXBvcnQgU3RhdHVzIGZyb20gXCIuL3N0YXR1c1wiO1xuXG5pbnRlcmZhY2UgQmFySW50ZXJmYWNlIHtcbiAgc2NlbmU6IFBoYXNlci5TY2VuZTtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHN0YXR1czogU3RhdHVzO1xufVxuXG5leHBvcnQgY2xhc3MgQmFyIHtcbiAgYmFyX2Rpc3BsYXk6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcztcbiAgcHJpdmF0ZSBfc3RhdHVzOiBTdGF0dXM7XG4gIGJhcl9zaXplID0ge1xuICAgIHdpZHRoOiAyMDAsXG4gICAgaGVpZ2h0OiAyNSxcbiAgfTtcbiAgYmFyX2ZyYW1lX3NpemUgPSB0aGlzLmJhcl9zaXplLndpZHRoICogMC4wMjtcblxuICBjb25zdHJ1Y3Rvcih7IHNjZW5lLCB4LCB5LCBzdGF0dXMgfTogQmFySW50ZXJmYWNlKSB7XG4gICAgdGhpcy5iYXJfZGlzcGxheSA9IG5ldyBQaGFzZXIuR2FtZU9iamVjdHMuR3JhcGhpY3Moc2NlbmUpO1xuICAgIHRoaXMuYmFyX2Rpc3BsYXkueCA9IHg7XG4gICAgdGhpcy5iYXJfZGlzcGxheS55ID0geTtcbiAgICB0aGlzLl9zdGF0dXMgPSBzdGF0dXM7XG5cbiAgICB0aGlzLmRyYXcoKTtcblxuICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzLmJhcl9kaXNwbGF5KTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3KCkge1xuICAgIHRoaXMuYmFyX2Rpc3BsYXkuY2xlYXIoKTtcbiAgICB0aGlzLmNyZWF0ZUVtcHR5U3RhdHVzQmFyKCk7XG4gICAgdGhpcy5kaXNwbGF5U3RhdHVzQ2hhbmdlKCk7XG4gIH1cbiAgY3JlYXRlRW1wdHlTdGF0dXNCYXIoKSB7XG4gICAgLy8gIENyZWF0aW5nIGJsYWNrIGZyZWFtIGFuZCB3aGl0ZSBiYWNrZ3JvdW5kXG4gICAgdGhpcy5iYXJfZGlzcGxheS5maWxsU3R5bGUoMHgwMDAwMDApO1xuICAgIHRoaXMuYmFyX2Rpc3BsYXkuZmlsbFJlY3QoXG4gICAgICB0aGlzLmJhcl9kaXNwbGF5LngsXG4gICAgICB0aGlzLmJhcl9kaXNwbGF5LnksXG4gICAgICB0aGlzLmJhcl9zaXplLndpZHRoLFxuICAgICAgdGhpcy5iYXJfc2l6ZS5oZWlnaHRcbiAgICApO1xuXG4gICAgdGhpcy5iYXJfZGlzcGxheS5maWxsU3R5bGUoMHhmZmZmZmYpO1xuICAgIHRoaXMuYmFyX2Rpc3BsYXkuZmlsbFJlY3QoXG4gICAgICB0aGlzLmJhcl9kaXNwbGF5LnggKyB0aGlzLmJhcl9mcmFtZV9zaXplLFxuICAgICAgdGhpcy5iYXJfZGlzcGxheS55ICsgdGhpcy5iYXJfZnJhbWVfc2l6ZSxcbiAgICAgIHRoaXMuYmFyX3NpemUud2lkdGggLSB0aGlzLmJhcl9mcmFtZV9zaXplICogMixcbiAgICAgIHRoaXMuYmFyX3NpemUuaGVpZ2h0IC0gdGhpcy5iYXJfZnJhbWVfc2l6ZSAqIDJcbiAgICApO1xuICB9XG4gIGNoYW5nZVN0YXR1c0NvbG9yKCkge1xuICAgIGlmICh0aGlzLl9zdGF0dXMuY3VycmVudF92YWx1ZSA8PSAzMCkge1xuICAgICAgdGhpcy5iYXJfZGlzcGxheS5maWxsU3R5bGUoMHhmZjAwMDApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdHVzLmN1cnJlbnRfdmFsdWUgPD0gNjApIHtcbiAgICAgIHRoaXMuYmFyX2Rpc3BsYXkuZmlsbFN0eWxlKDB4ZmY5OTMzKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXR1cy5jdXJyZW50X3ZhbHVlIDw9IDkwKSB7XG4gICAgICB0aGlzLmJhcl9kaXNwbGF5LmZpbGxTdHlsZSgweGZmZjAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmFyX2Rpc3BsYXkuZmlsbFN0eWxlKDB4MDBmZjAwKTtcbiAgICB9XG4gIH1cbiAgZGlzcGxheVN0YXR1c0NoYW5nZSgpIHtcbiAgICBpZiAodGhpcy5fc3RhdHVzLmN1cnJlbnRfdmFsdWUgIT09IDApIHtcbiAgICAgIHRoaXMuY2hhbmdlU3RhdHVzQ29sb3IoKTtcbiAgICAgIGxldCBkaXN0YW5jZSA9IE1hdGguZmxvb3IoXG4gICAgICAgICh0aGlzLl9zdGF0dXMuY3VycmVudF92YWx1ZSAvIHRoaXMuX3N0YXR1cy5tYXhfdmFsdWUpICpcbiAgICAgICAgICB0aGlzLmJhcl9zaXplLndpZHRoIC1cbiAgICAgICAgICB0aGlzLmJhcl9mcmFtZV9zaXplICogMlxuICAgICAgKTtcbiAgICAgIHRoaXMuYmFyX2Rpc3BsYXkuZmlsbFJlY3QoXG4gICAgICAgIHRoaXMuYmFyX2Rpc3BsYXkueCArIHRoaXMuYmFyX2ZyYW1lX3NpemUsXG4gICAgICAgIHRoaXMuYmFyX2Rpc3BsYXkueSArIHRoaXMuYmFyX2ZyYW1lX3NpemUsXG4gICAgICAgIGRpc3RhbmNlLFxuICAgICAgICB0aGlzLmJhcl9zaXplLmhlaWdodCAtIHRoaXMuYmFyX2ZyYW1lX3NpemUgKiAyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXQgc3RhdHVzKHN0YXR1czogU3RhdHVzKSB7XG4gICAgdGhpcy5fc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMuZHJhdygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaHlzaWNzIH0gZnJvbSBcInBoYXNlclwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFzZWRPYmplY3Qge1xuXG4gICAgc3ByaXRlOiBQaHlzaWNzLkFyY2FkZS5TcHJpdGU7XG4gICAgc2NlbmU6IFBoYXNlci5TY2VuZTtcbiAgICBwbGF5ZXI6IFBsYXllcjtcbiAgICBleGlzdCA9IDA7XG5cblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHBsYXllcjogUGxheWVyLCBrZXk6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuc2NlbmUuY2FtZXJhcy5tYWluLmNlbnRlclggKiAyO1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuc2NlbmUuY2FtZXJhcy5tYWluLmNlbnRlclkgKiAyO1xuICAgICAgICB0aGlzLmV4aXN0ICs9IDE7XG4gICAgICAgIHRoaXMuc3ByaXRlID0gc2NlbmUucGh5c2ljcy5hZGQuc3ByaXRlKHgsIHksICdoZWFydCcpO1xuXG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgd2hpbGUgKFBoYXNlci5NYXRoLkRpc3RhbmNlLkJldHdlZW4odGhpcy5zcHJpdGUueCwgdGhpcy5zcHJpdGUueSwgdGhpcy5wbGF5ZXIuc3ByaXRlLngsIHRoaXMucGxheWVyLnNwcml0ZS55KSA8IDEwMCkge1xuICAgICAgICAgICAgY29uc3QgeCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLnNjZW5lLmNhbWVyYXMubWFpbi5jZW50ZXJYICogMjtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLnJhbmRvbSgpICogdGhpcy5zY2VuZS5jYW1lcmFzLm1haW4uY2VudGVyWSAqIDI7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS54ID0geDtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnkgPSB5O1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL3BsYXllclwiO1xuaW1wb3J0IFN0YXR1cyBmcm9tIFwiLi4vc3RhdHVzXCI7XG5pbXBvcnQgeyBTdGF0dXNlc0Zvcm1hdCB9IGZyb20gXCIuL2RhdGEtaGFuZGxlci50eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhSGFuZGxlciB7XG4gIHBsYXllcjogUGxheWVyO1xuICBhY3Rpb25zID0gW1wic3RhdHVzZXNcIl07XG5cbiAgY29uc3RydWN0b3IocGxheWVyOiBQbGF5ZXIpIHtcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xuICAgIGNvbnNvbGUubG9nKFwiZ290XCIsIGpzb24pO1xuICAgIGNvbnN0IGZvdW5kID0gdGhpcy5hY3Rpb25zLmZpbmQoKGFjdGlvbikgPT4gYWN0aW9uID09PSBqc29uLm5hbWUpO1xuICAgIHN3aXRjaChmb3VuZCl7XG4gICAgICBjYXNlIFwic3RhdHVzZXNcIjpcbiAgICAgICAgY29uc3Qgc3RhdHVzZXNEYXRhIDogU3RhdHVzZXNGb3JtYXQgPSBqc29uO1xuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXR1c2VzRGF0YVwiLHN0YXR1c2VzRGF0YSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBsYXllci5zdGF0dXNlcyA9IHN0YXR1c2VzRGF0YS5zdGF0dXNlcy5tYXAoKHtuYW1lLHZhbHVlfSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gbmV3IFN0YXR1cyhuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQmFyIH0gZnJvbSBcIi4vYmFyXCI7XG5pbXBvcnQgeyBQaHlzaWNzLCBTY2VuZSB9IGZyb20gXCJwaGFzZXJcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgQ2hhc2VkT2JqZWN0IGZyb20gXCIuL2NoYXNlZC1vYmplY3RcIjtcbmltcG9ydCBEYXRhSGFuZGxlciBmcm9tIFwiLi9kYXRhLWhhbmRsZXIvZGF0YS1oYW5kbGVyXCI7XG5pbXBvcnQgU3RhdHVzIGZyb20gXCIuL3N0YXR1c1wiO1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogXCJHYW1lXCIsXG59O1xuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIHBsYXllcjogUGxheWVyO1xuICAvLyBoZWFydDogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZTtcbiAgaGVhcnQ6IENoYXNlZE9iamVjdDtcbiAgdmVsb2NpdHkgPSA1MDA7XG4gIGRhdGFIYW5kbGVyOiBEYXRhSGFuZGxlcjtcbiAgd3M6IFdlYlNvY2tldDtcblxuICBkZXN0aW5hdGlvblRvTW91c2UgPSB7IHg6IDAsIHk6IDAgfTtcbiAgZGVzdGluYXRpb25Ub0hlYXJ0ID0geyB4OiAwLCB5OiAwIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICB9XG5cbiAgcHVibGljIHByZWxvYWQoKSB7XG4gICAgLy8gdGhpcy5sb2FkLmltYWdlKCdwbGF5ZXInLCAnYXNzZXRzL3BsYXllci9pZGxlL3BsYXllci5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoXCJoZWFydFwiLCBcImFzc2V0cy9oZWFydC9oZWFydF9mdWxsLnBuZ1wiKTtcbiAgICB0aGlzLmxvYWQuYXRsYXMoXG4gICAgICBcInBsYXllclwiLFxuICAgICAgXCJhc3NldHMvcGxheWVyL3BsYXllci5wbmdcIixcbiAgICAgIFwiYXNzZXRzL3BsYXllci9wbGF5ZXIuanNvblwiXG4gICAgKTtcbiAgICB0aGlzLmxvYWQuYXRsYXMoXCJyYXRcIiwgXCJhc3NldHMvZGVhZFJhdC9yYXQucG5nXCIsIFwiYXNzZXRzL2RlYWRSYXQvcmF0Lmpzb25cIik7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlKHdzOiBXZWJTb2NrZXQpIHtcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcywgNTAsIDUwLCBcInBsYXllclwiKTtcbiAgICB0aGlzLmhlYXJ0ID0gbmV3IENoYXNlZE9iamVjdCh0aGlzLCB0aGlzLnBsYXllciwgXCJoZWFydFwiKTtcbiAgICAvLyB0aGlzLnBsYXllci5oZWFsdGhCYXIgPSBuZXcgSGVhbHRoQmFyKHRoaXMsIDEwMCwgMjApO1xuICAgIHRoaXMud3MgPSB3cztcbiAgICBsZXQgc3RhdHVzZXM6IFN0YXR1c1tdO1xuICAgIGNvbnN0IGRhdGFIYW5kbGVyID0gbmV3IERhdGFIYW5kbGVyKHRoaXMucGxheWVyKTtcbiAgICB0aGlzLndzLm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xuICAgICAgZGF0YUhhbmRsZXIuZ2V0TWVzc2FnZShldmVudC5kYXRhKTtcbiAgICAgIC8vIGNvbnN0IHN0YXRzOiBzdHJpbmcgPSBldmVudC5kYXRhO1xuXG4gICAgICAvLyBzdGF0dXNlcyA9IHN0YXRzXG4gICAgICAvLyAgIC5zcGxpdChcIlxcdFwiKVxuICAgICAgLy8gICAuZmlsdGVyKChzdGF0KSA9PiBzdGF0ICE9IFwiXCIpXG4gICAgICAvLyAgIC5tYXAoKHN0YXQpID0+IHtcbiAgICAgIC8vICAgICBjb25zdCBbbmFtZSwgdmFsdWVdID0gc3RhdC5zcGxpdChcIiBcIik7XG4gICAgICAvLyAgICAgcmV0dXJuIG5ldyBTdGF0dXMobmFtZSwgTnVtYmVyKHZhbHVlKSk7XG4gICAgICAvLyAgIH0pO1xuICAgICAgLy8gY29uc29sZS5sb2coc3RhdHVzZXMpO1xuICAgICAgLy8gbGV0IGJhclkgPSAwO1xuICAgICAgLy8gbGV0IGJhcnMgPSBzdGF0dXNlcy5tYXAoKHN0YXR1cykgPT4ge1xuICAgICAgLy8gICBjb25zdCBiYXIgPSBuZXcgQmFyKHsgc2NlbmU6IHRoaXMsIHg6IDAsIHk6IGJhclksIHN0YXR1cyB9KTtcbiAgICAgIC8vICAgYmFyWSArPSA1MDtcbiAgICAgIC8vICAgcmV0dXJuIGJhcjtcbiAgICAgIC8vIH0pO1xuICAgICAgLy8gYmFycy5mb3JFYWNoKChiYXIpID0+IHtcbiAgICAgIC8vICAgYmFyLmRyYXcoKTtcbiAgICAgIC8vIH0pO1xuICAgIH07XG5cbiAgICAvLyB0aGlzLmRhdGFIYW5kbGVyID0gbmV3IERhdGFIYW5kbGVyKHRoaXMucGxheWVyKTtcblxuICAgIGZ1bmN0aW9uIG9uQ2xpY2socG9pbnRlcjogUGhhc2VyLklucHV0LlBvaW50ZXIsIHNjZW5lOiBHYW1lU2NlbmUpIHtcbiAgICAgIHNjZW5lLmRlc3RpbmF0aW9uVG9Nb3VzZS54ID0gcG9pbnRlci54O1xuICAgICAgc2NlbmUuZGVzdGluYXRpb25Ub01vdXNlLnkgPSBwb2ludGVyLnk7XG5cbiAgICAgIC8vIHNjZW5lLmNoYW5nZU1vdmVBbmltYXRpb24odGhpcy5wbGF5ZXIsIHNjZW5lLmRlc3RpbmF0aW9uVG9Nb3VzZS54KTtcbiAgICAgIGlmIChzY2VuZS5kZXN0aW5hdGlvblRvTW91c2UueCAtIHNjZW5lLnBsYXllci5zcHJpdGUuYm9keS54IDwgMCkge1xuICAgICAgICBzY2VuZS5wbGF5ZXIuc3ByaXRlLnBsYXkoXCJtb3ZlXCIpLnNldEZsaXBYKGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjZW5lLnBsYXllci5zcHJpdGUucGxheShcIm1vdmVcIikuc2V0RmxpcFgodHJ1ZSk7XG4gICAgICB9XG4gICAgICBzY2VuZS5waHlzaWNzLm1vdmVUbyhcbiAgICAgICAgc2NlbmUucGxheWVyLnNwcml0ZSxcbiAgICAgICAgcG9pbnRlci54LFxuICAgICAgICBwb2ludGVyLnksXG4gICAgICAgIHNjZW5lLnZlbG9jaXR5XG4gICAgICApO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJpbml0aWFsOiBcIiwgc2NlbmUuZGVzdGluYXRpb24pO1xuICAgIH1cblxuICAgIHRoaXMuaW5wdXQub24oXCJwb2ludGVyZG93blwiLCAocG9pbnRlcjogUGhhc2VyLklucHV0LlBvaW50ZXIpID0+XG4gICAgICBvbkNsaWNrKHBvaW50ZXIsIHRoaXMpXG4gICAgKTtcblxuICAgIHRoaXMucGxheWVyLmNyZWF0ZUFuaW1hdGlvbnMoKTtcblxuICAgIHRoaXMucGh5c2ljcy5hZGQub3ZlcmxhcChcbiAgICAgIHRoaXMucGxheWVyLnNwcml0ZSxcbiAgICAgIHRoaXMuaGVhcnQuc3ByaXRlLFxuICAgICAgdGhpcy5wbGF5ZXJDb2xsaWRlSGVhcnQsXG4gICAgICBudWxsLFxuICAgICAgdGhpc1xuICAgICk7XG4gIH1cblxuICBjaGFuZ2VNb3ZlQW5pbWF0aW9uKHBsYXllcjogUGhhc2VyLlNjZW5lLCBkZXN0aW5hdGlvblg6IG51bWJlcikge1xuICAgIGlmIChkZXN0aW5hdGlvblggLSB0aGlzLnBsYXllci5zcHJpdGUuYm9keS54IDwgMCkge1xuICAgICAgdGhpcy5wbGF5ZXIuc3ByaXRlLnBsYXkoXCJtb3ZlXCIpLnNldEZsaXBYKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wbGF5ZXIuc3ByaXRlLnBsYXkoXCJtb3ZlXCIpLnNldEZsaXBYKHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIG1ha2VBbmltKGtleTogc3RyaW5nLCBmcmFtZU5hbWU6IHN0cmluZywgbnVtYmVyT2ZGcmFtZXM6IG51bWJlcikge1xuICAgIGxldCBteUFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtYmVyT2ZGcmFtZXM7IGkrKykge1xuICAgICAgbGV0IGZuID0gZnJhbWVOYW1lICsgaSArIFwiLnBuZ1wiO1xuICAgICAgbXlBcnJheS5wdXNoKHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIGZyYW1lOiBmbixcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbXlBcnJheTtcbiAgfVxuXG4gIHBsYXllckNvbGxpZGVIZWFydCgpIHtcbiAgICAvLyB0aGlzLnBsYXllci5oZWFsdGhCYXIuaW5jcmVhc2UoMTApO1xuICAgIHRoaXMuaGVhcnQubW92ZSgpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBkaXN0TW91c2UgPSBQaGFzZXIuTWF0aC5EaXN0YW5jZS5CZXR3ZWVuKFxuICAgICAgdGhpcy5wbGF5ZXIuc3ByaXRlLngsXG4gICAgICB0aGlzLnBsYXllci5zcHJpdGUueSxcbiAgICAgIHRoaXMuZGVzdGluYXRpb25Ub01vdXNlLngsXG4gICAgICB0aGlzLmRlc3RpbmF0aW9uVG9Nb3VzZS55XG4gICAgKTtcbiAgICAvLyBjb25zb2xlLmxvZygnZGlzdGFuY2U6JywgZGlzdCk7XG5cbiAgICBpZiAoZGlzdE1vdXNlIDw9IDEwKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRlc3RpbmF0aW9uLnggLSB0aGlzLnBsYXllci5ib2R5LngsIHRoaXMuZGVzdGluYXRpb24ueSAtIHRoaXMucGxheWVyLmJvZHkueSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh7IHBsYXllcjogeyB4OiB0aGlzLnBsYXllci5ib2R5LngsIHk6IHRoaXMucGxheWVyLmJvZHkueSB9IH0pO1xuICAgICAgdGhpcy5wbGF5ZXIuc3ByaXRlLmJvZHkudmVsb2NpdHkuc2V0VG8oMCwgMCk7XG4gICAgICB0aGlzLnBsYXllci5zcHJpdGUucGxheShcImlkbGVcIik7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uVG9Nb3VzZS54ID0gMDtcbiAgICAgIHRoaXMuZGVzdGluYXRpb25Ub01vdXNlLnkgPSAwO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFwicGhhc2VyXCI7XG5pbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tIFwiLi9nYW1lLXNjZW5lXCI7XG5cbmNvbnN0IGNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcbiAgdHlwZTogUGhhc2VyLkFVVE8sXG4gIHNjYWxlOiB7XG4gICAgd2lkdGg6IDgwMCxcbiAgICBoZWlnaHQ6IDYwMCxcbiAgfSxcbiAgcGh5c2ljczoge1xuICAgIGRlZmF1bHQ6IFwiYXJjYWRlXCIsXG4gICAgYXJjYWRlOiB7XG4gICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgcmVuZGVyOiB7XG4gICAgcGl4ZWxBcnQ6IHRydWUsXG4gIH0sXG4gIHBhcmVudDogXCJnYW1lXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCIjNzY1NDc4XCIsXG4gIHNjZW5lOiBHYW1lU2NlbmUsXG59O1xuXG5jb25zdCB3cyA9IG5ldyBXZWJTb2NrZXQoXCJ3czovL2xvY2FsaG9zdDozMjEwMFwiKTtcbndzLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgd3Muc2VuZChcImdldFN0YXRzXCIpO1xuICBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGNvbmZpZyk7XG4gIGdhbWUuc2NlbmUuc3RhcnQoXCJHYW1lXCIsIHdzKTtcbn07XG4iLCJpbXBvcnQgeyBCYXIgfSBmcm9tIFwiLi9iYXJcIjtcbmltcG9ydCB7IFBoeXNpY3MgfSBmcm9tIFwicGhhc2VyXCI7XG5pbXBvcnQgU3RhdHVzIGZyb20gXCIuL3N0YXR1c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBwcml2YXRlIF9zdGF0dXNlczogQmFyW107XG4gIHNwcml0ZTogUGh5c2ljcy5BcmNhZGUuU3ByaXRlO1xuICBzY2VuZTogUGhhc2VyLlNjZW5lO1xuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBrZXk6IHN0cmluZykge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICAvLyB0aGlzLmhlYWx0aEJhciA9IG5ldyBCYXIoc2NlbmUsIDEwMCwgMjApO1xuICAgIHRoaXMuc3ByaXRlID0gc2NlbmUucGh5c2ljcy5hZGQuc3ByaXRlKHgsIHksIFwicGxheWVyXCIpO1xuICAgIHRoaXMuc3ByaXRlLnNldFNjYWxlKDQsIDQpO1xuICB9XG5cbiAgY3JlYXRlQW5pbWF0aW9ucygpIHtcbiAgICB0aGlzLnNjZW5lLmFuaW1zLmNyZWF0ZSh7XG4gICAgICBrZXk6IFwiaWRsZVwiLFxuICAgICAgZnJhbWVzOiB0aGlzLm1ha2VBbmltYXRpb24oXCJwbGF5ZXJcIiwgXCJwbGF5ZXJfaWRsZV8wMFwiLCA0KSxcbiAgICAgIGZyYW1lUmF0ZTogOCxcbiAgICAgIHJlcGVhdDogLTEsXG4gICAgfSk7XG4gICAgdGhpcy5zY2VuZS5hbmltcy5jcmVhdGUoe1xuICAgICAga2V5OiBcIm1vdmVcIixcbiAgICAgIGZyYW1lczogdGhpcy5tYWtlQW5pbWF0aW9uKFwicGxheWVyXCIsIFwicGxheWVyX3dhbGtfbGVmdF8wMFwiLCA2KSxcbiAgICAgIGZyYW1lUmF0ZTogOCxcbiAgICAgIHJlcGVhdDogLTEsXG4gICAgfSk7XG4gIH1cbiAgbWFrZUFuaW1hdGlvbihrZXk6IHN0cmluZywgZnJhbWVOYW1lOiBzdHJpbmcsIG51bWJlck9mRnJhbWVzOiBudW1iZXIpIHtcbiAgICBjb25zdCBteUFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtYmVyT2ZGcmFtZXM7IGkrKykge1xuICAgICAgY29uc3QgZm4gPSBmcmFtZU5hbWUgKyBpICsgXCIucG5nXCI7XG4gICAgICBteUFycmF5LnB1c2goe1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgZnJhbWU6IGZuLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBteUFycmF5O1xuICB9XG5cbiAgcHVibGljIHNldCBzdGF0dXNlcyhzdGF0dXNlczogU3RhdHVzW10pIHtcbiAgICBpZiAoIXRoaXMuX3N0YXR1c2VzKSB7XG4gICAgICBsZXQgeSA9IDEwO1xuICAgICAgdGhpcy5fc3RhdHVzZXMgPSBzdGF0dXNlcy5tYXAoKHN0YXR1cykgPT4ge1xuICAgICAgICBjb25zdCBiYXIgPSBuZXcgQmFyKHsgc2NlbmU6IHRoaXMuc2NlbmUsIHg6IDEwLCB5LCBzdGF0dXMgfSk7XG4gICAgICAgIHkgKz0gMTU7XG4gICAgICAgIHJldHVybiBiYXI7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdHVzZXMuZm9yRWFjaCgoc3RhdHVzLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLl9zdGF0dXNlc1tpbmRleF0uc3RhdHVzID0gc3RhdHVzO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0dXMge1xuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2N1cnJlbnRfdmFsdWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfbWF4X3ZhbHVlID0gMTAwO1xuICBwcml2YXRlIF9taW5fdmFsdWUgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgY3VycmVudF92YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fY3VycmVudF92YWx1ZSA9IGN1cnJlbnRfdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgY3VycmVudF92YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fY3VycmVudF92YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBjdXJyZW50X3ZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50X3ZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBtYXhfdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heF92YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWluX3ZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9taW5fdmFsdWU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=