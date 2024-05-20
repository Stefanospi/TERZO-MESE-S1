const costoChiamata = 0.20




interface Telefono {
  creditoResiduo: number;
  numeroChiamate: number;
}

class User implements Telefono {
  constructor(public name: string,public surname: string, public creditoResiduo:number, public numeroChiamate:number) {}
  
  /* FUNZIONE RICARICA */
  ricarica(importo: number): void {
    this.creditoResiduo += importo;
    console.log(`${this.name} ha ricaricato ${importo} e il suo credito residuo è ${this.creditoResiduo}`);
  }
  /* FUNZIONE CHIAMATA */
  chiamata(minutiChiamata: number): void {
    if(minutiChiamata){
        this.creditoResiduo = this.creditoResiduo - costoChiamata;
        console.log(`il credito residuo di ${this.name} è ${this.creditoResiduo}`);
    }

  }

}

const userUno = new User("Mario", "Rossi", 100, 10);
userUno.ricarica(10);

userUno.chiamata(10);


