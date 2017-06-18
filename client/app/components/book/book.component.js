"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var default_service_1 = require("../../service/default.service");
var BookComponent = (function () {
    function BookComponent(defaultService) {
        var _this = this;
        this.defaultService = defaultService;
        this.defaultService.getData("books")
            .subscribe(function (books) {
            _this.books = books;
        });
    }
    BookComponent.prototype.addBook = function ($event) {
        var _this = this;
        event.preventDefault();
        var newBook = {
            title: this.title,
            status: false
        };
        this.defaultService.sendData("book", newBook)
            .subscribe(function (book) {
            _this.books.push(book);
            _this.title = '';
        });
    };
    BookComponent.prototype.deleteBook = function (id) {
        var books = this.books;
        this.defaultService.deleteData('book', id)
            .subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < books.length; i++) {
                    if (books[i]._id == id) {
                        books.splice(i, 1);
                    }
                }
            }
        });
    };
    BookComponent.prototype.updateStatus = function (book) {
        var _book = {
            _id: book._id,
            title: book.title,
            status: !book.status
        };
        this.defaultService.updateData('book', _book)
            .subscribe(function (data) {
            book.status = !book.status;
        });
    };
    return BookComponent;
}());
BookComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'book',
        templateUrl: 'book.component.html'
    }),
    __metadata("design:paramtypes", [default_service_1.DefaultService])
], BookComponent);
exports.BookComponent = BookComponent;
//# sourceMappingURL=book.component.js.map