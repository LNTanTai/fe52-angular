import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'n'
})
export class NPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
