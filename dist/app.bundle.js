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
        this.scene = scene;
        this.bar_display = new Phaser.GameObjects.Graphics(scene);
        this.bar_display.setX(x);
        this.bar_display.setY(y);
        this._status = status;
        this.draw();
        scene.add.existing(this.bar_display);
    }
    Bar.prototype.draw = function () {
        this.bar_display.clear();
        this.createEmptyStatusBar();
        this.displayStatusChange();
        this.displayName();
    };
    Bar.prototype.displayName = function () {
        var name = this._status.name;
        text: Phaser.GameObjects.Text;
        var _a = this.calculateTextPosition(), x = _a.x, y = _a.y;
        var text = this.scene.add.text(x, y, name, { color: "000" });
        text.depth = 1;
    };
    Bar.prototype.calculateTextPosition = function () {
        return {
            x: this.bar_display.x * 2 + this.bar_frame_size + 5,
            y: this.bar_display.y * 2 + this.bar_frame_size,
        };
    };
    Bar.prototype.createEmptyStatusBar = function () {
        //  Creating black fream and white background
        this.bar_display.fillStyle(0x000000);
        this.bar_display.fillRect(this.bar_display.x, this.bar_display.y, this.bar_size.width, this.bar_size.height);
        this.bar_display.fillStyle(0xffffff);
        this.bar_display.fillRect(this.bar_display.x + this.bar_frame_size, this.bar_display.y + this.bar_frame_size, this.bar_size.width - this.bar_frame_size * 2, this.bar_size.height - this.bar_frame_size * 2);
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
        // console.log("got", json);
        var found = this.actions.find(function (action) { return action === json.name; });
        switch (found) {
            case "statuses":
                var statusesData = json;
                // console.log("statusesData",statusesData);
                this.player.statuses = statusesData.statuses.map(function (_a) {
                    // console.log(name, value);
                    var name = _a.name, value = _a.value;
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
        this.player = new player_1.default(this, 500, 500, "player");
        this.heart = new chased_object_1.default(this, this.player, "heart");
        this.ws = ws;
        var dataHandler = new data_handler_1.default(this.player);
        this.ws.onmessage = function (event) {
            dataHandler.getMessage(event.data);
        };
        this.dataHandler = new data_handler_1.default(this.player);
        function onClick(pointer, scene) {
            scene.destinationToMouse.x = pointer.x;
            scene.destinationToMouse.y = pointer.y;
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
            debug: true,
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
// game.scene.start("Game");


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
                    y_1 += 20;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhc2VkLW9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS1oYW5kbGVyL2RhdGEtaGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0dXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNB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QUFDO0lBQ3RDLENBQUM7SUFFRCxzQkFBVyx3QkFBSTthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsaUNBQWE7YUFJeEI7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDN0IsQ0FBQzthQU5ELFVBQXlCLEtBQWE7WUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFNRCxzQkFBVyw2QkFBUzthQUFwQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDZCQUFTO2FBQXBCO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBQ0gsYUFBQztBQUFELENBQUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vbG9nXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvbG9nLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90IHN5bmMgXlxcXFwuXFxcXC9sb2ckXCI7IiwiaW1wb3J0IFN0YXR1cyBmcm9tIFwiLi9zdGF0dXNcIjtcblxuaW50ZXJmYWNlIEJhckludGVyZmFjZSB7XG4gIHNjZW5lOiBQaGFzZXIuU2NlbmU7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBzdGF0dXM6IFN0YXR1cztcbn1cblxuZXhwb3J0IGNsYXNzIEJhciB7XG4gIHNjZW5lOiBQaGFzZXIuU2NlbmU7XG4gIGJhcl9kaXNwbGF5OiBQaGFzZXIuR2FtZU9iamVjdHMuR3JhcGhpY3M7XG4gIHByaXZhdGUgX3N0YXR1czogU3RhdHVzO1xuICBiYXJfc2l6ZSA9IHtcbiAgICB3aWR0aDogMjAwLFxuICAgIGhlaWdodDogMjUsXG4gIH07XG4gIGJhcl9mcmFtZV9zaXplID0gdGhpcy5iYXJfc2l6ZS53aWR0aCAqIDAuMDI7XG5cbiAgY29uc3RydWN0b3IoeyBzY2VuZSwgeCwgeSwgc3RhdHVzIH06IEJhckludGVyZmFjZSkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLmJhcl9kaXNwbGF5ID0gbmV3IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcyhzY2VuZSk7XG4gICAgdGhpcy5iYXJfZGlzcGxheS5zZXRYKHgpO1xuICAgIHRoaXMuYmFyX2Rpc3BsYXkuc2V0WSh5KTtcbiAgICB0aGlzLl9zdGF0dXMgPSBzdGF0dXM7XG4gICAgdGhpcy5kcmF3KCk7XG5cbiAgICBzY2VuZS5hZGQuZXhpc3RpbmcodGhpcy5iYXJfZGlzcGxheSk7XG4gIH1cblxuICBwdWJsaWMgZHJhdygpIHtcbiAgICB0aGlzLmJhcl9kaXNwbGF5LmNsZWFyKCk7XG4gICAgdGhpcy5jcmVhdGVFbXB0eVN0YXR1c0JhcigpO1xuICAgIHRoaXMuZGlzcGxheVN0YXR1c0NoYW5nZSgpO1xuICAgIHRoaXMuZGlzcGxheU5hbWUoKTtcbiAgfVxuICBwcml2YXRlIGRpc3BsYXlOYW1lKCkge1xuICAgIGNvbnN0IG5hbWU6IHN0cmluZyA9IHRoaXMuX3N0YXR1cy5uYW1lO1xuXG4gICAgdGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmNhbGN1bGF0ZVRleHRQb3NpdGlvbigpO1xuICAgIGNvbnN0IHRleHQgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KHgsIHksIG5hbWUsIHsgY29sb3I6IFwiMDAwXCIgfSk7XG4gICAgdGV4dC5kZXB0aCA9IDE7XG4gIH1cbiAgcHJpdmF0ZSBjYWxjdWxhdGVUZXh0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHRoaXMuYmFyX2Rpc3BsYXkueCAqIDIgKyB0aGlzLmJhcl9mcmFtZV9zaXplICsgNSxcbiAgICAgIHk6IHRoaXMuYmFyX2Rpc3BsYXkueSAqIDIgKyB0aGlzLmJhcl9mcmFtZV9zaXplLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUVtcHR5U3RhdHVzQmFyKCkge1xuICAgIC8vICBDcmVhdGluZyBibGFjayBmcmVhbSBhbmQgd2hpdGUgYmFja2dyb3VuZFxuICAgIHRoaXMuYmFyX2Rpc3BsYXkuZmlsbFN0eWxlKDB4MDAwMDAwKTtcbiAgICB0aGlzLmJhcl9kaXNwbGF5LmZpbGxSZWN0KFxuICAgICAgdGhpcy5iYXJfZGlzcGxheS54LFxuICAgICAgdGhpcy5iYXJfZGlzcGxheS55LFxuICAgICAgdGhpcy5iYXJfc2l6ZS53aWR0aCxcbiAgICAgIHRoaXMuYmFyX3NpemUuaGVpZ2h0XG4gICAgKTtcblxuICAgIHRoaXMuYmFyX2Rpc3BsYXkuZmlsbFN0eWxlKDB4ZmZmZmZmKTtcbiAgICB0aGlzLmJhcl9kaXNwbGF5LmZpbGxSZWN0KFxuICAgICAgdGhpcy5iYXJfZGlzcGxheS54ICsgdGhpcy5iYXJfZnJhbWVfc2l6ZSxcbiAgICAgIHRoaXMuYmFyX2Rpc3BsYXkueSArIHRoaXMuYmFyX2ZyYW1lX3NpemUsXG4gICAgICB0aGlzLmJhcl9zaXplLndpZHRoIC0gdGhpcy5iYXJfZnJhbWVfc2l6ZSAqIDIsXG4gICAgICB0aGlzLmJhcl9zaXplLmhlaWdodCAtIHRoaXMuYmFyX2ZyYW1lX3NpemUgKiAyXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZGlzcGxheVN0YXR1c0NoYW5nZSgpIHtcbiAgICBpZiAodGhpcy5fc3RhdHVzLmN1cnJlbnRfdmFsdWUgIT09IDApIHtcbiAgICAgIHRoaXMuY2hhbmdlU3RhdHVzQ29sb3IoKTtcbiAgICAgIGxldCBkaXN0YW5jZSA9IE1hdGguZmxvb3IoXG4gICAgICAgICh0aGlzLl9zdGF0dXMuY3VycmVudF92YWx1ZSAvIHRoaXMuX3N0YXR1cy5tYXhfdmFsdWUpICpcbiAgICAgICAgICB0aGlzLmJhcl9zaXplLndpZHRoIC1cbiAgICAgICAgICB0aGlzLmJhcl9mcmFtZV9zaXplICogMlxuICAgICAgKTtcbiAgICAgIHRoaXMuYmFyX2Rpc3BsYXkuZmlsbFJlY3QoXG4gICAgICAgIHRoaXMuYmFyX2Rpc3BsYXkueCArIHRoaXMuYmFyX2ZyYW1lX3NpemUsXG4gICAgICAgIHRoaXMuYmFyX2Rpc3BsYXkueSArIHRoaXMuYmFyX2ZyYW1lX3NpemUsXG4gICAgICAgIGRpc3RhbmNlLFxuICAgICAgICB0aGlzLmJhcl9zaXplLmhlaWdodCAtIHRoaXMuYmFyX2ZyYW1lX3NpemUgKiAyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlU3RhdHVzQ29sb3IoKSB7XG4gICAgaWYgKHRoaXMuX3N0YXR1cy5jdXJyZW50X3ZhbHVlIDw9IDMwKSB7XG4gICAgICB0aGlzLmJhcl9kaXNwbGF5LmZpbGxTdHlsZSgweGZmMDAwMCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0dXMuY3VycmVudF92YWx1ZSA8PSA2MCkge1xuICAgICAgdGhpcy5iYXJfZGlzcGxheS5maWxsU3R5bGUoMHhmZjk5MzMpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdHVzLmN1cnJlbnRfdmFsdWUgPD0gOTApIHtcbiAgICAgIHRoaXMuYmFyX2Rpc3BsYXkuZmlsbFN0eWxlKDB4ZmZmMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5iYXJfZGlzcGxheS5maWxsU3R5bGUoMHgwMGZmMDApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXQgc3RhdHVzKHN0YXR1czogU3RhdHVzKSB7XG4gICAgdGhpcy5fc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMuZHJhdygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaHlzaWNzIH0gZnJvbSBcInBoYXNlclwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFzZWRPYmplY3Qge1xuXG4gICAgc3ByaXRlOiBQaHlzaWNzLkFyY2FkZS5TcHJpdGU7XG4gICAgc2NlbmU6IFBoYXNlci5TY2VuZTtcbiAgICBwbGF5ZXI6IFBsYXllcjtcbiAgICBleGlzdCA9IDA7XG5cblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHBsYXllcjogUGxheWVyLCBrZXk6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuc2NlbmUuY2FtZXJhcy5tYWluLmNlbnRlclggKiAyO1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuc2NlbmUuY2FtZXJhcy5tYWluLmNlbnRlclkgKiAyO1xuICAgICAgICB0aGlzLmV4aXN0ICs9IDE7XG4gICAgICAgIHRoaXMuc3ByaXRlID0gc2NlbmUucGh5c2ljcy5hZGQuc3ByaXRlKHgsIHksICdoZWFydCcpO1xuXG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgd2hpbGUgKFBoYXNlci5NYXRoLkRpc3RhbmNlLkJldHdlZW4odGhpcy5zcHJpdGUueCwgdGhpcy5zcHJpdGUueSwgdGhpcy5wbGF5ZXIuc3ByaXRlLngsIHRoaXMucGxheWVyLnNwcml0ZS55KSA8IDEwMCkge1xuICAgICAgICAgICAgY29uc3QgeCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLnNjZW5lLmNhbWVyYXMubWFpbi5jZW50ZXJYICogMjtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLnJhbmRvbSgpICogdGhpcy5zY2VuZS5jYW1lcmFzLm1haW4uY2VudGVyWSAqIDI7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS54ID0geDtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnkgPSB5O1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL3BsYXllclwiO1xuaW1wb3J0IFN0YXR1cyBmcm9tIFwiLi4vc3RhdHVzXCI7XG5pbXBvcnQgeyBTdGF0dXNlc0Zvcm1hdCB9IGZyb20gXCIuL2RhdGEtaGFuZGxlci50eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhSGFuZGxlciB7XG4gIHBsYXllcjogUGxheWVyO1xuICBhY3Rpb25zID0gW1wic3RhdHVzZXNcIl07XG5cbiAgY29uc3RydWN0b3IocGxheWVyOiBQbGF5ZXIpIHtcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZ290XCIsIGpzb24pO1xuICAgIGNvbnN0IGZvdW5kID0gdGhpcy5hY3Rpb25zLmZpbmQoKGFjdGlvbikgPT4gYWN0aW9uID09PSBqc29uLm5hbWUpO1xuICAgIHN3aXRjaChmb3VuZCl7XG4gICAgICBjYXNlIFwic3RhdHVzZXNcIjpcbiAgICAgICAgY29uc3Qgc3RhdHVzZXNEYXRhIDogU3RhdHVzZXNGb3JtYXQgPSBqc29uO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0YXR1c2VzRGF0YVwiLHN0YXR1c2VzRGF0YSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBsYXllci5zdGF0dXNlcyA9IHN0YXR1c2VzRGF0YS5zdGF0dXNlcy5tYXAoKHtuYW1lLHZhbHVlfSkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gbmV3IFN0YXR1cyhuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQmFyIH0gZnJvbSBcIi4vYmFyXCI7XG5pbXBvcnQgeyBQaHlzaWNzLCBTY2VuZSB9IGZyb20gXCJwaGFzZXJcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgQ2hhc2VkT2JqZWN0IGZyb20gXCIuL2NoYXNlZC1vYmplY3RcIjtcbmltcG9ydCBEYXRhSGFuZGxlciBmcm9tIFwiLi9kYXRhLWhhbmRsZXIvZGF0YS1oYW5kbGVyXCI7XG5pbXBvcnQgU3RhdHVzIGZyb20gXCIuL3N0YXR1c1wiO1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogXCJHYW1lXCIsXG59O1xuXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgcGxheWVyOiBQbGF5ZXI7XG4gIGhlYXJ0OiBDaGFzZWRPYmplY3Q7XG4gIHZlbG9jaXR5ID0gNTAwO1xuICBkYXRhSGFuZGxlcjogRGF0YUhhbmRsZXI7XG4gIHdzOiBXZWJTb2NrZXQ7XG5cbiAgZGVzdGluYXRpb25Ub01vdXNlID0geyB4OiAwLCB5OiAwIH07XG4gIGRlc3RpbmF0aW9uVG9IZWFydCA9IHsgeDogMCwgeTogMCB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyBwcmVsb2FkKCkge1xuICAgIC8vIHRoaXMubG9hZC5pbWFnZSgncGxheWVyJywgJ2Fzc2V0cy9wbGF5ZXIvaWRsZS9wbGF5ZXIucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKFwiaGVhcnRcIiwgXCJhc3NldHMvaGVhcnQvaGVhcnRfZnVsbC5wbmdcIik7XG4gICAgdGhpcy5sb2FkLmF0bGFzKFxuICAgICAgXCJwbGF5ZXJcIixcbiAgICAgIFwiYXNzZXRzL3BsYXllci9wbGF5ZXIucG5nXCIsXG4gICAgICBcImFzc2V0cy9wbGF5ZXIvcGxheWVyLmpzb25cIlxuICAgICk7XG4gICAgdGhpcy5sb2FkLmF0bGFzKFwicmF0XCIsIFwiYXNzZXRzL2RlYWRSYXQvcmF0LnBuZ1wiLCBcImFzc2V0cy9kZWFkUmF0L3JhdC5qc29uXCIpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZSh3czogV2ViU29ja2V0KSB7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMsIDUwMCwgNTAwLCBcInBsYXllclwiKTtcbiAgICB0aGlzLmhlYXJ0ID0gbmV3IENoYXNlZE9iamVjdCh0aGlzLCB0aGlzLnBsYXllciwgXCJoZWFydFwiKTtcbiAgICB0aGlzLndzID0gd3M7XG5cbiAgICBjb25zdCBkYXRhSGFuZGxlciA9IG5ldyBEYXRhSGFuZGxlcih0aGlzLnBsYXllcik7XG5cbiAgICB0aGlzLndzLm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xuICAgICAgZGF0YUhhbmRsZXIuZ2V0TWVzc2FnZShldmVudC5kYXRhKTtcbiAgICB9O1xuXG4gICAgdGhpcy5kYXRhSGFuZGxlciA9IG5ldyBEYXRhSGFuZGxlcih0aGlzLnBsYXllcik7XG5cbiAgICBmdW5jdGlvbiBvbkNsaWNrKHBvaW50ZXI6IFBoYXNlci5JbnB1dC5Qb2ludGVyLCBzY2VuZTogR2FtZVNjZW5lKSB7XG4gICAgICBzY2VuZS5kZXN0aW5hdGlvblRvTW91c2UueCA9IHBvaW50ZXIueDtcbiAgICAgIHNjZW5lLmRlc3RpbmF0aW9uVG9Nb3VzZS55ID0gcG9pbnRlci55O1xuXG4gICAgICBpZiAoc2NlbmUuZGVzdGluYXRpb25Ub01vdXNlLnggLSBzY2VuZS5wbGF5ZXIuc3ByaXRlLmJvZHkueCA8IDApIHtcbiAgICAgICAgc2NlbmUucGxheWVyLnNwcml0ZS5wbGF5KFwibW92ZVwiKS5zZXRGbGlwWChmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY2VuZS5wbGF5ZXIuc3ByaXRlLnBsYXkoXCJtb3ZlXCIpLnNldEZsaXBYKHRydWUpO1xuICAgICAgfVxuICAgICAgc2NlbmUucGh5c2ljcy5tb3ZlVG8oXG4gICAgICAgIHNjZW5lLnBsYXllci5zcHJpdGUsXG4gICAgICAgIHBvaW50ZXIueCxcbiAgICAgICAgcG9pbnRlci55LFxuICAgICAgICBzY2VuZS52ZWxvY2l0eVxuICAgICAgKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5pdGlhbDogXCIsIHNjZW5lLmRlc3RpbmF0aW9uKTtcbiAgICB9XG5cbiAgICB0aGlzLmlucHV0Lm9uKFwicG9pbnRlcmRvd25cIiwgKHBvaW50ZXI6IFBoYXNlci5JbnB1dC5Qb2ludGVyKSA9PlxuICAgICAgb25DbGljayhwb2ludGVyLCB0aGlzKVxuICAgICk7XG5cbiAgICB0aGlzLnBsYXllci5jcmVhdGVBbmltYXRpb25zKCk7XG5cbiAgICB0aGlzLnBoeXNpY3MuYWRkLm92ZXJsYXAoXG4gICAgICB0aGlzLnBsYXllci5zcHJpdGUsXG4gICAgICB0aGlzLmhlYXJ0LnNwcml0ZSxcbiAgICAgIHRoaXMucGxheWVyQ29sbGlkZUhlYXJ0LFxuICAgICAgbnVsbCxcbiAgICAgIHRoaXNcbiAgICApO1xuICB9XG5cbiAgY2hhbmdlTW92ZUFuaW1hdGlvbihwbGF5ZXI6IFBoYXNlci5TY2VuZSwgZGVzdGluYXRpb25YOiBudW1iZXIpIHtcbiAgICBpZiAoZGVzdGluYXRpb25YIC0gdGhpcy5wbGF5ZXIuc3ByaXRlLmJvZHkueCA8IDApIHtcbiAgICAgIHRoaXMucGxheWVyLnNwcml0ZS5wbGF5KFwibW92ZVwiKS5zZXRGbGlwWChmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGxheWVyLnNwcml0ZS5wbGF5KFwibW92ZVwiKS5zZXRGbGlwWCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBtYWtlQW5pbShrZXk6IHN0cmluZywgZnJhbWVOYW1lOiBzdHJpbmcsIG51bWJlck9mRnJhbWVzOiBudW1iZXIpIHtcbiAgICBsZXQgbXlBcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG51bWJlck9mRnJhbWVzOyBpKyspIHtcbiAgICAgIGxldCBmbiA9IGZyYW1lTmFtZSArIGkgKyBcIi5wbmdcIjtcbiAgICAgIG15QXJyYXkucHVzaCh7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBmcmFtZTogZm4sXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG15QXJyYXk7XG4gIH1cblxuICBwbGF5ZXJDb2xsaWRlSGVhcnQoKSB7XG4gICAgLy8gdGhpcy5wbGF5ZXIuaGVhbHRoQmFyLmluY3JlYXNlKDEwKTtcbiAgICB0aGlzLmhlYXJ0Lm1vdmUoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoKSB7XG4gICAgY29uc3QgZGlzdE1vdXNlID0gUGhhc2VyLk1hdGguRGlzdGFuY2UuQmV0d2VlbihcbiAgICAgIHRoaXMucGxheWVyLnNwcml0ZS54LFxuICAgICAgdGhpcy5wbGF5ZXIuc3ByaXRlLnksXG4gICAgICB0aGlzLmRlc3RpbmF0aW9uVG9Nb3VzZS54LFxuICAgICAgdGhpcy5kZXN0aW5hdGlvblRvTW91c2UueVxuICAgICk7XG4gICAgLy8gY29uc29sZS5sb2coJ2Rpc3RhbmNlOicsIGRpc3QpO1xuXG4gICAgaWYgKGRpc3RNb3VzZSA8PSAxMCkge1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kZXN0aW5hdGlvbi54IC0gdGhpcy5wbGF5ZXIuYm9keS54LCB0aGlzLmRlc3RpbmF0aW9uLnkgLSB0aGlzLnBsYXllci5ib2R5LnkpO1xuICAgICAgLy8gY29uc29sZS5sb2coeyBwbGF5ZXI6IHsgeDogdGhpcy5wbGF5ZXIuYm9keS54LCB5OiB0aGlzLnBsYXllci5ib2R5LnkgfSB9KTtcbiAgICAgIHRoaXMucGxheWVyLnNwcml0ZS5ib2R5LnZlbG9jaXR5LnNldFRvKDAsIDApO1xuICAgICAgdGhpcy5wbGF5ZXIuc3ByaXRlLnBsYXkoXCJpZGxlXCIpO1xuICAgICAgdGhpcy5kZXN0aW5hdGlvblRvTW91c2UueCA9IDA7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uVG9Nb3VzZS55ID0gMDtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBcInBoYXNlclwiO1xuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSBcIi4vZ2FtZS1zY2VuZVwiO1xuXG5jb25zdCBjb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XG4gIHR5cGU6IFBoYXNlci5BVVRPLFxuICBzY2FsZToge1xuICAgIHdpZHRoOiA4MDAsXG4gICAgaGVpZ2h0OiA2MDAsXG4gIH0sXG4gIHBoeXNpY3M6IHtcbiAgICBkZWZhdWx0OiBcImFyY2FkZVwiLFxuICAgIGFyY2FkZToge1xuICAgICAgZGVidWc6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgcmVuZGVyOiB7XG4gICAgcGl4ZWxBcnQ6IHRydWUsXG4gIH0sXG4gIHBhcmVudDogXCJnYW1lXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCIjNzY1NDc4XCIsXG4gIHNjZW5lOiBHYW1lU2NlbmUsXG59O1xuXG5jb25zdCB3cyA9IG5ldyBXZWJTb2NrZXQoXCJ3czovL2xvY2FsaG9zdDozMjEwMFwiKTtcbndzLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgd3Muc2VuZChcImdldFN0YXRzXCIpO1xuICBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGNvbmZpZyk7XG4gIGdhbWUuc2NlbmUuc3RhcnQoXCJHYW1lXCIsIHdzKTtcbn07XG4vLyBnYW1lLnNjZW5lLnN0YXJ0KFwiR2FtZVwiKTtcbiIsImltcG9ydCB7IEJhciB9IGZyb20gXCIuL2JhclwiO1xuaW1wb3J0IHsgUGh5c2ljcyB9IGZyb20gXCJwaGFzZXJcIjtcbmltcG9ydCBTdGF0dXMgZnJvbSBcIi4vc3RhdHVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIHByaXZhdGUgX3N0YXR1c2VzOiBCYXJbXTtcbiAgc3ByaXRlOiBQaHlzaWNzLkFyY2FkZS5TcHJpdGU7XG4gIHNjZW5lOiBQaGFzZXIuU2NlbmU7XG5cbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgIHRoaXMuc3ByaXRlID0gc2NlbmUucGh5c2ljcy5hZGQuc3ByaXRlKHgsIHksIFwicGxheWVyXCIpO1xuICAgIHRoaXMuc3ByaXRlLnNldFNjYWxlKDQsIDQpO1xuICB9XG5cbiAgY3JlYXRlQW5pbWF0aW9ucygpIHtcbiAgICB0aGlzLnNjZW5lLmFuaW1zLmNyZWF0ZSh7XG4gICAgICBrZXk6IFwiaWRsZVwiLFxuICAgICAgZnJhbWVzOiB0aGlzLm1ha2VBbmltYXRpb24oXCJwbGF5ZXJcIiwgXCJwbGF5ZXJfaWRsZV8wMFwiLCA0KSxcbiAgICAgIGZyYW1lUmF0ZTogOCxcbiAgICAgIHJlcGVhdDogLTEsXG4gICAgfSk7XG4gICAgdGhpcy5zY2VuZS5hbmltcy5jcmVhdGUoe1xuICAgICAga2V5OiBcIm1vdmVcIixcbiAgICAgIGZyYW1lczogdGhpcy5tYWtlQW5pbWF0aW9uKFwicGxheWVyXCIsIFwicGxheWVyX3dhbGtfbGVmdF8wMFwiLCA2KSxcbiAgICAgIGZyYW1lUmF0ZTogOCxcbiAgICAgIHJlcGVhdDogLTEsXG4gICAgfSk7XG4gIH1cblxuICBtYWtlQW5pbWF0aW9uKGtleTogc3RyaW5nLCBmcmFtZU5hbWU6IHN0cmluZywgbnVtYmVyT2ZGcmFtZXM6IG51bWJlcikge1xuICAgIGNvbnN0IG15QXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBudW1iZXJPZkZyYW1lczsgaSsrKSB7XG4gICAgICBjb25zdCBmbiA9IGZyYW1lTmFtZSArIGkgKyBcIi5wbmdcIjtcbiAgICAgIG15QXJyYXkucHVzaCh7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBmcmFtZTogZm4sXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG15QXJyYXk7XG4gIH1cblxuICBwdWJsaWMgc2V0IHN0YXR1c2VzKHN0YXR1c2VzOiBTdGF0dXNbXSkge1xuICAgIGlmICghdGhpcy5fc3RhdHVzZXMpIHtcbiAgICAgIGxldCB5ID0gMTA7XG4gICAgICB0aGlzLl9zdGF0dXNlcyA9IHN0YXR1c2VzLm1hcCgoc3RhdHVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGJhciA9IG5ldyBCYXIoeyBzY2VuZTogdGhpcy5zY2VuZSwgeDogMTAsIHksIHN0YXR1cyB9KTtcbiAgICAgICAgeSArPSAyMDtcbiAgICAgICAgcmV0dXJuIGJhcjtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0dXNlcy5mb3JFYWNoKChzdGF0dXMsIGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuX3N0YXR1c2VzW2luZGV4XS5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXR1cyB7XG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfY3VycmVudF92YWx1ZTogbnVtYmVyO1xuICBwcml2YXRlIF9tYXhfdmFsdWUgPSAxMDA7XG4gIHByaXZhdGUgX21pbl92YWx1ZSA9IDA7XG5cbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjdXJyZW50X3ZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9jdXJyZW50X3ZhbHVlID0gY3VycmVudF92YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgcHVibGljIHNldCBjdXJyZW50X3ZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9jdXJyZW50X3ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGN1cnJlbnRfdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRfdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1heF92YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4X3ZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBtaW5fdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21pbl92YWx1ZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==