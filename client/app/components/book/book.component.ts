import { Component } from '@angular/core';
import {DefaultService} from "../../service/default.service";
import {Book} from "../../Data/Book";

declare let module: {
    id: string;
};

@Component({
    moduleId: module.id,
    selector: 'book',
    templateUrl: 'book.component.html'
})

export class BookComponent {
    books: Book[];
    title: string;

    constructor(private defaultService:DefaultService){
        this.defaultService.getData("books")
            .subscribe(books => {
                this.books = books;
            })
    }

    addBook($event){
        event.preventDefault();
        let newBook = {
            title: this.title,
            status: false
        };

        this.defaultService.sendData("book", newBook)
            .subscribe(book => {
                this.books.push(book);
                this.title = '';
            })
    }
    deleteBook(id){
        let books = this.books;

        this.defaultService.deleteData('book',id)
            .subscribe( data => {
                if(data.n == 1){
                    for(let i=0;i< books.length;i++){
                        if(books[i]._id == id){
                            books.splice(i, 1);
                        }
                    }
                }
            })
    }
    updateStatus(book){
        let _book = {
            _id: book._id,
            title: book.title,
            status: !book.status
        };
        this.defaultService.updateData('book', _book)
            .subscribe(data => {
                book.status = !book.status;
            })
    }
}