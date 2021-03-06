import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})

export class PhotoListComponent implements OnInit {
  
  hasMore : boolean = true;
  userName : string = '';
  currentPage : number = 1;
  photos : Photo[] = [];
  filter : string = '';

  constructor(private activatedRoute: ActivatedRoute,
              private photoService : PhotoService){}    
  
  ngOnInit(): void {    
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data.photos;
  }

  load(){
      
      this.photoService
          .listFromUserPaginetad(this.userName, ++this.currentPage)
          .subscribe(photos => {
              this.photos = this.photos.concat(photos);

              if (!photos.length) this.hasMore = false;
          });
  }
}
