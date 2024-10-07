import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/departments/department.service';
import { DepartmentCreate } from '../department.interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute para obtener el id de la URL

@Component({
  selector: 'app-department-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './department-update.component.html',
  styleUrl: './department-update.component.scss'
})
export class DepartmentUpdateComponent implements OnInit {
  department: DepartmentCreate = {
    name: '',
    status: true
  };

  constructor(
    private departmentService: DepartmentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const departmentId = Number(this.route.snapshot.paramMap.get('id')); 
    this.departmentService.getDepartmentById(departmentId).subscribe({
      next: (response) => {
        console.log(response);
        this.department = {
          name: response.data.name,
          status: response.data.status
        };
      },
      error: (err) => console.error('Error fetching department data:', err)
    });
  }

  updateDepartment(): void {
    const departmentId = Number(this.route.snapshot.paramMap.get('id')); 
    this.departmentService.updateDepartment(departmentId, this.department).subscribe({
      next: (response) => {
        alert('Department updated successfully');
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
