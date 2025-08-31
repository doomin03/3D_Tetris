import {WebGLRenderer, Scene, PerspectiveCamera} from "three"

export class GameObject {
    /** @type WebGLRenderer*/ renderer;
    /** @type Scene */ scene;
    constructor (){}

    start (){

    }

    update (){

    }
}

export class Controller {
    static #instance = null;
    #canvas;
    /** @type {GameObject[]}*/#object = [];
    /** @type {WebGLRenderer}*/renderer;
    /** @type {Scene}*/Scene;
    /** @type {PerspectiveCamera}*/camera;


    constructor () {
        if(Controller.#instance) {
            return Controller.#instance;
        }

        this.#canvas = document.getElementById('game_screen');
        if (this.#canvas !== null) {
            this.renderer = new WebGLRenderer({canvas: this.#canvas});
        }

        this.scene = new Scene();

        this.camera = new PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000,
        );

         Controller.#instance = this;
    }

    addObject(object) {
        if (object instanceof GameObject){
            object.renderer = this.renderer;
            object.scene = this.scene;
            this.#object.push(object);
        }
    }

    start(){
        this.#object.forEach((e) => {
            e.start();
        })
    }


    update(){
        this.renderer.setAnimationLoop(
            (e) => {
                this.#object.forEach((e) => {
                    e.update();
                })
                this.renderer.render(this.scene, this.camera);
            }
        );
    }
}