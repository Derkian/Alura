import { BaseElement } from './base-element';


export class TextboxElement extends BaseElement<string> {
    controlType = 'textbox';
    type : string;

    constructor( options : {} = {}){
        super(options);
        this.type = options['type'] || '';
    }
}
