import { Component, OnInit } from '@angular/core';
import { DashboardData } from './dashboard-data';
import { CardData } from '../../../material/card/card-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  data : DashboardData[] = [
    { 
      title: 'Em Andamento', 
      iconLeft: 'query_builder', 
      bgColor : '#1dbd55', 
      totalRegister : 141, 
      count : 3, 
      cards : [ 
        new CardData(1, [ 
          { title : 'Veículo' , description : 'Gol TRACK 1.0 Mi Total Flex 8V 4p' },
          { title : 'Sinistro' , description : '202007221411' },
          { title : 'Solicitação' , description : '202007221411' },
          { title : 'Cliente' , description : 'JOSÉ DA SILVA' },
          { title : 'Placa' , description : 'TRN0907' }
        ]),
        new CardData(2, [ 
          { title : 'Veículo' , description : 'Gol TRACK 1.0 Mi Total Flex 8V 4p' },
          { title : 'Sinistro' , description : '202007221411' },
          { title : 'Solicitação' , description : '202007221411' },
          { title : 'Cliente' , description : 'JOSÉ DA SILVA' },
          { title : 'Placa' , description : 'TRN0907' }
        ]),
        new CardData(3, [ 
          { title : 'Veículo' , description : 'Gol TRACK 1.0 Mi Total Flex 8V 4p' },
          { title : 'Sinistro' , description : '202007221411' },
          { title : 'Solicitação' , description : '202007221411' },
          { title : 'Cliente' , description : 'JOSÉ DA SILVA' },
          { title : 'Placa' , description : 'TRN0907' }
        ])
      ]
    },
    { 
      title: 'Concluído', 
      iconLeft: 'assignment_turned_in', 
      bgColor : '#d63461', 
      totalRegister : 26, 
      count : 10 , 
      cards : [ 
        new CardData(1, [ 
          { title : 'Veículo' , description : 'Gol TRACK 1.0 Mi Total Flex 8V 4p' },
          { title : 'Sinistro' , description : '202007221411' },
          { title : 'Solicitação' , description : '202007221411' },
          { title : 'Cliente' , description : 'JOSÉ DA SILVA' },
          { title : 'Placa' , description : 'TRN0907' }
        ]),
        new CardData(1, [ 
          { title : 'Veículo' , description : 'Gol TRACK 1.0 Mi Total Flex 8V 4p' },
          { title : 'Sinistro' , description : '202007221411' },
          { title : 'Solicitação' , description : '202007221411' },
          { title : 'Cliente' , description : 'JOSÉ DA SILVA' },
          { title : 'Placa' , description : 'TRN0907' }
        ])
      ]
    },
    { 
      title: 'Sincronizado', 
      iconLeft: 'autorenew', 
      bgColor : '#5c67a5', 
      totalRegister : 12, 
      count :5, 
      cards : [ 
        new CardData(1, [ 
          { title : 'Veículo' , description : 'Gol TRACK 1.0 Mi Total Flex 8V 4p' },
          { title : 'Sinistro' , description : '202007221411' },
          { title : 'Solicitação' , description : '202007221411' },
          { title : 'Cliente' , description : 'JOSÉ DA SILVA' },
          { title : 'Placa' , description : 'TRN0907' }
        ]),
        new CardData(1, [ 
          { title : 'Veículo' , description : 'Gol TRACK 1.0 Mi Total Flex 8V 4p' },
          { title : 'Sinistro' , description : '202007221411' },
          { title : 'Solicitação' , description : '202007221411' },
          { title : 'Cliente' , description : 'JOSÉ DA SILVA' },
          { title : 'Placa' , description : 'TRN0907' }
        ]),
        new CardData(1, [ 
          { title : 'Veículo' , description : 'Gol TRACK 1.0 Mi Total Flex 8V 4p' },
          { title : 'Sinistro' , description : '202007221411' },
          { title : 'Solicitação' , description : '202007221411' },
          { title : 'Cliente' , description : 'JOSÉ DA SILVA' },
          { title : 'Placa' , description : 'TRN0907' }
        ]),
        new CardData(1, [ 
          { title : 'Veículo' , description : 'Gol TRACK 1.0 Mi Total Flex 8V 4p' },
          { title : 'Sinistro' , description : '202007221411' },
          { title : 'Solicitação' , description : '202007221411' },
          { title : 'Cliente' , description : 'JOSÉ DA SILVA' },
          { title : 'Placa' , description : 'TRN0907' }
        ]),
        new CardData(1, [ 
          { title : 'Veículo' , description : 'Gol TRACK 1.0 Mi Total Flex 8V 4p' },
          { title : 'Sinistro' , description : '202007221411' },
          { title : 'Solicitação' , description : '202007221411' },
          { title : 'Cliente' , description : 'JOSÉ DA SILVA' },
          { title : 'Placa' , description : 'TRN0907' }
        ])
      ]
    }    
  ];

  constructor(public router : Router) { }

  ngOnInit(): void {
  }

}
