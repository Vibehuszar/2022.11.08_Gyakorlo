"use strict";
/*import { PaperBook } from "./PaperBook";
import { Ebook } from "./Ebook";
import { Book } from "./Book";

let lista: Book[] = [];*/
document.addEventListener('DOMContentLoaded', () => {
    var _a, _b;
    let paperbook = document.getElementById('paperbook');
    let ebook = document.getElementById('ebook');
    let cim = document.getElementById('cim');
    let ar = document.getElementById('ar');
    let suly = document.getElementById('suly');
    let meret = document.getElementById('meret');
    let isbn = document.getElementById('isbn');
    (_a = document.getElementById('paperbook')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', () => {
        if (paperbook.checked) {
            meret.disabled = true;
            meret.placeholder = "";
            suly.disabled = false;
            suly.placeholder = "Könyv súlya";
        }
    });
    (_b = document.getElementById('ebook')) === null || _b === void 0 ? void 0 : _b.addEventListener('change', () => {
        if (ebook.checked) {
            meret.disabled = false;
            meret.placeholder = "Könyv mérete";
            suly.disabled = true;
            suly.placeholder = "";
        }
    });
});
