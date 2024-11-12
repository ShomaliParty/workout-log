import { Component } from '@angular/core';
import { Workout } from '../../Interfaces/workout';
import { LoggerService } from '../../Services/logger.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  history: Workout[] = [];
  selectedWorkoutDate: Date = new Date();

  constructor(private loggerService: LoggerService) {
    this.history = loggerService.history;
  }

  toggleShowWorkout(date: Date): void {
    if (this.selectedWorkoutDate === date) {
      this.selectedWorkoutDate = new Date();
    } else this.selectedWorkoutDate = date;
  }

}
