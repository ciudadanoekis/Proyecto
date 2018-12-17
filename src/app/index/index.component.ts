import { Component, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';
import { ApiService } from '../api.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-index', 
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  track:{};
  song:string;
<<<<<<< HEAD
  sound: any;


  constructor(private api:ApiService) { 
   
   
  }

  ngOnInit() {


    var sound = new Howl({
      src: ['http://feeds.soundcloud.com/stream/285571923-ard2-b1-ard2_winter_clip.mp3'],

  });
      sound.once('load', function(){
        sound.play();
      });
  
    
    this.api.getSound().then((res)=>{
      this.track=res.json();
      console.log(this.track)
=======
  sound = new Audio("https://soundcloud.com/electronique-it-records/donato-dozzy-e-p-200-roma")
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getSound().then((res) => {
      this.track = res.json();
>>>>>>> 6d2c73f82b89aa01af544d737a4cf329aa0e91c4
      this.song = this.track[0].track;
      console.log(this.song);
      
        this.sound= new Audio('http://feeds.soundcloud.com/stream/285571923-ard2-b1-ard2_winter_clip.mp3')
        
        this.sound.play();
        this.sound.volume=0.5;
      
    })
<<<<<<< HEAD
    
   
    
    
  
    
=======

    this.sound.volume = 0.5;
>>>>>>> 6d2c73f82b89aa01af544d737a4cf329aa0e91c4
    
    $('#hamburger-button').removeClass('hoverdark');
    $('#overlay').delay(3000).slideUp(600);
  }

}
