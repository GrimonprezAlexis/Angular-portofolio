import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory',
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(items: any[], selectedCategory: string): any[] {
    if (!items || !selectedCategory) {
      return items;
    }

    return items.filter((item) => item.category === selectedCategory);
  }
}
