import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { sandboxApi } from "./AxiosService.js";

class WeatherService {
    async getWeather() {
        let res = await sandboxApi.get('weather')
        ProxyState.weathers = new Weather(res.data)
        console.log(res)
    }

}

export const weatherService = new WeatherService();