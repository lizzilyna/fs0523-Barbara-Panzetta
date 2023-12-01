import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filter: any): any {
    if (!items || !filter || !Array.isArray(items)) {
      return items;
    }

    return items.filter(item => item.completed === filter.completed || item.completedTemp === filter.completed);
  }
}