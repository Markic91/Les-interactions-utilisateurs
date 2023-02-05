import { Component, Input } from '@angular/core';
import { Cat } from '../Model/Cat.Model';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css'],
})
export class UserKittenComponent {
  @Input() adoptedCats: Cat[] = [];
}
