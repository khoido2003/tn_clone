import { Component, Input, OnInit } from '@angular/core';
import { ContentDetail } from 'src/app/models/content-detail.model';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrl: './content-detail.component.scss',
})
export class ContentDetailComponent implements OnInit {
  @Input() item?: ContentDetail;

  ngOnInit() {
    // console.log(this.item);
  }

  isOpenDiary = false;
  btnName?: string = 'Xem đầy đủ nhật ký';

  setBtnName() {
    this.isOpenDiary = !this.isOpenDiary;
    this.btnName = this.isOpenDiary === true ? 'Thu gọn' : 'Xem đầy đủ nhật ký';
  }

  itemsList = [1, 2, 3, 4];

  constructor() {}
}
