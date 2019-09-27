import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhotosComponent } from "./photos/photos.component";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { FilterByDescription } from "./filter-by-description.pipe";
import { PhotoListComponent } from "./photo-list.component";
import { PhotoModule } from "../photo/photo.module";
import { CardModule } from "src/app/shared/component/card/card.module";
import { SearchComponent } from "./search/search.component";
import { DarkOnHolverModule } from "src/app/shared/directives/dark-on-hover/dark-on-hover.module";

@NgModule({
    declarations : [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent
    ], 
    imports : [ 
        CommonModule,
        PhotoModule,
        CardModule,
        DarkOnHolverModule
    ]
})
export class PhotoListModule {}