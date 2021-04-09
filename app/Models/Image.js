export default class Image {
    constructor(url, id) {
        this.url = url
        this.id = id
    }

    //will this work???

    get Template() {

        return /*html*/`
        style="background-image:${this.image}
        `
    }
}