import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButton
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'workout-log';
  constructor(private router: Router) {}
  navigateHome() {
    this.router.navigate(['/home']);
  }
  //ye
}
