"use strict";
const costoChiamata = 0.20;
class User {
    constructor(name, surname, creditoResiduo, numeroChiamate) {
        this.name = name;
        this.surname = surname;
        this.creditoResiduo = creditoResiduo;
        this.numeroChiamate = numeroChiamate;
    }
    /* FUNZIONE RICARICA */
    ricarica(importo) {
        this.creditoResiduo += importo;
        console.log(`${this.name} ha ricaricato ${importo} e il suo credito residuo è ${this.creditoResiduo}`);
    }
    /* FUNZIONE CHIAMATA */
    chiamata(minutiChiamata) {
        if (minutiChiamata) {
            this.creditoResiduo = this.creditoResiduo - costoChiamata;
            console.log(`il credito residuo di ${this.name} è ${this.creditoResiduo}`);
        }
    }
}
const userUno = new User("Mario", "Rossi", 100, 10);
userUno.ricarica(10);
userUno.chiamata(10);
