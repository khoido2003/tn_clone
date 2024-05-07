import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';
import {
  ContentDetail,
  ContentDetailUpdate,
} from 'src/app/models/content-detail.model';
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
  styleUrls: ['./content-detail-header.component.scss'],
})
export class ContentDetailHeaderComponent implements OnChanges, OnInit {
  @Input() header?: string;
  @Input() item?: ContentDetail;
  @Output() newItemEvent = new EventEmitter();

  // formGroup: FormGroup;
  newEditData = this.item;
  headerData = this.newEditData?.header;

  constructor(
    private contentDetailService: ContentDetailService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    // this.formGroup = this.formBuilder.group({
    //   header: this.item?.header,
    // });
  }

  ngOnInit(): void {
    this.newEditData = this.item;
    this.headerData = this.newEditData?.header;
  }

  triggerParentRerender() {
    this.newItemEvent.emit('re-render');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item'] && !changes['item'].firstChange) {
      // React to changes in 'item' input
      // For example, update form values or trigger other actions
      // this.updateFormGroup();
    }
  }

  onSubmit(id: string): void {
    const updatedData = {
      id: id,
      header: this.headerData!,
      steps: [...this.item!.steps],
    };

    console.log(updatedData);

    if (updatedData && this.item) {
      this.contentDetailService.updateData(updatedData, id).subscribe({
        next: () => {
          (this.item as ContentDetail) = updatedData!;
        },
        complete: () => {
          toast('Updated successfully!', {
            description:
              'Your data has been updated, close the notification to continue.',
            action: {
              label: 'Close',
              onClick: () => {
                this.router.navigate(['/']);
              },
            },
          });

          this.header = this.headerData;
        },
        error: () => {
          toast('Something went wrong!', {
            description:
              'Your data has not been updated, close the notification to continue.',
            action: {
              label: 'Close',
              onClick: () => {
                this.router.navigate(['/']);
              },
            },
          });
        },
      });
    }
  }

  deleteData(id: string) {
    this.contentDetailService.deleteData(id).subscribe({
      next: () => {
        toast('Deleted successfully!', {
          description:
            'Your data has been deleted, close the notification to continue.',
          action: {
            label: 'Close',
            onClick: () => {
              this.router.navigate(['/']);
              window.location.reload();
            },
          },
        });
        this.triggerParentRerender();
      },
      complete: () => {
        this.triggerParentRerender();
        window.location.reload();
      },
    });
  }

  reRender(e: Event): void {}

  getLabel(inp: Step): StepDetail[] {
    return Object.keys(inp) as StepDetail[];
  }

  getDetail(inp: StepDetail, step: Step) {
    return step[inp];
  }

  // private updateFormGroup(): void {
  //   if (this.item) {
  //     this.formGroup.patchValue({
  //       header: this.item.header,
  //     });
  //   }
  // }
}
