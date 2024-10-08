import { Component } from '@angular/core';
import { DepartmentService } from '../../services/departments/department.service';
import { DepartmentCreate } from '../department.interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-department-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.scss']
})
export class DepartmentCreateComponent {
  department: DepartmentCreate = {
    name: '',
    status: true
  };

  constructor(
    private departmentService: DepartmentService,
    private router: Router
  ) {}

  createDepartment(): void {
    this.department.status = this.department.status === 'true' || this.department.status === true;
    console.log(this.department);

    this.departmentService.createDepartment(this.department).subscribe({
      next: (response) => {
        this.resetForm(); // Limpiar el formulario después de la creación
        // Redirigir al dashboard de departamentos después de la eliminación
        this.router.navigate(['/departments']);
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

