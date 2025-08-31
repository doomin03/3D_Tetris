import {GameObject, Controller} from './manager/index.controller';
import {WebGLRenderer} from 'three';

import GameBoard from './screen/GameBoard.screen.js';

const controller = new Controller();

/**@type WebGLRenderer*/
const renderer = controller.renderer;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

const gameBoard = new GameBoard();


controller.addObject(gameBoard);
controller.start();
controller.update();
