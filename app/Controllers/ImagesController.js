import { ProxyState } from "../AppState.js";
import Image from "../Models/Image.js"
import { imageService } from "../Services/ImageService.js";


//Private
function _draw() {
    document.body.style.backgroundImage = `url(${ProxyState.images})`
}

//Public
export default class ImagesController {
    constructor() {
        ProxyState.on("images", _draw);
        this.getImage()
    }

    getImage() {
        imageService.getImage()
    }

}