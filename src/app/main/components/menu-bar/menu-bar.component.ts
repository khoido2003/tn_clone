import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ContentDetail } from 'src/app/models/content-detail.model';
import { ContentDetailService } from 'src/app/services/content-detail.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss',
})
export class MenuBarComponent implements OnInit, OnChanges {
  menuItems = [
    'Vùng nguyên liệu',
    'Truy xuất nguồn gốc',
    'Thông tin sản phẩm',
    'Thông tin nhà sản xuất',
    'Đơn vị phân phối',
  ];
  activeTab = 1;
  items = ['1', '2'];

  data: ContentDetail[] = [];

  constructor(private contentDetailService: ContentDetailService) {
    contentDetailService.getAllData().subscribe((d) => {
      this.data = d;
      console.log(this.data[0]);
    });
  }

  ngOnInit(): void {
    this.getContentDetail();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getContentDetail();
  }

  setActiveTab(curActiveTab: number) {
    this.activeTab = curActiveTab;
  }

  getContentDetail() {
    this.contentDetailService.getAllData().subscribe((d) => (this.data = d));
  }

  test(inp: ContentDetail) {
    return JSON.stringify(inp);
  }
}
