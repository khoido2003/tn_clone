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
  items = ['1', '2'];

  data: {
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
  }[] = [
    {
      header: 'Chế biến và đóng gói',
      title: 'Đóng gói',
      desc: 'Cân đúng khối lượng và đóng gói gạo thành phẩm. Lưu trữ gạo thành phẩm và chuẩn bị xuất khẩu phân phối.',
      time: '19/10/2023 lúc 17:20:37',
      recordBy: 'Công ty cổ phần Chè Việt Nam',
      imgData: [
        '../../../assets/hero-1.jpg',
        '../../../assets/hero-2.avif',
        '../../../assets/hero-3.jpg',
      ],

      diaryDetail: [
        {
          title: 'Lên men',
          desc: 'Lá chè sau khi lên men được nung chảy để ngừng quá trình oxy hóa và giữu màu sắc, hương vị ổn định',
          time: '10/10/2023 lúc 17:20:37',
          imgData: [
            '../../../assets/hero-1.jpg',
            '../../../assets/hero-2.avif',
            '../../../assets/hero-3.jpg',
          ],
        },

        {
          title: 'Nung chảy',
          desc: 'Lá chè sau khi lên men được nung chảy để ngừng quá trình oxy hóa và giữu màu sắc, hương vị ổn định',
          time: '15/10/2023 lúc 17:20:37',
          imgData: [
            '../../../assets/hero-1.jpg',
            '../../../assets/hero-2.avif',
            '../../../assets/hero-3.jpg',
          ],
        },

        {
          title: 'Cuốn bảo quản',
          desc: 'Lá chè sau khi lên men được nung chảy để ngừng quá trình oxy hóa và giữu màu sắc, hương vị ổn định',
          time: '20/10/2023 lúc 17:20:37',
          imgData: [
            '../../../assets/hero-1.jpg',
            '../../../assets/hero-2.avif',
            '../../../assets/hero-3.jpg',
          ],
        },

        {
          title: 'Sấy khô',
          desc: 'Lá chè sau khi lên men được nung chảy để ngừng quá trình oxy hóa và giữu màu sắc, hương vị ổn định',
          time: '20/10/2023 lúc 17:20:37',
          imgData: [
            '../../../assets/hero-1.jpg',
            '../../../assets/hero-2.avif',
            '../../../assets/hero-3.jpg',
          ],
        },
      ],
    },

    {
      header: '',
      title: 'Chế biến',
      desc: 'Chế biến trà bao gồm thu hoạch, lên men, nung chảy, cuốn bảo quản, và sấy khố để tạo ra sản phẩm...',
      time: '19/10/2023 lúc 17:20:37',
      recordBy: 'Công ty cổ phần Chè Việt Nam',
      imgData: [
        '../../../assets/hero-1.jpg',
        '../../../assets/hero-2.avif',
        '../../../assets/hero-3.jpg',
      ],

      diaryDetail: [
        {
          title: 'Lên men',
          desc: 'Lá chè sau khi lên men được nung chảy để ngừng quá trình oxy hóa và giữu màu sắc, hương vị ổn định',
          time: '10/10/2023 lúc 17:20:37',
          imgData: [
            '../../../assets/hero-1.jpg',
            '../../../assets/hero-2.avif',
            '../../../assets/hero-3.jpg',
          ],
        },

        {
          title: 'Nung chảy',
          desc: 'Lá chè sau khi lên men được nung chảy để ngừng quá trình oxy hóa và giữu màu sắc, hương vị ổn định',
          time: '15/10/2023 lúc 17:20:37',
          imgData: [
            '../../../assets/hero-1.jpg',
            '../../../assets/hero-2.avif',
            '../../../assets/hero-3.jpg',
          ],
        },

        {
          title: 'Cuốn bảo quản',
          desc: 'Lá chè sau khi lên men được nung chảy để ngừng quá trình oxy hóa và giữu màu sắc, hương vị ổn định',
          time: '20/10/2023 lúc 17:20:37',
          imgData: [
            '../../../assets/hero-1.jpg',
            '../../../assets/hero-2.avif',
            '../../../assets/hero-3.jpg',
          ],
        },

        {
          title: 'Sấy khô',
          desc: 'Lá chè sau khi lên men được nung chảy để ngừng quá trình oxy hóa và giữu màu sắc, hương vị ổn định',
          time: '20/10/2023 lúc 17:20:37',
          imgData: [
            '../../../assets/hero-1.jpg',
            '../../../assets/hero-2.avif',
            '../../../assets/hero-3.jpg',
          ],
        },
      ],
    },

    {
      header: 'Sản xuất nguyên liệu',
      title: 'Thu hoạch',
      desc: 'Hái lá chè, nụ chè và các bộ phận khác để sản xuất trà',
      time: '19/10/2023 lúc 17:20:37',
      recordBy: 'Hộ nông dân ông Trần Đình Nện',
      imgData: [
        '../../../assets/hero-1.jpg',
        '../../../assets/hero-2.avif',
        '../../../assets/hero-3.jpg',
      ],

      diaryDetail: [
        {
          title: 'Lên men',
          desc: 'Lá chè sau khi lên men được nung chảy để ngừng quá trình oxy hóa và giữu màu sắc, hương vị ổn định',
          time: '10/10/2023 lúc 17:20:37',
          imgData: [
            '../../../assets/hero-1.jpg',
            '../../../assets/hero-2.avif',
            '../../../assets/hero-3.jpg',
          ],
        },

        {
          title: 'Nung chảy',
          desc: 'Lá chè sau khi lên men được nung chảy để ngừng quá trình oxy hóa và giữu màu sắc, hương vị ổn định',
          time: '15/10/2023 lúc 17:20:37',
          imgData: [
            '../../../assets/hero-1.jpg',
            '../../../assets/hero-2.avif',
            '../../../assets/hero-3.jpg',
          ],
        },

        {
          title: 'Cuốn bảo quản',
          desc: 'Lá chè sau khi lên men được nung chảy để ngừng quá trình oxy hóa và giữu màu sắc, hương vị ổn định',
          time: '20/10/2023 lúc 17:20:37',
          imgData: [
            '../../../assets/hero-1.jpg',
            '../../../assets/hero-2.avif',
            '../../../assets/hero-3.jpg',
          ],
        },

        {
          title: 'Sấy khô',
          desc: 'Lá chè sau khi lên men được nung chảy để ngừng quá trình oxy hóa và giữu màu sắc, hương vị ổn định',
          time: '20/10/2023 lúc 17:20:37',
          imgData: [
            '../../../assets/hero-1.jpg',
            '../../../assets/hero-2.avif',
            '../../../assets/hero-3.jpg',
          ],
        },
      ],
    },

    {
      header: '',
      title: 'Chăm sóc',
      desc: 'Chăm sóc cây trè bao gồm việc tưới nước đều, bón phân đúng lịch trình, kiểm soát sâu bệnh, cắt tỉa',
      time: '19/10/2023 lúc 17:20:37',
      recordBy: 'Hộ nông dân ông Trần Đình Nện',
      imgData: [
        '../../../assets/hero-1.jpg',
        '../../../assets/hero-2.avif',
        '../../../assets/hero-3.jpg',
      ],

      diaryDetail: [
        {
          title: 'Lên men',
          desc: 'Lá chè sau khi lên men được nung chảy để ngừng quá trình oxy hóa và giữu màu sắc, hương vị ổn định',
          time: '10/10/2023 lúc 17:20:37',
          imgData: [
            '../../../assets/hero-1.jpg',
            '../../../assets/hero-2.avif',
            '../../../assets/hero-3.jpg',
          ],
        },

        {
          title: 'Nung chảy',
          desc: 'Lá chè sau khi lên men được nung chảy để ngừng quá trình oxy hóa và giữu màu sắc, hương vị ổn định',
          time: '15/10/2023 lúc 17:20:37',
          imgData: [
            '../../../assets/hero-1.jpg',
            '../../../assets/hero-2.avif',
            '../../../assets/hero-3.jpg',
          ],
        },

        {
          title: 'Cuốn bảo quản',
          desc: 'Lá chè sau khi lên men được nung chảy để ngừng quá trình oxy hóa và giữu màu sắc, hương vị ổn định',
          time: '20/10/2023 lúc 17:20:37',
          imgData: [
            '../../../assets/hero-1.jpg',
            '../../../assets/hero-2.avif',
            '../../../assets/hero-3.jpg',
          ],
        },

        {
          title: 'Sấy khô',
          desc: 'Lá chè sau khi lên men được nung chảy để ngừng quá trình oxy hóa và giữu màu sắc, hương vị ổn định',
          time: '20/10/2023 lúc 17:20:37',
          imgData: [
            '../../../assets/hero-1.jpg',
            '../../../assets/hero-2.avif',
            '../../../assets/hero-3.jpg',
          ],
        },
      ],
    },

    {
      header: '',
      title: 'Phân lô / luống',
      desc: 'Chia nhỏ đất thành các đơn vị quản lý, với thông tin chi tiết về các loại phương pháp canh tác',
      time: '19/10/2023 lúc 17:20:37',
      recordBy: 'Hộ nông dân ông Trần Đình Nện',
      imgData: [
        '../../../assets/hero-1.jpg',
        '../../../assets/hero-2.avif',
        '../../../assets/hero-3.jpg',
      ],

      diaryDetail: [
        {
          title: 'Lên men',
          desc: 'Lá chè sau khi lên men được nung chảy để ngừng quá trình oxy hóa và giữu màu sắc, hương vị ổn định',
          time: '10/10/2023 lúc 17:20:37',
          imgData: [
            '../../../assets/hero-1.jpg',
            '../../../assets/hero-2.avif',
            '../../../assets/hero-3.jpg',
          ],
        },

        {
          title: 'Nung chảy',
          desc: 'Lá chè sau khi lên men được nung chảy để ngừng quá trình oxy hóa và giữu màu sắc, hương vị ổn định',
          time: '15/10/2023 lúc 17:20:37',
          imgData: [
            '../../../assets/hero-1.jpg',
            '../../../assets/hero-2.avif',
            '../../../assets/hero-3.jpg',
          ],
        },

        {
          title: 'Cuốn bảo quản',
          desc: 'Lá chè sau khi lên men được nung chảy để ngừng quá trình oxy hóa và giữu màu sắc, hương vị ổn định',
          time: '20/10/2023 lúc 17:20:37',
          imgData: [
            '../../../assets/hero-1.jpg',
            '../../../assets/hero-2.avif',
            '../../../assets/hero-3.jpg',
          ],
        },

        {
          title: 'Sấy khô',
          desc: 'Lá chè sau khi lên men được nung chảy để ngừng quá trình oxy hóa và giữu màu sắc, hương vị ổn định',
          time: '20/10/2023 lúc 17:20:37',
          imgData: [
            '../../../assets/hero-1.jpg',
            '../../../assets/hero-2.avif',
            '../../../assets/hero-3.jpg',
          ],
        },
      ],
    },
  ];

  constructor() {}

  setActiveTab(curActiveTab: number) {
    this.activeTab = curActiveTab;
  }
}
