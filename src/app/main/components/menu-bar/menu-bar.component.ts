import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ContentDetail } from 'src/app/models/content-detail.model';
import { ContentDetailService } from 'src/app/services/content-detail.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss',
})
export class MenuBarComponent implements OnInit {
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
  filteredData: ContentDetail[] = [];

  constructor(private contentDetailService: ContentDetailService) {
    contentDetailService.getAllData().subscribe((d) => {
      this.data = d;
      console.log(this.data);
    });
  }

  searchQuery: string = '';

  filterData(event: any): void {
    const value = this.searchQuery.toLowerCase(); // Convert input value to lowercase for case-insensitive filtering

    if (value) {
      this.filteredData = this.data
        .map((d) => {
          return {
            ...d,
            steps: d.steps.filter(
              (v) =>
                v.title.toLowerCase().includes(value) ||
                v.description.toLowerCase().includes(value) ||
                v.recordBy.toLowerCase().includes(value)
            ),
          };
        })
        .filter((d) => d.steps.length > 0); // Remove entries without matching steps
    } else {
      this.filteredData = this.data;
    }
  }

  ngOnInit(): void {
    this.getContentDetail();
    this.filteredData = this.data;
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

  reFetchData(event: string) {
    console.log(event);

    console.log(this.data);
  }
}
