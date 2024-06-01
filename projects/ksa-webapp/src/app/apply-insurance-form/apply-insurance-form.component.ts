import { Component } from '@angular/core';
import { ApplyService } from '../apply.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-apply-insurance-form',
  templateUrl: './apply-insurance-form.component.html',
  styleUrls: ['./apply-insurance-form.component.css'],
})
export class ApplyInsuranceFormComponent {
  isEnglishDisplayed: boolean = true;

  constructor(private applyService: ApplyService) {}

  translate(): void {
    this.isEnglishDisplayed = !this.isEnglishDisplayed; // Toggle between languages
  }

  getButtonText(): string {
    return this.isEnglishDisplayed ? 'ଓଡ଼ିଆ' : 'English'; // Toggle button text based on current language
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const applicationData = { ...form.value }; // Collect form data

      this.applyService.submitApplication(applicationData).subscribe(
        (response) => {
          console.log('Application submitted successfully', response);
          window.alert('Your application has been submitted successfully.'); // Notify the user
          form.resetForm(); // Reset the form after successful submission
        },
        (error) => {
          console.error('Error submitting application', error);
          window.alert('There was an error submitting your application. Please try again later.'); // Notify the user about the error
        }
      );
    } else {
      console.warn('Form is invalid'); // Log invalid form status
      window.alert('Please fill out all required fields correctly before submitting.'); // Inform the user about form validation
    }
  }
}
