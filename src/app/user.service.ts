
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:"root"
})

export class UserDataList{
    userData: any[];
    constructor(){
        this.userData= [
            { name : 'Harry', userName : 'dirty', password : '1', residency : 'Madrid', dOb : '21/03/1996', email : 'harry@gmail.com' },
            { name : 'Betty', userName : 'bPlus', password : '2', residency : 'Berlin', dOb : '01/08/2000', email : 'betty@gmail.com' },
            { name : 'Ron', userName : 'moreRon', password : '3', residency : 'London', dOb : '26/10/2006', email : 'ron@gmail.com' },
            { name : 'Sara', userName : 'theSSA', password : 'C432432', residency : 'Barcelona', dOb : '24/02/1986', email : 'sara@gmail.com' },
            { name : 'Steve', userName : 'Vent', password : 'G4242432', residency : 'Bristol', dOb : '15/07/2002', email : 'steve@gmail.com' },
            { name : 'Martha', userName :'Marta', password : 'h7842432', residency : 'Paris', dOb : '18/03/2000', email : 'martha@gmail.com' },
            { name : 'Leo', userName : 'Turtle', password : 'P4242432', residency : 'Rome', dOb : '05/02/1979', email : 'leo@gmail.com' },
            { name : 'Laila', userName : 'Flam', password : 'X4342432', residency : 'Bruselas', dOb : '04/03/1999', email : 'laila@gmail.com' }
        ]  
    }
    datosUsers(){
        return Promise.resolve(this.userData);
    }
}