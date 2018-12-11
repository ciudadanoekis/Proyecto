import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comentario: string; 
  constructor() { }
    
  ngOnInit() {
  }

  onComments(parrafada){
    console.log(parrafada);
  }

}
