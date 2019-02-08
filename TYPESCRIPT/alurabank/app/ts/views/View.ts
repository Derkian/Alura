export abstract class View<T> {

    private _elemento : JQuery;
    private _escape : boolean;

    constructor(seletor : string, escapar: boolean = false) {
        
        this._elemento = $(seletor);
        this._escape = escapar;
    }    

    update(model : T){

        let template = this.template(model);

        if(!this._escape)   
            template = template.replace(/<script>[\s\$]*?<\/script>/g,'')

        this._elemento.html(template);
    }

    abstract template(modelo : T): string;
}
