import {WebGLRenderer} from "three"

export class GameObject {
    constructor (){}

    start (){
        throw Error();
    }

    updata (){
        throw Error();
    }
}

export class Controller {
    static #instance = null;
    #canvas;
    #object = [];

    renderer;

    constructor (){
        if(Controller.#instance) {
            return Controller.#instance;
        }

        this.#canvas = document.getElementById('game_screen');
        if (this.#canvas !== null) {
            this.renderer = WebGLRenderer({canvas: this.#canvas});
        }

         Controller.#instance = this;
    }

    addObject(object) {
        if (object instanceof GameObject){
            this.#object.push(object);
        }
    }

    start(){
        this.#object.forEach((e) => {
            e.start();
        })
    }


    updata(){
        this.renderer.setAnimationLoop(
            (e) => {
                this.#object.forEach((e) => {
                    e.updata();
                })
            }
        );
    }
}