import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  @Output() imagePathing: EventEmitter<any> = new EventEmitter();

  constructor() { }

  SendImage(image: any) {
    this.imagePathing.emit(image)
  }
}
