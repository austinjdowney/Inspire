import { ProxyState } from "../AppState.js"
//import Quote from "../Models/Quote.js"
import { quotesService } from "../Services/QuotesService.js"

function _draw() {
    let template = ""
    template = ProxyState.quotes.Template
    document.getElementById("quotes").innerHTML = template
}
export default class QuotesController {
    constructor() {
        ProxyState.on("quotes", _draw)

        this.getQuote()
    }

    getQuote(id) {
        try {
            quotesService.getQuote(id)
        } catch (error) {
            console.error(error)
        }
    }
}