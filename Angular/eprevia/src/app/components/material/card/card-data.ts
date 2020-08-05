export class CardData{
    id : number    
    itens : CardItem[]

    constructor(id : number, itens : CardItem[]){
        this.id = id;
        this.itens = itens;
    }
}

export class CardItem{
    title : string;
    description : string
}