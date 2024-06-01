import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {
  isEnglishDisplayed: boolean = true;

  translate(): void {
    this.isEnglishDisplayed = !this.isEnglishDisplayed;
  }

  getButtonText(): string {
    return this.isEnglishDisplayed ? 'ଓଡ଼ିଆ' : 'English';
  }

}
