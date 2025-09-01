import {GameObject} from "../manager/index.controller.js";
import blockObject from  "../screen/block/block.js"
import * as THREE from "three";


class GameBoard extends GameObject {

    #gameBoard= [[]];
    #width = 10;
    #height = 20;

    #setGameBoard() {
        for (let i=0; i < this.#height; i++){
            for (let j=0; j < this.#width; j++){
                this.#gameBoard[i][j] = 0;
            }
        }
    }


    start() {
        super.start();
        this.#setGameBoard();
    }

    update() {


    }
}

export default GameBoard;