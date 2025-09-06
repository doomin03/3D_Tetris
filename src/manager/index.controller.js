import {WebGLRenderer, Scene, PerspectiveCamera, Clock} from "three"

export class GameObject {
    /** @type WebGLRenderer*/ renderer;
    /** @type Scene */ scene;
    /** @type Clock*/ clock;
    /** @type Controller */ controls;

    constructor (){
        this.controls = new Controller();
    }

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
    /** @type {Clock}*/clock;


    constructor () {
        if(Controller.#instance) {
            return Controller.#instance;
        }

        this.#canvas = document.getElementById('game_screen');
        if (this.#canvas !== null) {
            this.renderer = new WebGLRenderer({canvas: this.#canvas});
        }

        this.scene = new Scene();

        this.clock = new Clock();

        this.camera = new PerspectiveCamera(
            100,
            window.innerWidth / window.innerHeight,
            0.1,
            1000,
        );

        this.camera.position.set(0, 15, 15);

         Controller.#instance = this;
    }

    addObject(object) {
        if (object instanceof GameObject){
            object.renderer = this.renderer;
            object.scene = this.scene;
            object.clock = this.clock;
            this.#object.push(object);
        }
    }

    /** @param {String} className*/
    /** @return {GameObject}*/
    getComponent(className){
        return this.#object.find((e => e.constructor.name === className));
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