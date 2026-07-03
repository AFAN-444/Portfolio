import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // 1. Menu ki open/close state track karne ke liye variable banaya
  isMenuOpen: boolean = false;

  // 2. Toggler icon par click karne se state badalne ka function
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // 3. Kisi bhi link par click karne par menu ko wapas chupanay ka function
  closeMenu(): void {
    this.isMenuOpen = false;
  }
}