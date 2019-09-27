import { NgModule } from "@angular/core";
import { DarkOnHolverDirective } from "./dark-on-hover.directive";

@NgModule({
    declarations : [ DarkOnHolverDirective],
    exports : [ DarkOnHolverDirective ]
})

export class DarkOnHolverModule {}