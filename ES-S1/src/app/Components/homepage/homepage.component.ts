import { IAutoArr,iAuto } from './../../Models/i-auto';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  apiUrl: string = '../../../assets/db.json';

  autoArr!:iAuto[];
  unBrandLogo!:string[];
  randomAutos!:iAuto[];

  ngOnInit(){
    this.getAuto();
  }

  async getAuto(): Promise<void>{
    const response = await fetch(this.apiUrl);
    const cars = <IAutoArr>await response.json();
    this.autoArr = cars;
    this.brandLogo();
    this.getRandomAuto();

  }

  /* FUNZIONE PER IL LOGO DEI BRAND */
  brandLogo(){
    this.unBrandLogo = [];
    this.autoArr.forEach((car) => {
      if(!this.unBrandLogo.includes(car.brandLogo)){
        this.unBrandLogo.push(car.brandLogo);
      }
    });
  }
  /* FUNZIONE PER GENERARE SOLO DUE CARDS */

  getRandomAuto() {
    this.randomAutos = [];
    for (let i = 0; i < 2; i++) {
      let randomIndex, selectedAuto;
      do {
        randomIndex = Math.floor(Math.random() * this.autoArr.length);
        selectedAuto = this.autoArr[randomIndex];
      } while (this.randomAutos.includes(selectedAuto));
      this.randomAutos.push(selectedAuto);
    }
    console.log('2 macchine random', this.randomAutos);
  }

}


