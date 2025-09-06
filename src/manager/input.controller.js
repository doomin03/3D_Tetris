
class InputController {
    static #instance = null;
    eventObject;

    constructor(){
        if(InputController.#instance) {
            return InputController.#instance;
        }


        InputController.#instance = this;
        this.eventObject = {};
    }
}