import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SigInComponent } from "./signin/signin.component";
import { VMessageModule } from "../shared/component/vmessage/vmessage.module";

@NgModule({
    declarations : [ SigInComponent ],
    exports : [ SigInComponent ],
    imports : [ 
        ReactiveFormsModule, 
        CommonModule,
        VMessageModule,
        RouterModule
    ]
})
export class HomeModule {}