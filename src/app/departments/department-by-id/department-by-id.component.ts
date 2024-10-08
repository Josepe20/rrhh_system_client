import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { DepartmentService } from '../../services/departments/department.service';
import { CommonModule } from '@angular/common';
import { Department } from '../department.interfaces';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute para obtener el id de la URL

@Component({
  selector: 'app-department-by-id',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './department-by-id.component.html',
  styleUrls: ['./department-by-id.component.scss']
})
export class DepartmentByIdComponent implements OnInit {
  department: Department | null = null;
  departmentToDelete: Department | null = null; 

  constructor(
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const departmentId = Number(this.route.snapshot.paramMap.get('id')); 
    this.departmentService.getDepartmentById(departmentId).subscribe({
      next: (data) => this.department = data.data,
      error: (error) => console.error('Error fetching department by id:', error)
    });
  }

  loadDepartments(): void {
    const departmentId = Number(this.route.snapshot.paramMap.get('id')); 
    this.departmentService.getDepartmentById(departmentId).subscribe({
      next: (data) => this.department = data.data,
      error: (error) => console.error('Error fetching department', error)
    });
  }

  openDeleteModal(department: Department): void {
    this.departmentToDelete = department; // Guardar el departamento a eliminar
  }

  confirmDelete(): void {
    if (this.departmentToDelete) {
      this.departmentService.deleteDepartment(this.departmentToDelete.id).subscribe({
        next: () => {
          // Redirigir al dashboard de departamentos después de la eliminación
          this.router.navigate(['/departments']);
        },
        error: (err) => {
          console.error('Error deleting department:', err);
        }
      });
    }
  }

  cancelDelete(): void {
    this.departmentToDelete = null; // Cancelar eliminación
  }
}


