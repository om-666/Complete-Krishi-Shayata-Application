import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComplaintService {
  private dbUrl = 'http://localhost:4000/complaints'; // Correct endpoint

  constructor(private http: HttpClient) {}

  submitComplaint(complaint: any): Observable<any> {
    return this.http.post(this.dbUrl, complaint); // Ensure POST request with form data
  }
}
