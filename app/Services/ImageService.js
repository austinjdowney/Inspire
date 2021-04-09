import { ProxyState } from "../AppState.js";
import Image from "../Models/Image.js";
import { sandboxApi } from "./AxiosService.js"

class ImageService {
    async getImage(id) {
        let res = await sandboxApi.get("images", id)
        ProxyState.images = res.data.url
        let images = ProxyState.images
    }
}

export const imageService = new ImageService();