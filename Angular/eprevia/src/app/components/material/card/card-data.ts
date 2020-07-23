export class CardData{
    title : string    
    itens : CardItem[]

    constructor(title : string, itens : CardItem[]){
        this.title = title;
        this.itens = itens;
    }
}

export class CardItem{
    title : string;
    description : string
}