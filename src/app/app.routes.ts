import { Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { TaskManager } from './task-manager/task-manager';

export const routes: Routes = [
  { path: 'dashboard', component: TaskManager },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' },
];
