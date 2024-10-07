import { Component } from '@angular/core';
import { DepartmentService } from '../../services/departments/department.service';
import { DepartmentCreate } from '../department.interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.scss']
})
export class DepartmentCreateComponent {
  department: DepartmentCreate = {
    name: '',
    status: true
  };

  constructor(private departmentService: DepartmentService) {}

  createDepartment(): void {
    this.departmentService.createDepartment(this.department).subscribe({
      next: (response) => {
        alert('Department created successfully');
        this.resetForm(); // Limpiar el formulario después de la creación
      },
      error: (err) => console.error('Error creating department:', err)
    });
  }

  // Método para reiniciar el formulario
  resetForm(): void {
    this.department = { 
      name: '', 
      status: true
    }; // Reiniciamos con los valores por defecto
  }
}

