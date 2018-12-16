import { Component, OnInit } from '@angular/core';
// import { Howl, Howler } from 'howler';
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
    this.sound.play();
    
    this.sound.volume=0.5;
    $('#hamburger-button').removeClass('hoverdark');
  }

}
