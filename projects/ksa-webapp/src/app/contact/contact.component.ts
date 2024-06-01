import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from "@emailjs/browser"


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isEnglishDisplayed: boolean = true;

  translate(): void {
    this.isEnglishDisplayed = !this.isEnglishDisplayed;
  }

  getButtonText(): string {
    return this.isEnglishDisplayed ? 'ଓଡ଼ିଆ' : 'English';
  }
  
  form: FormGroup = this.fb.group({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    message: ''
  });

  constructor(private fb: FormBuilder) { };

  async sendEmail() {
    emailjs.init('AC3MzEjZ6KMDkfRgQ');
    let response= await emailjs.send("service_zab7mwo","template_3yielno" ,{
      firstname: this.form.value.firstname,
      lastname: this.form.value.lastname,
      email: this.form.value.email,
      mobile: this.form.value.mobile,
      message: this.form.value.message
    }
  );
  alert("Email sent successfully")
  this.form.reset();
      
  


}

}
