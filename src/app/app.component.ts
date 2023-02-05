import { Component } from '@angular/core';
import { catsToAdopt } from './cats';
import { Cat } from './Model/Cat.Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  catsToAdoptlist: Cat[] = catsToAdopt;

  catsAdopted : Cat[] = []

  addNewCat(event: Cat) {
    this.catsToAdoptlist.push(event);
  }

  receiveCatToAdopt(event: Cat) {
this.catsAdopted.push(event);
this.catsToAdoptlist.splice(this.catsToAdoptlist.indexOf(event), 1);
  }
}
