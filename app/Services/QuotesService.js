import { ProxyState } from "../AppState.js"
import { sandboxApi } from "../Services/AxiosService.js"
import Quote from "../Models/Quote.js"

class QuotesService {

    async getQuote(id) {
        let res = await sandboxApi.get("quotes", id)
        ProxyState.quotes = new Quote(res.data)
    }
}

export const quotesService = new QuotesService();