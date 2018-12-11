import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, Validator, FormGroup, FormControl, Validators} from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogForm : FormGroup;
  constructor(private api: ApiService) { 
    // this.userLogForm = 
  }

  ngOnInit() {
    this.userLogForm = new FormGroup({
      name: new FormControl('',
      [Validators.required]),

      surname: new FormControl('',
      [Validators.required]),

      username: new FormControl('',
      [Validators.required]),

      password: new FormControl('',
      [Validators.required]),

      city: new FormControl('',
      [Validators.required]),

      // dateOfBirth: new FormControl('',
      // [Validators.required ]),

      mail: new FormControl('',
      [Validators.required, 
       Validators.email
      ])
    })
  }
  onFormularioUsuario(){
    
   this.api.insertUser(this.userLogForm.value).then((res)=>{
     this.userLogForm.reset();
      console.log(res.json());
   })
  }
}
