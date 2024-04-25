import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  toggle: boolean = false;
  currentLanguage: string = 'Tiếng Việt';
  isSearch: boolean = false;
  toggleSearchTimeout: any;

  setToggle() {
    this.toggle = !this.toggle;
  }

  setLanguage(language: string) {
    this.currentLanguage = language;
  }

  toggleSearch() {
    // Clear previous timeout if exists
    if (this.toggleSearchTimeout) {
      clearTimeout(this.toggleSearchTimeout);
    }

    // Add a small timeout before toggling the isSearch variable
    this.toggleSearchTimeout = setTimeout(() => {
      this.isSearch = !this.isSearch;
    }, 100); // Adjust the timeout duration as needed
  }
}
