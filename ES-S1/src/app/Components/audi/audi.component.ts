import { Component } from '@angular/core';
import { IAutoArr, iAuto } from '../../Models/i-auto';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss',
})
export class AudiComponent {
  apiUrl: string = '../../../assets/db.json';

  autoArr!: iAuto[];
  unBrandLogo!: string;
  brand!: string;

  ngOnInit() {
    this.getAuto();
  }

  async getAuto(): Promise<void> {
    const response = await fetch(this.apiUrl);
    const cars: IAutoArr = await response.json();
    /* FUNZIONE PER PRENDERE SOLAMENTE LE CARS DELLO STESSO BRAND */
    this.autoArr = cars.filter((car) => car.brand === 'Audi');
    this.unBrandLogo = this.autoArr[0].brandLogo;
    this.brand = this.autoArr[0].brand;
    console.log('Macchina Audi', this.autoArr);
  }
}
