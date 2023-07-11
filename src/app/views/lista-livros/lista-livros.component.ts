import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent implements OnDestroy {

  listaLivros: [];
  searchField: string = '';
  subscription: Subscription;

  constructor(private bookService: BookService) {}

  ngOnDestroy(): void {
    //release resource to avoid memory leak
    console.log("Resouce was released because the Unsubscribe has been done!");
    this.subscription.unsubscribe();
  }

  searchBooks() {
    this.subscription = this.bookService.search(this.searchField).subscribe({
      next: dataReturned => console.log(dataReturned), //success case. It returns values (string, number, object, etc).
      error: err => console.log(err),
      complete: () => console.log("'Complete' does not run in error case! It stops in error case.")
    });


  }
}
