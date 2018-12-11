import { Tienda } from "./modelo-tienda";

export class Continente {
    continent: string
    country: string[]
    city: string[]
    store: Tienda[]

    constructor(continent, country, city, store) {
        this.continent = continent
        this.country = country
        this.city = city
        this.store = store
    }
}