import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(value: string, wordCount: number = 0): any {
    const words = value.split(/ /);
    return words.slice(0, wordCount).join(' ');
  }

}
