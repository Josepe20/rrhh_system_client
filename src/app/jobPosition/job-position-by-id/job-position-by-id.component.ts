import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { JobPositionService } from '../../services/jobPositions/job-position.service';
import { CommonModule } from '@angular/common';
import { JobPosition } from '../job-position.interfaces';
import { ActivatedRoute } from '@angular/router'; // Para obtener el id de la URL

@Component({
  selector: 'app-job-position-by-id',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './job-position-by-id.component.html',
  styleUrls: ['./job-position-by-id.component.scss']
})
export class JobPositionByIdComponent implements OnInit {
  jobPosition: JobPosition | null = null;
  jobPositionToDelete: JobPosition | null = null;

  constructor(
    private jobPositionService: JobPositionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const jobPositionId = Number(this.route.snapshot.paramMap.get('id'));
    this.jobPositionService.getJobPositionById(jobPositionId).subscribe({
      next: (data) => (this.jobPosition = data.data),
      error: (error) => console.error('Error fetching job position by id:', error)
    });
  }

  openDeleteModal(jobPosition: JobPosition): void {
    this.jobPositionToDelete = jobPosition; // Guardar la posición de trabajo a eliminar
  }

  confirmDelete(): void {
    if (this.jobPositionToDelete) {
      this.jobPositionService.deleteJobPosition(this.jobPositionToDelete.id).subscribe({
        next: () => {
          this.router.navigate(['/job-positions']);
        },
        error: (err) => {
          console.error('Error deleting job position:', err);
        }
      });
    }
  }

  cancelDelete(): void {
    this.jobPositionToDelete = null; // Cancelar eliminación
  }
}
