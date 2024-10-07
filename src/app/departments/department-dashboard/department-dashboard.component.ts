import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DepartmentService } from '../../services/departments/department.service';
import { CommonModule } from '@angular/common';
import { Department } from '../department.interfaces';


@Component({
  selector: 'app-department-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './department-dashboard.component.html',
  styleUrls: ['./department-dashboard.component.scss']
})
export class DepartmentDashboardComponent implements OnInit {
  departments: Department[] = [];
  departmentToDelete: Department | null = null;

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.departmentService.getAllDepartments().subscribe({
      next: (data) => this.departments = data.data,
      error: (error) => console.error('Error fetching departments', error)
    });
  }

  loadDepartments(): void {
    this.departmentService.getAllDepartments().subscribe({
      next: (data) => this.departments = data.data,
      error: (error) => console.error('Error fetching departments', error)
    });
  }

  openDeleteModal(department: Department): void {
    this.departmentToDelete = department; // Guardar el departamento a eliminar
  }

  confirmDelete(): void {
    if (this.departmentToDelete) {
      this.departmentService.deleteDepartment(this.departmentToDelete.id).subscribe({
        next: () => {
          alert(`Department '${this.departmentToDelete?.name}' deleted successfully`);
          this.loadDepartments(); // Recargar la lista de departamentos después de la eliminación
          this.departmentToDelete = null; // Limpiar la selección
        },
        error: (err) => {
          console.error('Error deleting department:', err);
          this.departmentToDelete = null; // Limpiar la selección
        }
      });
    }
  }

  cancelDelete(): void {
    this.departmentToDelete = null; // Cancelar eliminación
  }
}

