import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.css'
})
export class FeatureCardComponent {
  isEnglishDisplayed: boolean = true;

  translate(): void {
    this.isEnglishDisplayed = !this.isEnglishDisplayed;
  }

  getButtonText(): string {
    return this.isEnglishDisplayed ? 'ଓଡ଼ିଆ' : 'English';
  }


  
  audio1: HTMLAudioElement | null = null;
  audio2: HTMLAudioElement | null = null;
  audio3: HTMLAudioElement | null = null;
  audio4: HTMLAudioElement | null = null;
  audio5: HTMLAudioElement | null = null;
  audio6: HTMLAudioElement | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.audio1 = new Audio();
      this.audio1.src = './assets/check-application-status.mp3'; // Path to your first audio file
      this.audio2 = new Audio();
      this.audio2.src = './assets/crop-loss.mp3'; // Path to your second audio file
      this.audio3 = new Audio();
      this.audio3.src = './assets/krishi-mitra.mp3'; // Path to your third audio file
      this.audio4 = new Audio();
      this.audio4.src = './assets/crop-loss-verification.mp3'; // Path to your fourth audio file
      this.audio5 = new Audio();
      this.audio5.src = './assets/premium-calculator.mp3'; // Path to your fifth audio file
      this.audio6 = new Audio();
      this.audio6.src = './assets/apply-insurance.mp3'; // Path to your sixth audio file
    }
  }
  

  playAudio(): void {
    if (this.audio1) {
      this.audio1.play();
    }
  }

  playAudio1(): void {
    if (this.audio2) {
      this.audio2.play();
    }
  }

  playAudio2(): void {
    if (this.audio3) {
      this.audio3.play();
    }
  }
  playAudio3(): void {
    if (this.audio4) {
      this.audio4.play();
    }
  }

  playAudio4(): void {
    if (this.audio5) {
      this.audio5.play();
    }
  }

  playAudio5(): void {
    if (this.audio6) {
      this.audio6.play();
    }
  }

  pauseAudio(): void {
    if (this.audio1) {
      this.audio1.pause();
      this.audio1.currentTime = 0;
    }
    
  }
  pauseAudio1(): void {
    if (this.audio2) {
      this.audio2.pause();
      this.audio2.currentTime = 0;
    }
  }

  pauseAudio2(): void {
    if (this.audio3) {
      this.audio3.pause();
      this.audio3.currentTime = 0;
    }
  }
  pauseAudio3(): void {
    if (this.audio4) {
      this.audio4.pause();
      this.audio4.currentTime = 0;
    }
  }
  pauseAudio4(): void {
    if (this.audio5) {
      this.audio5.pause();
      this.audio5.currentTime = 0;
    }
  }
  pauseAudio5(): void {
    if (this.audio6) {
      this.audio6.pause();
      this.audio6.currentTime = 0;
    }
  }
}


