import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../../services/employees/employee.service';
import { CommonModule } from '@angular/common';
import { EmployeeResponse } from '../employee.interfaces';

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {
  employees: EmployeeResponse[] = [];
  employeeToDelete: EmployeeResponse | null = null;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => this.employees = data.data,
      error: (error) => console.error('Error fetching employees', error)
    });
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => this.employees = data.data,
      error: (error) => console.error('Error fetching employees', error)
    });
  }

  openDeleteModal(employee: EmployeeResponse): void {
    this.employeeToDelete = employee; // Guardar el empleado a eliminar
  }

  confirmDelete(): void {
    if (this.employeeToDelete) {
      this.employeeService.deleteEmployee(this.employeeToDelete.id).subscribe({
        next: () => {
          this.loadEmployees(); // Recargar la lista de empleados después de la eliminación
          this.employeeToDelete = null;
          //window.location.reload(); // Limpiar la selección
        },
        error: (err) => {
          console.error('Error deleting employee:', err);
          this.employeeToDelete = null; // Limpiar la selección
        }
      });
    }
  }

  cancelDelete(): void {
    this.employeeToDelete = null; // Cancelar eliminación
  }
}

