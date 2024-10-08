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

// JobPosition
import { JobPositionDashboardComponent } from './jobPosition/job-position-dashboard/job-position-dashboard.component';

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
        component: EmployeeDashboardComponent
    },
    {
        path: 'job-positions',
        component: JobPositionDashboardComponent
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
