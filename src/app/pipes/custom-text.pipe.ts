import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customText'
})
export class CustomTextPipe implements PipeTransform {

  transform(value: number): any {
    return value * 2;
  }

}
