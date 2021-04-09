export default class Weather {
    constructor(data) {
        this.city = data.name
        this.kelvin = data.main.temp
        this.f = Math.round((this.kelvin - 273.15) * (9 / 5) + 3)
        this.c = Math.round((this.f - 32) * 0.5556)
    }


    //still need to add the change to celsius 
    get Template() {

        return /*html*/`
        
 
    <div class=" mt-4 d-flex justify-content-end text-light"><i class="fas fa-cloud-sun"></i></div>
        <div class="mr-5 mt-3 text-light">
            <h6>${this.f}&deg</h6>
            <p>${this.city}</p>
        </div>
    </div>

            `
    }


}