import { Injectable } from '@angular/core';
import { Lift } from '../Interfaces/lift';
import { Workout } from '../Interfaces/workout';

@Injectable({
  providedIn: 'root'
})
export class LiftService {

  constructor() { }

  getEmptyLift(): Lift {
    return {
      name: '',
      weight: '',
      sets: '',
      reps: ''
    }
  }

  getEmptyWorkout(): Workout {
    return {
      lifts: [],
      date: new Date()
    }
  }
}
