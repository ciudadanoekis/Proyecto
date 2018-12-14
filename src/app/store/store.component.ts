import { Component, OnInit } from '@angular/core';
import { AuthorizeUserService } from '../authorizeUser.service';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { IAppState } from './../store';

@Component({
     selector: 'app-store',
     templateUrl: './store.component.html',
     styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
     storeSlug:string;
     store:any;
     idTienda:number;
     comentario:string;
     comments:any;
     lat: number = 39.4618;
     lng: number = -0.36814;

     constructor(public authService: AuthorizeUserService, private api: ApiService, private activatedRoute: ActivatedRoute)  {
          
          this.activatedRoute.params.subscribe((params) => {
              
               
               this.api.getStoreBySlug(params.slug).then((res)=>{                    
                   this.store = res.json();
                   
                   localStorage.setItem('storeId', this.store.id)
               }) 

               this.api.getCommentsByStore(params.slug).then((res)=>{
                    this.comments = res.json();
                    console.log(this.comments);
               })

          })

          // this.api.getAllComments().then((res)=>{
          //      this.comments = res.json();
          //      console.log(this.comments)
          // })

          

          
     }

     ngOnInit() {}

     recibeComments(comentario){
         
          console.log(comentario); 
     }
     

     
}
