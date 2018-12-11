export class Tienda {
    name: string
    logo: string
    longitude: number
    latitude: number
    gallery: string
    description: string
    address: string
    hours: any
    rating: number

    constructor(name, logo, longitude, latitude, gallery, description, address, hours, rating) {
        this.name = name
        this.logo = logo
        this.longitude = longitude
        this.latitude = latitude
        this.gallery = gallery
        this.description = description
        this.address = address
        this.hours = hours
        this.rating = rating
    }
}
