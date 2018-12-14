import { Component, OnInit, Input, Output } from '@angular/core';
import { ListadoService } from 'src/app/listado.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from "../../api.service";
import {  DataService } from '../../storeIdData.service';
import { MENSAJE } from '../../actions';
import { IAppState } from '../../store';
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

  storeId:number;
  idTienda:string;
  

  constructor(private datos: ListadoService, private activatedRoute: ActivatedRoute, private api:ApiService) {

    

//     this.datos.datosPrueba().then(resultado => {
//       this.resultado = resultado
//       // console.log(this.resultado)
//     })

    this.activatedRoute.params.subscribe((params) => {
      this.continentName = params.continent;
      this.idTienda = params.id;
      // console.log(this.idTienda)

      this.api.getStores(this.continentName).then((res)=>{
        this.resultado= res.json();
      })
    })
  }
  
  ngOnInit() {

  }

  storeSelection(store){
    this.idTienda=store;
    // console.log(this.idTienda)
    
    }
  
    
  
 

}
