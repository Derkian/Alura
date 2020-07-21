import { BaseElement } from './base-element';

export class DropdownElement extends BaseElement<string> {
    controlType = 'dropdown';
    options : {key : string , value : string} [] = [];

    constructor(options : {} = {}){
        super(options);
        this.options = options['options'] || [];        
    }
}
