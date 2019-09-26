import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhotosComponent } from "./photos/photos.component";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { FilterByDescription } from "./filter-by-description.pipe";
import { PhotoListComponent } from "./photo-list.component";
import { PhotoModule } from "../photo/photo.module";

@NgModule({
    declarations : [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription    
    ], 
    imports : [ 
        CommonModule,
        PhotoModule
    ]
})
export class PhotoListModule {}