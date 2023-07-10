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
    this.bookService.search(this.searchField).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }
}
