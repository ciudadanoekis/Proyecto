import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Howl, Howler } from 'howler';
import { ApiService } from '../api.service';
=======
import * as $ from 'jquery';
>>>>>>> 2f10519bf903895b70b5bb29f7c78a5b96a21d52

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
<<<<<<< HEAD
    this.api.getSound().then((res)=>{
      this.track=res.json();
      this.song = this.track[0].track;
      console.log(this.song)

    })
    this.sound.play();
    
    this.sound.volume=0.0;
=======
    $('#hamburger-button').removeClass('hoverdark');
>>>>>>> 2f10519bf903895b70b5bb29f7c78a5b96a21d52
  }

}
