import { Component } from '@angular/core';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent {
  listaLivros: [];
  searchField: string = '';

  constructor(private bookService: BookService) {}

  searchBooks() {
    this.bookService.search(this.searchField).subscribe({
      next: dataReturned => console.log(dataReturned), //success case. It returns values (string, number, object, etc).
      error: err => console.log(err),
      complete: () => console.log("'Complete' does not run in error case! It stops in error case.")
    });
  }
}
