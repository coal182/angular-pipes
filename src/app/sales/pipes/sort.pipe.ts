import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(heroes: Hero[], orderBy: string = 'none'): Hero[] {
    switch (orderBy) {
      case 'name':
        return heroes.sort((a, b) => (a.name > b.name ? 1 : -1));
      case 'flies':
        return heroes.sort((a, b) => (a.flies > b.flies ? 1 : -1));
      case 'color':
        return heroes.sort((a, b) => (a.color > b.color ? 1 : -1));
      default:
        return heroes;
    }
  }
}
