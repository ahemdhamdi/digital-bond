import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trancate'
})
export class TrancatePipe implements PipeTransform {

  transform(value: string, length: number): string | null {
    if (value && value.length > length) {
      return value.substring(0, length) + '...';
    }
    return value;
  }

}
