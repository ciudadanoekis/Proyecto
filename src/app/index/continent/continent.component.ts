import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { ListadoService } from 'src/app/listado.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from "../../api.service";
import { Subject } from 'rxjs';
import {  DataService } from '../../storeIdData.service';
import { MENSAJE } from '../../actions';
import { IAppState } from '../../store';
import * as $ from 'jquery';
 @Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.scss']
})

export class ContinentComponent implements OnInit {

  datosLista: [];
  resultado: {} ;
  continentName: string;
  recordId:number;

  @ViewChild('dtElement') dtElement;

  storeId:number;
  idTienda:string;
  
  // dtTrigger = new Subject();

  constructor(private datos: ListadoService, private activatedRoute: ActivatedRoute, private api:ApiService) {

    

//     this.datos.datosPrueba().then(resultado => {
//       this.resultado = resultado
//       // console.log(this.resultado)
//     })

    
  }
  
  ngOnInit() {
    console.log('ENTRA')

    this.activatedRoute.params.subscribe((params) => {
      this.continentName = params.continent;
      this.idTienda = params.id;
      console.log('ENTRA CONSTRUCTOR')

      

      this.api.getStores(this.continentName).then((res) => {
          this.resultado = res.json();
          console.log('RESULTADO', this.resultado)
          // this.dtTrigger.next();
        })
      // console.log(this.idTienda)

      
    })
    // this.api.getStores(this.continentName).then((res) => {
    //   this.resultado = res.json();
    //   console.log('RESULTADO', this.resultado)
    //   this.dtTrigger.next();
    // })

    $('#hamburger-button').removeClass('hoverdark');
  }

  // ngOnDestroy(){
  //   console.log('NGONDESTROY')
  //   this.dtTrigger.unsubscribe()
  // }

  storeSelection(store){
    this.idTienda=store;
    // console.log(this.idTienda)
    
    }
  
    
  
 

}
