import { Component, OnInit, Input, Output } from '@angular/core';
import { ListadoService } from 'src/app/listado.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from "../../api.service";
import { Subject } from 'rxjs';
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

  storeId:number;
  idTienda:string;
  
  dtTrigger = new Subject();

  constructor(private datos: ListadoService, private activatedRoute: ActivatedRoute, private api:ApiService) {

    

//     this.datos.datosPrueba().then(resultado => {
//       this.resultado = resultado
//       // console.log(this.resultado)
//     })

    this.activatedRoute.params.subscribe((params) => {
      this.continentName = params.continent
      // console.log(this.continentName)

      
    })
  }
  
  ngOnInit() {
    this.api.getStores(this.continentName).then((res) => {
      this.resultado = res.json();
      this.dtTrigger.next();
    })
  }

  storeSelection(store){
    this.idTienda=store;
    // console.log(this.idTienda)
    
    }
  
    
  
 

}
