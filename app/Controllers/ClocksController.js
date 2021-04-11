import { ProxyState } from "../AppState.js";
import { clockService } from "../Services/ClockService.js";


//Private
function _draw() {
}

//Public
export default class ClocksController {
    constructor() {
        ProxyState.on("clocks", _draw);
        this.getTime()
    }

    async getTime() {
        try {
            clockService.getTime()
        } catch (error) {
            console.error;
        }
    }
}