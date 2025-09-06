import {GameObject} from "../manager/index.controller.js";
import blockObject from  "../screen/block/block.js"
import * as THREE from "three";


class GameBoard extends GameObject {

    gameBoardArray;
    #width = 10;
    #height = 20;

    #setGameBoardArray() {
        this.gameBoardArray = Array.from({ length: this.#height }, () =>
            Array(this.#width).fill(0)
        );
    }


    #cubeGenerator (){
        const baseCube = new THREE.BoxGeometry(1,1 ,1);
        this.gameBoardArray.forEach(
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

    start() {
        super.start();
        this.#setGameBoardArray();
    }

    update() {
        this.#cubeGenerator();
    }
}

export default GameBoard;