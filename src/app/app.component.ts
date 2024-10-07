import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DepartmentService } from './services/departments/department.service';
import { EmployeeService } from './services/employees/employee.service';
import { JobPositionService } from './services/jobPositions/job-position.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rrhh_system_client';
}

