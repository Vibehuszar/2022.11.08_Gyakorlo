
import { PaperBook } from "./PaperBook";
import { Ebook } from "./Ebook";
import { Book } from "./Book";

let lista: Book[] = [];

document.addEventListener('DOMContentLoaded', () => {
    
    let paperbook = document.getElementById('paperbook') as HTMLInputElement;
    let ebook = document.getElementById('ebook') as HTMLInputElement;
    let cim = document.getElementById('cim') as HTMLInputElement;
    let ar = document.getElementById('ar') as HTMLInputElement;
    let suly = document.getElementById('suly') as HTMLInputElement;
    let meret = document.getElementById('meret') as HTMLInputElement;
    let isbn = document.getElementById('isbn') as HTMLInputElement;
    
    document.getElementById('paperbook')?.addEventListener('change', () =>{ 
        if(paperbook.checked){
            meret.disabled = true;
            meret.placeholder = "";
            suly.disabled = false;
            suly.placeholder = "Könyv súlya"
        }
    
    });
    document.getElementById('ebook')?.addEventListener('change', () =>{

        if(ebook.checked){
            meret.disabled = false;
            meret.placeholder = "Könyv mérete";
            suly.disabled = true;
            suly.placeholder = ""
        } 
    });

    document.getElementById('felvetel')?.addEventListener('click', () =>{
        if(paperbook.checked){
        
        }
    })
});



