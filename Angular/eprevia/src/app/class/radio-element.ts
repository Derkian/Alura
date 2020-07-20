import { ElementBase } from './element-base';

export class RadioElement extends ElementBase<string>{
    controlType = 'radio';
    options : {key : string, value : string} [] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
      }
}
