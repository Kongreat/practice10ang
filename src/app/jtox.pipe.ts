import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jtox'
})
export class JtoxPipe implements PipeTransform {
  jsonxml = require('jsontoxml');
  transform(value: any): any {
    return '<?xml version="1.0" encoding="UTF-8"?>' + '<root>' + this.jsonxml(value) + '</root>';
  }
}
