import { Routes } from '@angular/router';

// Home 
import { HomeComponent } from './home/home.component';

// Department
import { DepartmentDashboardComponent } from './departments/department-dashboard/department-dashboard.component';
import { DepartmentCreateComponent } from './departments/department-create/department-create.component';
import { DepartmentByIdComponent } from './departments/department-by-id/department-by-id.component';
import { DepartmentUpdateComponent } from './departments/department-update/department-update.component';

//Employee
import { EmployeeDashboardComponent } from './employees/employee-dashboard/employee-dashboard.component';
import { EmployeeCreateComponent } from './employees/employee-create/employee-create.component';
import { EmployeeByIdComponent } from './employees/employee-by-id/employee-by-id.component';
import { EmployeeUpdateComponent } from './employees/employee-update/employee-update.component';

// JobPosition
import { JobPositionDashboardComponent } from './jobPosition/job-position-dashboard/job-position-dashboard.component';
import { JobPositionCreateComponent } from './jobPosition/job-position-create/job-position-create.component';
import { JobPositionByIdComponent } from './jobPosition/job-position-by-id/job-position-by-id.component';
import { JobPositionUpdateComponent } from './jobPosition/job-position-update/job-position-update.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent // Render HomeComponent for root path
    },
    {
        path: 'departments',
        children: [
            { path: '', component: DepartmentDashboardComponent }, // Vista principal del dashboard
            { path: 'create', component: DepartmentCreateComponent }, // Crear nuevo departamento
            { path: ':id', component: DepartmentByIdComponent }, // Ruta dinámica para buscar por ID
            { path: ':id/update', component: DepartmentUpdateComponent }, // Ruta dinámica para buscar por ID
        ]
    },
    {
        path: 'employees',
        children: [
            { path: '', component: EmployeeDashboardComponent }, // Vista principal del dashboard
            { path: 'create', component: EmployeeCreateComponent }, // Crear nuevo departamento
            { path: ':id', component: EmployeeByIdComponent }, // Ruta dinámica para buscar por ID
            { path: ':id/update', component: EmployeeUpdateComponent }, // Ruta dinámica para buscar por ID
        ]
    },
    {
        path: 'job-positions',
        children: [
            { path: '', component: JobPositionDashboardComponent }, // Vista principal del dashboard
            { path: 'create', component: JobPositionCreateComponent }, // Crear nuevo departamento
            { path: ':id', component: JobPositionByIdComponent }, // Ruta dinámica para buscar por ID
            { path: ':id/update', component: JobPositionUpdateComponent }, // Ruta dinámica para buscar por ID
        ]
    },
    {
        path: '', 
        redirectTo: '/', 
        pathMatch: 'full',

    },
    {
        path: '**', 
        redirectTo: '/', 
        pathMatch: 'full',
    }
];
