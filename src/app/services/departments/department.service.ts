import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepartmentCreate, Department } from '../../departments/department.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = 'http://localhost:5000/api/department';  // Update with your backend URL

  constructor(private http: HttpClient) {}

  getAllDepartments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  getDepartmentById(id: Number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createDepartment(departmentData: DepartmentCreate): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, departmentData);
  }

  updateDepartment(id: Number, updateDepartment: DepartmentCreate): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updateDepartment);
  }

  deleteDepartment(id: Number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
