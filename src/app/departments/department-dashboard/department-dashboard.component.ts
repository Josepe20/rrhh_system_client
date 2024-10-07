import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/departments/department.service';
import { CommonModule } from '@angular/common';
import { Department } from '../department.interfaces';


@Component({
  selector: 'app-department-dashboard',
  standalone: true,
  imports: [CommonModule],  // Import CommonModule to use *ngIf and *ngFor
  templateUrl: './department-dashboard.component.html',
  styleUrls: ['./department-dashboard.component.scss']
})
export class DepartmentDashboardComponent implements OnInit {
  departments: Department[] = [];

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.departmentService.getAllDepartments().subscribe({
      next: (data) => this.departments = data.data,
      error: (error) => console.error('Error fetching departments', error)
    });
  }
}

