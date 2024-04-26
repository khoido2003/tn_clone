import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-diary',
  templateUrl: './detail-diary.component.html',
  styleUrl: './detail-diary.component.scss',
})
export class DetailDiaryComponent {
  @Input() curIndex!: number;

  @Input() diary?: {
    title: string;
    desc: string;
    time: string;
    imgData: string[];
  };
}
