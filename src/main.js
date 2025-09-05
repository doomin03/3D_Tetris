import {GameObject, Controller} from './manager/index.controller';
import {WebGLRenderer, AmbientLight, GridHelper, Camera} from 'three';

import GameBoard from './screen/GameBoard.screen.js';

const controller = new Controller();

/**@type WebGLRenderer*/
const renderer = controller.renderer;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

const scene = controller.scene;

const ambient = new AmbientLight(0xffffff, 0.5);
scene.add(ambient);

const grid = new GridHelper(20, 20, 0x444444, 0x888888);
grid.position.y = 0;
scene.add(grid);

const gameBoard = new GameBoard();


controller.addObject(gameBoard);
controller.start();
controller.update();
