import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JobPositionService } from '../../services/jobPositions/job-position.service';
import { CommonModule } from '@angular/common';
import { JobPosition } from '../job-position.interfaces';

@Component({
  selector: 'app-job-position-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './job-position-dashboard.component.html',
  styleUrl: './job-position-dashboard.component.scss'
})
export class JobPositionDashboardComponent implements OnInit {
  jobPositions: JobPosition[] = [];
  jobPositionToDelete: JobPosition | null = null;

  constructor(private jobPositionService: JobPositionService) {}

  ngOnInit(): void {
    this.jobPositionService.getAllJobPositions().subscribe({
      next: (data) => this.jobPositions = data.data,
      error: (error) => console.error('Error fetching departments', error)
    });
  }

  loadJobPositions(): void {
    this.jobPositionService.getAllJobPositions().subscribe({
      next: (data) => this.jobPositions = data.data,
      error: (error) => console.error('Error fetching departments', error)
    });
  }

  openDeleteModal(jobPosition: JobPosition): void {
    this.jobPositionToDelete = jobPosition; // Guardar el departamento a eliminar
  }

  confirmDelete(): void {
    if (this.jobPositionToDelete) {
      this.jobPositionService.deleteJobPosition(this.jobPositionToDelete.id).subscribe({
        next: () => {
          this.loadJobPositions(); // Recargar la lista de departamentos después de la eliminación
          this.jobPositionToDelete = null; // Limpiar la selección
        },
        error: (err) => {
          console.error('Error deleting job position:', err);
          this.jobPositionToDelete = null; // Limpiar la selección
        }
      });
    }
  }

  cancelDelete(): void {
    this.jobPositionToDelete = null; // Cancelar eliminación
  }
}


