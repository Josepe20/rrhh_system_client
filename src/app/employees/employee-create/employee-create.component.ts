import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employees/employee.service';
import { DepartmentService } from '../../services/departments/department.service';
import { JobPositionService } from '../../services/jobPositions/job-position.service';
import { EmployeeCreate } from '../employee.interfaces';
import { Department } from '../../departments/department.interfaces';
import { JobPosition } from '../../jobPosition/job-position.interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-employee-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './employee-create.component.html',
  styleUrl: './employee-create.component.scss'
})
export class EmployeeCreateComponent implements OnInit {
  employee: EmployeeCreate = {
    department_id: 0,
    job_position_id: 0,
    first_name: "",
    last_name: "",
    address: "",
    birth_date: null,
  };

  departments: Department[] = [];

  jobPositions: JobPosition[] = [];

  constructor(
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private jobPositionService: JobPositionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.departmentService.getAllDepartments().subscribe({
      next: (data) => this.departments = data.data,
      error: (error) => console.error('Error fetching departments', error)
    });

    this.jobPositionService.getAllJobPositions().subscribe({
      next: (data) => this.jobPositions = data.data,
      error: (error) => console.error('Error fetching job positions', error)
    });
  }

  createEmployee(): void {
    this.employeeService.createEmployee(this.employee).subscribe({
      next: (response) => {
        this.resetForm(); // Limpiar el formulario después de la creación
        // Redirigir al dashboard de departamentos después de la eliminación
        this.router.navigate(['/employees']);
      },
      error: (err) => console.error('Error creating department:', err)
    });
  }

  // Método para reiniciar el formulario
  resetForm(): void {
    this.employee = {
      department_id: 0,
      job_position_id: 0,
      first_name: "",
      last_name: "",
      address: "",
      birth_date: null,
    }; // Reiniciamos con los valores por defecto
  }
}

