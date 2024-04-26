import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-detail-header',
  templateUrl: './content-detail-header.component.html',
  styleUrl: './content-detail-header.component.scss',
})
export class ContentDetailHeaderComponent {
  @Input() header?: string;

  constructor() {
    this.test();
  }

  test() {
    console.log(this.header);
  }
}
