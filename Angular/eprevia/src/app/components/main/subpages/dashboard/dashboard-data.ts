import { CardData } from '../../../material/card/card-data';

export interface DashboardData {
    title: string,
    iconLeft : string,
    bgColor : string,  
    totalRegister : number,
    count: number,
    cards : CardData[]
  }