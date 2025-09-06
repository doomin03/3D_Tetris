
class InputController {
    static #instance = null;
    eventObject = {};

    constructor(){
        if(InputController.#instance) {
            return InputController.#instance;
        }


        InputController.#instance = this;

    }

    addEvent (eventName, eventFunc){
        if(this.eventObject.keys().include(eventName)){
            this.eventObject[eventName] = [eventFunc];
        }
        else {
            this.eventObject[eventName].push(eventFunc);
        }
    }

    setEventListener (){
        window.addEventListener();
    }

}