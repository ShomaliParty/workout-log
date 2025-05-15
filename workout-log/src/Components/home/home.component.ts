import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // changes in home.component.ts!
  
  constructor(private router: Router) {}
  
  startLoggingClicked(): void {
    this.router.navigate(['/logger']);
  }
  
  viewLogsClicked() {
    this.router.navigate(['/history']);
  }
}
