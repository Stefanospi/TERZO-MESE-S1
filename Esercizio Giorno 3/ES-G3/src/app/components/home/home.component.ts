// Importazione dell'interfaccia IPost dal percorso specificato
import { IPost } from './../../Models/i-post';

// Importazione dell'interfaccia IArticole dal percorso specificato
import { IArticole } from './../../Models/i-articole';

// Importazione del decoratore Component dal pacchetto @angular/core
import { Component } from '@angular/core';



// Definizione della classe HomeComponent con il decoratore @Component
@Component({
  // Il selettore per il componente, che può essere utilizzato nei template HTML
  selector: 'app-home',

  // L'URL del template per il componente
  templateUrl: './home.component.html',

  // L'URL del foglio di stile per il componente
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // URL dell'API da cui recuperare i dati
  apiUrl: string = '../../../assets/db.json';

  // Array per memorizzare gli articoli
  postArr: IPost[] = [];

  // Metodo chiamato quando il componente viene inizializzato
  ngOnInit() {
    // Richiamo il metodo getPost per recuperare i dati
    this.getPost();
  }

  // Metodo asincrono per recuperare i dati dall'API
  async getPost(): Promise<void> {
    // Richiedo i dati all'API utilizzando la funzione fetch
    let response = await fetch(this.apiUrl);

    // Convertendo la risposta in un oggetto JSON
    let posts = <IArticole>await response.json();

    // Assegnando gli articoli all'array postArr
    this.postArr = posts.posts;
  }
}
