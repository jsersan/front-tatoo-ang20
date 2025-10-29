import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: false
})
export class HeaderComponent {
  
  constructor(private router: Router) { }
  
  // Método para navegar a la página principal
  goToHome(): void {
    this.router.navigate(['/']);
  }
}
