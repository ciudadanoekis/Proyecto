import { Component, OnInit } from '@angular/core';
import { UserDataList} from '../user.service';
import { Http } from  '@angular/http';
import { ApiService } from '../api.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    userData:{};

  constructor(private fakeUsers : UserDataList, private api:ApiService) { 
   
  }

  ngOnInit() {
    $('#hamburger-button').removeClass('hoverdark');
  }

}
