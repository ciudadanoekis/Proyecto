import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-storelogin',
  templateUrl: './storelogin.component.html',
  styleUrls: ['./storelogin.component.scss']
})
export class StoreloginComponent implements OnInit {
  storeLog: FormGroup;
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.storeLog = new FormGroup({
      name : new FormControl('',
      [Validators.required]),

      city: new FormControl('',
      [Validators.required]),

      country : new FormControl('',
      [Validators.required]),

      continent : new FormControl('',
      [Validators.required]),

      description : new FormControl('',
      [Validators.required]),

      address : new FormControl('',
      [Validators.required]),

      phonenumber : new FormControl('',
      [Validators.required]),

      email : new FormControl('',
      [Validators.required,
        Validators.email]),
      
      rating : new FormControl('',
      [Validators.required]),

     longitude : new FormControl('',
     [Validators.required]),

     latitude : new FormControl('',
     [Validators.required]),

     facebook : new FormControl('',
     [Validators.required]),

     soundcloud : new FormControl('',
     [Validators.required]),

     instagram : new FormControl('',
     [Validators.required]),

     www : new FormControl('',
     [Validators.required]),
    })
  }

  onStoreLog(){
    this.api.insertStore(this.storeLog.value).then((res)=>{
      this.storeLog.reset();
      console.log(res.json());
    
  })
}
}
