import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Crisis } from "../crisis";

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

  crisis: Crisis;  
  editName : string;

  constructor(private route: ActivatedRoute,
              private router: Router,) { }

  ngOnInit(): void {
  }

  gotoCrises(){
    // Relative navigation back to the crises
    let crisisId = this.crisis.id;

    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }

}
