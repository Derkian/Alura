import { BaseElement } from './base-element';

export class RadioElement extends BaseElement<string>{
    controlType = 'radio';
    options : {key : string, value : string} [] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
      }
}
