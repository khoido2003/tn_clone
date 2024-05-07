import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ContentDetail } from 'src/app/models/content-detail.model';
import { ContentDetailService } from 'src/app/services/content-detail.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrl: './content-detail.component.scss',
})
export class ContentDetailComponent implements OnInit, OnChanges {
  @Input() item?: ContentDetail;
  @Output() newEvent = new EventEmitter();

  handleEvent(event: string, id: string) {
    console.log(event);
    this.newEvent.emit(event);
    this.contentDetailService.getData(id);
  }

  ngOnInit() {
    // console.log(this.item);
  }

  ngOnChanges(changes: SimpleChanges): void {}

  isOpenDiary = false;
  btnName?: string = 'Xem đầy đủ nhật ký';

  setBtnName() {
    this.isOpenDiary = !this.isOpenDiary;
    this.btnName = this.isOpenDiary === true ? 'Thu gọn' : 'Xem đầy đủ nhật ký';
  }

  itemsList = [1, 2, 3, 4];

  constructor(private readonly contentDetailService: ContentDetailService) {}
}
