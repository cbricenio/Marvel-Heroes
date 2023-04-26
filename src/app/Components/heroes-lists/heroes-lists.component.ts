import { Component, Input } from '@angular/core';
import { Heroes } from 'src/app/Interfaces/heroes';
import { HEROES } from 'src/app/Mock-Data/mock-heroes';


@Component({
  selector: 'app-heroes-lists',
  templateUrl: './heroes-lists.component.html',
  styleUrls: ['./heroes-lists.component.css']
})
export class HeroesListsComponent {
  hero: Heroes = {
    id: 1,
    name: 'Iron Man'
  };

  // Input
  @Input() item = ''; 

  // Mock Data
  heroes = HEROES;

  selectedHero?: Heroes;
  onSelect(hero: Heroes): void {
    this.selectedHero = hero;
  }

}
