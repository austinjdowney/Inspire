export default class Quote {
    constructor(data) {
        this.id = data.id
        this.content = data.content
        this.author = data.author
    }

    get Template() {

        return /*html*/`
        <div class="col quote">
            <h4 class="mb-1">"${this.content}"</h4>
            <h5 class="mb-2 author">Author: ${this.author}</h5>
        </div>
        `
    }
}