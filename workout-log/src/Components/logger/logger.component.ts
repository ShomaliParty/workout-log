import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatAutocomplete, MatAutocompleteModule, MatOption } from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';
import { LoggerService } from '../../Services/logger.service';
import { Workout } from '../../Interfaces/workout';
import { Lift } from '../../Interfaces/lift';
import { LiftService } from '../../Services/lift.service';
import { EXERCISE_NAMES, exerciseNameValidator } from '../../Const/exercise_utils'

@Component({
  selector: 'app-logger',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
    MatAutocomplete,
    MatAutocompleteModule,
    MatOption,
    ReactiveFormsModule,
  ],
  templateUrl: './logger.component.html',
  styleUrl: './logger.component.scss'
})
export class LoggerComponent {
  // some modification
  lift: Lift;
  workout: Workout;
  exerciseNames = EXERCISE_NAMES;
  filteredOptions: Observable<string[]>;
  form: FormGroup;

  constructor(private loggerService: LoggerService, private liftService: LiftService, private fb: FormBuilder) {
    this.lift = this.liftService.getEmptyLift();
    this.workout = this.liftService.getEmptyWorkout();
    this.form = this.fb.group({
      name: ['', [Validators.required, exerciseNameValidator()]],
      weight: ['', [Validators.required]],
      sets: ['', [Validators.required]],
      reps: ['', [Validators.required]],
    });
    this.filteredOptions = this.form.get("name")!.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.exerciseNames.filter(option => option.toLowerCase().includes(filterValue));
  }

  addLift(): void {
    this.mapLift();
    console.log(this.form);
    if (this.form.valid) {
      this.workout.lifts.push(this.lift);
      this.lift = this.liftService.getEmptyLift();
    }
  }

  private mapLift(): void {
    this.lift.name = this.form.get("name")?.value || '';
    this.lift.weight = this.form.get("weight")?.value || '';
    this.lift.sets = this.form.get("sets")?.value || '';
    this.lift.reps = this.form.get("reps")?.value || '';
  }

  saveWorkout(): void {
    this.loggerService.saveWorkout(this.workout);
    this.workout = this.liftService.getEmptyWorkout();
    this.form.reset();
  }

  isNameDisplayed(name: string, currentIndex: number): boolean {
    return this.workout.lifts
      .slice(0, currentIndex)
      .some(lift => lift.name === name);
  }
}
