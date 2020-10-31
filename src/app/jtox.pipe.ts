import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jtox'
})
export class JtoxPipe implements PipeTransform {
  jsonxml = require('jsontoxml');
  transform(value: any): any {
    return this.jsonxml(value);
  }
}
