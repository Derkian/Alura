import { BaseElement } from './base-element';


export class TextAreaElement extends BaseElement<string> {
    controlType = 'textarea';
    type : string;

    constructor( options : {} = {}){
        super(options);
        this.type = options['type'] || '';
    }
}
