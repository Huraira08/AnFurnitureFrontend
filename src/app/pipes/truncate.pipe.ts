import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, length: number): string {
    // if(value == '')return '';
    // const lines = value.split('.');
    // return lines[0]+'...';
    return value.substring(0, length) + '...';
  }

}
