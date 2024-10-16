import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const EXERCISE_NAMES = [
    'Squat', 'Deadlift', 'Calf raises', 'Leg curls', 'Jumps', 'Cleans',
    'Barbell bench press', 'Dumbbell bench press', 'Barbell incline press', 'Dumbbell incline press',
    'Barbell OHP', 'Dumbbell OHP',
    'Pull ups', 'Barbell Rows', 'Cable rows', 'T-bar rows', 'Pulldowns',
    'Lateral raises', 'Rear delt flies', 'Face pulls',
    'Biceps curls', 'Triceps extensions',
    'Leg raises', 'Ab wheel rollout', 'Ball crunches', 'Oblique twists'
]

export function exerciseNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const isValid = EXERCISE_NAMES.includes(control.value);
        return isValid ? null : { invalidExerciseName: { value: control.value } };
    }
}