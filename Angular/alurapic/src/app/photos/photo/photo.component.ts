import { Component, Input } from "@angular/core";

@Component({
    templateUrl : 'photo.component.html',
    selector : 'ap-photo'
})

export class PhotoComponent {
    @Input() url : '';
    @Input() description : '';
}