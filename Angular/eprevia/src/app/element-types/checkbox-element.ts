import { BaseElement } from './base-element';

export class CheckboxElement extends BaseElement<string>{
    controlType = 'checkbox';
    type : string;

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
      }
}
