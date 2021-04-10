import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


//Private
function _draw() {
    let template = ''
    template = ProxyState.weathers.Template
    document.getElementById("weathers").innerHTML = template
    console.log(ProxyState.weathers)
}

//Public
export default class WeathersController {
    constructor() {
        ProxyState.on("weathers", _draw);
        this.getWeather()
    }

    getWeather() {
        try {
            weatherService.getWeather()
        } catch (error) {
            console.error
        }
    }
    async changeTemp() {
        try {
            weatherService.changeTemp()
        } catch (error) {
            console.error
        }
    }
}