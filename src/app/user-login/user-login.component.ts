import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators} from '@angular/forms'
import { AuthorizeUserService } from '../authorizeUser.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
    message:string;
    constructor(public authorize : AuthorizeUserService){
      this.message = '';
    }

    login(username: string, password: string): boolean { 
        this.message = '';

      if (!this.authorize.login(username, password)) {
        this.message = 'Incorrect user-name or password'; setTimeout(function() {
        this.message = ''; }.bind(this), 2500);
    }
      return false; 
    }
    logout(): boolean { 
      this.authorize.logout(); 
      return false;
    }


  ngOnInit() {
  }

}
