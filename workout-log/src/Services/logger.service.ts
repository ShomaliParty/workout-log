import { Injectable } from '@angular/core';
import { Workout } from '../Interfaces/workout';
import { Lift } from '../Interfaces/lift';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  history: Workout[] = [];

  constructor() { }

  saveWorkout(workout: Workout) {
    this.history.push(workout);
  }
  
}
