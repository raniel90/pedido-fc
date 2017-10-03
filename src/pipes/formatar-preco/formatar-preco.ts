import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FormatarPrecoPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'formatarPreco',
})
export class FormatarPrecoPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.toLowerCase();
  }
}
