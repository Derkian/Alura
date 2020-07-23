import { Component, OnInit } from '@angular/core';

export interface Content {
  title: string,
  iconLeft : string,
  bgColor : string,  
  totalRegister : number,
  count: number,
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  content : Content[] = [
    { title: 'Em Andamento', iconLeft: 'query_builder', bgColor : '#1dbd55', totalRegister : 141, count : 3 },
    { title: 'Concluído', iconLeft: 'assignment_turned_in', bgColor : '#d63461', totalRegister : 26, count : 10 },
    { title: 'Sincronizado', iconLeft: 'autorenew', bgColor : '#5c67a5', totalRegister : 12, count :5 }    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
