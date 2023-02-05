import { Component, EventEmitter, Output } from '@angular/core';
import { Cat } from '../Model/Cat.Model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css'],
})
export class CreateKittenComponent {
  newCat: Cat = { race: '', name: '', birth: new Date(), imgCat: '' };

  @Output() sendNewCatToApp: EventEmitter<Cat> = new EventEmitter();

  createNewCat() {
    this.sendNewCatToApp.emit(this.newCat);
    this.newCat = { race: '', name: '', birth: new Date(), imgCat: '' };
  }
}
