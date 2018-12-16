import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Howl, Howler } from 'howler';
=======
// import { Howl, Howler } from 'howler';
>>>>>>> e4b2f9f0f04167a05cf5a07144055bd740b8597c
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
  sound = new Audio("http://feeds.soundcloud.com/stream/285571923-ard2-b1-ard2_winter_clip.mp3")
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getSound().then((res)=>{
      this.track=res.json();
      this.song = this.track[0].track;
      console.log(this.song)
    })

    
    
<<<<<<< HEAD
    this.sound.volume=0.0;
=======
    this.sound.volume=0.5;
>>>>>>> e4b2f9f0f04167a05cf5a07144055bd740b8597c
    $('#hamburger-button').removeClass('hoverdark');
  }

}
