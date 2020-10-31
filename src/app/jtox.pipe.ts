import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jtox'
})
export class JtoxPipe implements PipeTransform {
  answer: string;
  transform(value: string): string {



    return null;
  }

}
