import { Component } from '@angular/core';
import { ComplaintService } from '../complaint.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-complain-form',
  templateUrl: './complain-form.component.html',
  styleUrls: ['./complain-form.component.css'],
})
export class ComplainFormComponent {
  isEnglishDisplayed: boolean = true;

  constructor(private complaintService: ComplaintService) {}

  translate(): void {
    this.isEnglishDisplayed = !this.isEnglishDisplayed;
  }

  getButtonText(): string {
    return this.isEnglishDisplayed ? 'ଓଡ଼ିଆ' : 'English';
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      // Collect all form data
      const complaintData = { ...form.value };

      this.complaintService.submitComplaint(complaintData).subscribe(
        (response) => {
          console.log('Form submitted successfully', response);
          // Alert user of successful submission
          window.alert('Your complaint has been submitted successfully.');
          form.resetForm(); // Optionally reset the form after submission
        },
        (error) => {
          console.error('Error submitting form', error);
          window.alert('There was an error submitting your complaint. Please try again later.');
        }
      );
    } else {
      console.warn('Form is invalid');
      window.alert('Please fill out all required fields correctly before submitting.');
    }
  }
}
