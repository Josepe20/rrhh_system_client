import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { EmployeeService } from '../../services/employees/employee.service';
import { CommonModule } from '@angular/common';
import { EmployeeResponse } from '../employee.interfaces';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute para obtener el id de la URL

@Component({
  selector: 'app-employee-by-id',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './employee-by-id.component.html',
  styleUrls: ['./employee-by-id.component.scss']
})
export class EmployeeByIdComponent implements OnInit {
  employee: EmployeeResponse | null = null;
  employeeToDelete: EmployeeResponse | null = null; 

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const employeeId = Number(this.route.snapshot.paramMap.get('id')); 
    this.employeeService.getEmployeeById(employeeId).subscribe({
      next: (data) => this.employee = data.data,
      error: (error) => console.error('Error fetching employee by id:', error)
    });
  }

  loadEmployee(): void {
    const employeeId = Number(this.route.snapshot.paramMap.get('id')); 
    this.employeeService.getEmployeeById(employeeId).subscribe({
      next: (data) => this.employee = data.data,
      error: (error) => console.error('Error fetching employee', error)
    });
  }

  openDeleteModal(employee: EmployeeResponse): void {
    this.employeeToDelete = employee; // Guardar el empleado a eliminar
  }

  confirmDelete(): void {
    if (this.employeeToDelete) {
      this.employeeService.deleteEmployee(this.employeeToDelete.id).subscribe({
        next: () => {
          // Redirigir al dashboard de empleados después de la eliminación
          this.router.navigate(['/employees']);
        },
        error: (err) => {
          console.error('Error deleting employee:', err);
        }
      });
    }
  }

  cancelDelete(): void {
    this.employeeToDelete = null; // Cancelar eliminación
  }
}


