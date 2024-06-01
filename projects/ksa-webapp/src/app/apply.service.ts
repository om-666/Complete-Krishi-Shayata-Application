import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplyService {
  private dbUrl = 'http://localhost:4000/apply'; // Correct endpoint for insurance applications

  constructor(private http: HttpClient) {}

  // Method to submit the insurance application
  submitApplication(application: any): Observable<any> {
    return this.http.post(this.dbUrl, application); // HTTP POST request to send application data
  }
}
