import { Routes } from '@angular/router';
import { DepartmentDashboardComponent } from './departments/department-dashboard/department-dashboard.component';
import { EmployeeDashboardComponent } from './employees/employee-dashboard/employee-dashboard.component';
import { JobPositionDashboardComponent } from './jobPosition/job-position-dashboard/job-position-dashboard.component';

export const routes: Routes = [
  {
    path: 'departments',
    component: DepartmentDashboardComponent
  },
  {
    path: 'employees',
    component: EmployeeDashboardComponent
  },
  {
    path: 'job-positions',
    component: JobPositionDashboardComponent
  },
  {
    path: '', 
    redirectTo: '/', 
    pathMatch: 'full'
  },
];
