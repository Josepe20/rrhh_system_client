import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobPositionService {
  private apiUrl = 'http://localhost:5000/api/job_position';  // Update with your backend URL

  constructor(private http: HttpClient) {}

  getAllJobPositions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  getJobPositionById(id: Number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createJobPosition(jobPositionData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, jobPositionData);
  }

  updateJobPosition(id: Number, updateDepartment: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updateDepartment);
  }

  deleteJobPosition(id: Number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}

