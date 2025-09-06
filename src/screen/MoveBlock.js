import {Controller, GameObject} from "../manager/index.controller.js";
import blockObject from  "../screen/block/block.js"
import * as THREE from "three";


class MoveBlock extends GameObject {
    createState = true;
    type = "";
    gameBord;

    setType(){
        const keys = Object.keys(blockObject);
        const num = Math.floor(Math.random() * keys.length); // 0 ~ length-1
        this.type = keys[num];
    }

    setStartPosition(){
        const boardCenterPosition = this.gameBoard[0][0].length / 2

        const blockCenterPosition = blockObject[this.type].shape[0].length/2

        return Math.floor(boardCenterPosition - blockCenterPosition);
    }

    moveBlock(){
        blockObject[this.type].shape.forEach((shapeArray, height)=>{
            shapeArray.forEach((shape, width) => {
                this.gameBoard.gameBoardArray[(this.gameBoard.gameBoardArray.length - 1) - height][this.setStartPosition() + width] = shape;
            });
        });
    }


    start() {
        super.start();
        this.gameBoard = this.controls.getComponent('GameBoard');
        this.setType();
    }

    update() {

    }
}

export default MoveBlock;