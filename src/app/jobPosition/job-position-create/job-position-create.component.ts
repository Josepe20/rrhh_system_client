import { Component } from '@angular/core';
import { JobPositionService } from '../../services/jobPositions/job-position.service';
import { JobPositionCreate } from '../job-position.interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-job-position-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './job-position-create.component.html',
  styleUrls: ['./job-position-create.component.scss']
})
export class JobPositionCreateComponent {
  jobPosition: JobPositionCreate = {
    name: '',
    status: true
  };

  constructor(
    private jobPositionService: JobPositionService,
    private router: Router
  ) {}

  createJobPosition(): void {
    this.jobPosition.status = this.jobPosition.status === 'true' || this.jobPosition.status === true;

    this.jobPositionService.createJobPosition(this.jobPosition).subscribe({
      next: (response) => {
        this.resetForm(); // Limpiar el formulario después de la creación
        this.router.navigate(['/job-positions']); // Redirigir al dashboard de job positions
      },
      error: (err) => console.error('Error creating job position:', err)
    });
  }

  // Método para reiniciar el formulario
  resetForm(): void {
    this.jobPosition = {
      name: '',
      status: true
    }; // Reiniciar con los valores por defecto
  }
}

