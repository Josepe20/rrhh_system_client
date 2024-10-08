import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employees/employee.service';
import { DepartmentService } from '../../services/departments/department.service';
import { JobPositionService } from '../../services/jobPositions/job-position.service';
import { EmployeeCreate } from '../employee.interfaces';
import { Department } from '../../departments/department.interfaces';
import { JobPosition } from '../../jobPosition/job-position.interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employee-update',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './employee-update.component.html',
  styleUrl: './employee-update.component.scss'
})
export class EmployeeUpdateComponent {
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
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const employeeId = Number(this.route.snapshot.paramMap.get('id'));

    this.employeeService.getEmployeeById(employeeId).subscribe({
      next: (response) => {
        console.log(response);
        this.employee = {
          department_id: response.data.department.id,
          job_position_id: response.data.job_position.id,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          address: response.data.address,
          birth_date: response.data.birth_date,
        };
      },
      error: (err) => console.error('Error fetching department data:', err)
    });
    
    this.departmentService.getAllDepartments().subscribe({
      next: (data) => this.departments = data.data,
      error: (error) => console.error('Error fetching departments', error)
    });

    this.jobPositionService.getAllJobPositions().subscribe({
      next: (data) => this.jobPositions = data.data,
      error: (error) => console.error('Error fetching job positions', error)
    });
  }

  updateEmployee(): void {
    const employeeId = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.updateEmployee(employeeId, this.employee).subscribe({
      next: (response) => {
        this.resetForm(); // Limpiar el formulario después de la creación
        // Redirigir al dashboard de departamentos después de la eliminación
        this.router.navigate(['/employees', employeeId]);
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
