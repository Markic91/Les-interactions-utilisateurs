import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cat } from '../Model/Cat.Model';

@Component({
  selector: 'app-kitten-card',
  templateUrl: './kitten-card.component.html',
  styleUrls: ['./kitten-card.component.css'],
})
export class KittenCardComponent {
  info = false;

  @Input() cat!: Cat;
  @Input() displayBtnAdoptCat = false;

  @Output() sendToAdoptedList: EventEmitter<Cat> = new EventEmitter();
  addCatToAdoptedList() {
    this.sendToAdoptedList.emit(this.cat);
  }
}
