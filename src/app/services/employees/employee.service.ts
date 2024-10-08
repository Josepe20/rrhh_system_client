import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeCreate } from '../../employees/employee.interfaces';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:5000/api/employee';  // Update with your backend URL

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  getEmployeeById(id: Number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createEmployee(employeeData: EmployeeCreate): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, employeeData);
  }

  updateEmployee(id: Number, updateDepartment: EmployeeCreate): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updateDepartment);
  }

  deleteEmployee(id: Number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
