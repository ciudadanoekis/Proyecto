import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject(1);
  currentId = this.messageSource.asObservable();

  constructor() { }

  changeId(id: number) {
    this.messageSource.next(id)
  }

}