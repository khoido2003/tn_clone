import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContentDetail } from 'src/app/models/content-detail.model';
import { ContentDetailService } from 'src/app/services/content-detail.service';

export interface Step {
  title: string;
  description: string;
  time: string;
  recordBy: string;
  imgData: string[];
  diaryDetail: {
    title: string;
    description: string;
    time: string;
    imgData: string[];
  }[];
}

enum StepDetail {
  title = 'title',
  description = 'description',
  time = 'time',
  recordBy = 'recordBy',
  imgData = 'imgData',
  diaryDetail = 'diaryDetail',
}

@Component({
  selector: 'app-content-detail-header',
  templateUrl: './content-detail-header.component.html',
  styleUrl: './content-detail-header.component.scss',
})
export class ContentDetailHeaderComponent {
  @Input() header?: string;
  @Input() item?: ContentDetail;

  constructor(
    private contentDetailService: ContentDetailService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(data: any): void {
    console.log(data);
  }
  test() {
    // console.log(this.item);
  }

  getLabel(inp: Step): StepDetail[] {
    return Object.keys(inp) as StepDetail[];
  }

  getDetail(inp: StepDetail, step: Step) {
    return step[inp];
  }
}
