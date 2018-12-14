import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService{
    baseUrl:string = 'http://localhost:3000/api';

    constructor(private http: Http){}
    
    getStores(continentName){
        return this.http.get(`${this.baseUrl}/continent/${continentName}`).toPromise();
    }

    getStoreById(idStore){
        return this.http.get(`${this.baseUrl}/store/${idStore}`).toPromise();
    }

    insertStore(newStore){
        console.log(newStore);
        return this.http.post(`${this.baseUrl}/store`,newStore).toPromise();
    }

    getStoreBySlug(slug){
        let url=  `${this.baseUrl}/store/${slug}`
       return this.http.get(url).toPromise();
    }

    insertUser(newUser){
        return this.http.post(`${this.baseUrl}/user`, newUser).toPromise();
    }
    
    getUsers(){
        return this.http.get(`${this.baseUrl}/user`).toPromise();
    }
    insertComment(newComment){
        console.log(newComment);
        return this.http.post(`${this.baseUrl}/comments`, newComment).toPromise();
    }
    getAllComments(){
        return this.http.get(`${this.baseUrl}/comments`).toPromise();
    }
    getCommentsByStore(slug){
        return this.http.get(`${this.baseUrl}/comments/${slug}`).toPromise();
    }

}
