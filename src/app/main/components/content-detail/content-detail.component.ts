import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrl: './content-detail.component.scss',
})
export class ContentDetailComponent {
  @Input() item?: {
    header: string;
    title: string;
    desc: string;
    time: string;
    recordBy: string;
    imgData: string[];
    diaryDetail: {
      title: string;
      desc: string;
      time: string;
      imgData: string[];
    }[];
  };

  isOpenDiary = false;
  btnName?: string = 'Xem đầy đủ nhật ký';

  setBtnName() {
    this.isOpenDiary = !this.isOpenDiary;
    this.btnName = this.isOpenDiary === true ? 'Thu gọn' : 'Xem đầy đủ nhật ký';
  }

  itemsList = [1, 2, 3, 4];

  constructor() {}
}
