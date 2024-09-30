import { Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { LoggerComponent } from '../Components/logger/logger.component';
import { HistoryComponent } from '../Components/history/history.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'logger', component: LoggerComponent },
    { path: 'history', component: HistoryComponent },
  ];