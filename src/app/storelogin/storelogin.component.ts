import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-storelogin',
  templateUrl: './storelogin.component.html',
  styleUrls: ['./storelogin.component.scss']
})
export class StoreloginComponent implements OnInit {
  storeLog: FormGroup;
  constructor(private api:ApiService) { }

  ngOnInit() {
    $('#hamburger-button').removeClass('hoverdark');
    
    this.storeLog = new FormGroup({
      name : new FormControl('',
      [Validators.required]),

      city: new FormControl('',
      [Validators.required]),

      country : new FormControl('',
      [Validators.required]),

      continent : new FormControl('',
      [Validators.required]),

      description : new FormControl(''),

      address : new FormControl('',
      [Validators.required]),

      phonenumber : new FormControl(''),

      email : new FormControl(''),

      facebook : new FormControl(''),

      soundcloud : new FormControl(''),

      instagram : new FormControl(''),

      www : new FormControl(''),
    })
  }

  onStoreLog(){
    this.api.insertStore(this.storeLog.value).then((res)=>{
      this.storeLog.reset();
      console.log(res.json());
    
  })
}
}
