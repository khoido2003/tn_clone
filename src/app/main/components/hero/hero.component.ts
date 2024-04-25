import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',

  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  data = {
    productName: 'Chè Tân Cương tôm nõn cao cấp',
    manufactor: 'CÔNG TY CỔ PHẦN CHÈ THÁI NGUYÊN',
    id: '123456789102',
    dateActivated: '17/01/2024',
    dateProduced: '05/01/2024',
    dateExpired: '18/01/2028',

    qualityInsurance: [
      {
        imgUrl: '../../../../assets/quality-1.jpg',
      },
      {
        imgUrl: '../../../../assets/quality-2.jpg',
      },
      {
        imgUrl: '../../../../assets/quality-3.jpg',
      },
    ],
  };
}
