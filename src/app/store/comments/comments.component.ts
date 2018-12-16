import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comentario: {};
  storeSlug: string;
  userId: string;
  texto: string;
  comentado:string;
  @Output() desdeComentarios = new EventEmitter()

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params.slug)

      this.storeSlug = params.slug
    })
  }

  ngOnInit() {
  }

  onComments(parrafada) {
    this.userId = localStorage.getItem('userId');
    //this.storeId = localStorage.getItem('storeId');
    this.comentario = {
      fUser: parseInt(this.userId),
      fSlug : this.storeSlug,
      comment: parrafada
    }

    this.api.insertComment(this.comentario).then(res =>{

      // this.comentado = res.json().comment;
      //     console.log(res.json())
      // this.desdeComentarios.emit(this.comentado);
  
    })
      this.desdeComentarios.emit(parrafada);
  }

}
