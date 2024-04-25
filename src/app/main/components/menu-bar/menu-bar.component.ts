import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss',
})
export class MenuBarComponent {
  menuItems = [
    'Vùng nguyên liệu',
    'Truy xuất nguồn gốc',
    'Thông tin sản phẩm',
    'Thông tin nhà sản xuất',
    'Đơn vị phân phối',
  ];
  activeTab = 1;
  items = [1, 2, 3, 4];
  setActiveTab(curActiveTab: number) {
    this.activeTab = curActiveTab;
  }
}
