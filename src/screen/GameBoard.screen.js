import {GameObject} from "../manager/index.controller.js";
import blockObject from  "../screen/block/block.js"
import * as THREE from "three";
import scene from "three/addons/offscreen/scene.js";


class GameBoard extends GameObject {

    #gameBoard;
    #width = 10;
    #height = 20;

    #setGameBoard() {
        this.#gameBoard = Array.from({ length: this.#height }, () =>
            Array(this.#width).fill(0)
        );
    }


    #cubeGenerator (){
        const baseCube = new THREE.BoxGeometry(1,1 ,1);
        this.#gameBoard.forEach(
            (value, height) =>  {
                value.forEach(
                    (value, width) =>  {
                        if(value !== 0) {
                            const baseMaterial = new THREE.MeshBasicMaterial({color: blockObject.color[value]});
                            let mesh = new THREE.Mesh(baseCube, baseMaterial);
                            mesh.position.set(width, height,0);
                            this.scene.add(mesh);
                        }

                    }
                );
            }
        );
    }

    createCube() {

        const keys = Object.keys(blockObject);
        const num = Math.floor(Math.random() * keys.length); // 0 ~ length-1
        const type = keys[num];

        const boardCenterPosition = this.#width / 2

        const blockCenterPosition = blockObject[type].shape[0].length/2

        const startPosition = Math.floor(boardCenterPosition - blockCenterPosition);


        blockObject[type].shape.forEach((shapeArray, height) => {
            shapeArray.forEach((shape, width ) => {
                this.#gameBoard[(this.#gameBoard.length - 1) - height][width + Math.abs(startPosition) ] = shape;
            })
        })
    }

    start() {
        super.start();
        this.#setGameBoard();

        this.createCube()
        console.log(this.#gameBoard)

    }

    update() {
        this.#cubeGenerator();
    }
}

export default GameBoard;