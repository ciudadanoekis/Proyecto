import { Injectable} from '@angular/core';
import {UserDataList} from './user.service';
import { ApiService }  from './api.service';

@Injectable({ 
    providedIn : 'root'
})

export class AuthorizeUserService{
    zeroUser: any[];

    constructor(private fakeUser:UserDataList, private api: ApiService){
        
        this.api.getUsers().then((res)=>{
            console.log(res.json()); 
            this.zeroUser = res.json();
        })
        
        // this.fakeUser.datosUsers().then(res=>{
        //     this.zeroUser = res;
        // })
    }
    
    login(username:string, password:string){
        console.log(this.zeroUser)

        let elem = this.zeroUser.find((item) =>{
            return (item.username === username) && (item.password === password)
        })

        console.log(elem)

        if(elem === undefined){
            return false
        }else{
            localStorage.setItem('username', elem.userName)
            return true
        }
    }

    logout(){
        localStorage.removeItem('username');
    }
    getUser(){
        return localStorage.getItem('username');
    }
    isLoggedIn(){
        return this.getUser() !== null;
    }
}
export const AUTH_PROVIDERS: Array<any>=[
    {provide: AuthorizeUserService, useClass: AuthorizeUserService}
]
