import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cat } from '../Model/Cat.Model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent {

  displayBtnAdoptMe = true;

@Input() catsToAdoptListGift : Cat[] = []

@Output() addCatAdopted: EventEmitter<Cat> = new EventEmitter();
sendCatToAdoptedList(event: Cat){
this.addCatAdopted.emit(event)
};

}
