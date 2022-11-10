import{Book} from "./Book"

export class PaperBook implements Book{
    weight: number;

    constructor(weight: number){
        this.weight = weight;
    }

    get title(){
        return this.title};
    set title(title: string){
        this.title = this.title;
    }

    get price(){
        return this.price};
    set price(title: number){
        this.price = this.price;
    }

    get isbn(){
        return this.isbn};
    set isbn(title: string){
        this.isbn = this.isbn;
    }

}