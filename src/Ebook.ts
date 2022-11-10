import{Book} from "./Book"

export class Ebook implements Book{
    size: number;

    constructor(size: number){
        this.size = size;
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