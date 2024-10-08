import { Component, OnInit } from '@angular/core';
import { JobPositionService } from '../../services/jobPositions/job-position.service';
import { JobPositionCreate } from '../job-position.interfaces';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute para obtener el id de la URL

@Component({
  selector: 'app-job-position-update',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './job-position-update.component.html',
  styleUrls: ['./job-position-update.component.scss']
})
export class JobPositionUpdateComponent implements OnInit {
  jobPosition: JobPositionCreate = {
    name: '',
    status: true
  };

  constructor(
    private jobPositionService: JobPositionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const jobPositionId = Number(this.route.snapshot.paramMap.get('id')); 
    this.jobPositionService.getJobPositionById(jobPositionId).subscribe({
      next: (response) => {
        console.log(response);
        this.jobPosition = {
          name: response.data.name,
          status: response.data.status
        };
      },
      error: (err) => console.error('Error fetching job position data:', err)
    });
  }

  updateJobPosition(): void {
    const jobPositionId = Number(this.route.snapshot.paramMap.get('id'));
    // Convertir el valor de status a un booleano explícitamente
    this.jobPosition.status = this.jobPosition.status === 'true' || this.jobPosition.status === true;
    console.log(this.jobPosition);

    this.jobPositionService.updateJobPosition(jobPositionId, this.jobPosition).subscribe({
      next: (response) => {
        console.log(response);
        this.resetForm(); // Limpiar el formulario después de la creación
        // Redirigir al dashboard de posiciones de trabajo después de la eliminación
        this.router.navigate(['/job-positions', jobPositionId]);
      },
      error: (err) => console.error('Error updating job position:', err)
    });
  }

  // Método para reiniciar el formulario
  resetForm(): void {
    this.jobPosition = { 
      name: '', 
      status: true
    }; // Reiniciamos con los valores por defecto
  }
}

