System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(seletor, escapar = false) {
                    this._elemento = $(seletor);
                    this._escape = escapar;
                }
                update(model) {
                    let template = this.template(model);
                    if (!this._escape)
                        template = template.replace(/<script>[\s\$]*?<\/script>/g, '');
                    this._elemento.html(template);
                }
            };
            exports_1("View", View);
        }
    };
});
