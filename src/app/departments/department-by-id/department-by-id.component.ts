import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
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

  constructor(
    private departmentService: DepartmentService,
    private route: ActivatedRoute 
  ) {}

  ngOnInit(): void {
    const departmentId = Number(this.route.snapshot.paramMap.get('id')); 
    console.log("departmentId : ",departmentId)
    this.departmentService.getDepartmentById(departmentId).subscribe({
      next: (data) => this.department = data.data,
      error: (error) => console.error('Error fetching department by id:', error)
    });
  }
}


