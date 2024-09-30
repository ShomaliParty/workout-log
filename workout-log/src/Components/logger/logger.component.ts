import { Component } from '@angular/core';
import { LoggerService } from '../../Services/logger.service';
import { Workout } from '../../Interfaces/workout';
import { Lift } from '../../Interfaces/lift';
import { LiftService } from '../../Services/lift.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logger',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './logger.component.html',
  styleUrl: './logger.component.scss'
})
export class LoggerComponent {
  lift: Lift;
  workout: Workout;

  constructor(private loggerService: LoggerService, private liftService: LiftService) {
    this.lift = this.liftService.getEmptyLift();
    this.workout = this.liftService.getEmptyWorkout();
  }

  addLift(): void {
    this.workout.lifts.push(this.lift);
    this.lift = this.liftService.getEmptyLift();
  }

  saveWorkout(): void {
    this.loggerService.saveWorkout(this.workout);
    this.workout = this.liftService.getEmptyWorkout();
  }
}
