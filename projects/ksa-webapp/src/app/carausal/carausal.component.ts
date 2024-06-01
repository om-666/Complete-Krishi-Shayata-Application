import { Component } from '@angular/core';

@Component({
  selector: 'app-carausal',
  templateUrl: './carausal.component.html',
  styleUrls: ['./carausal.component.css'] // Corrected property name to styleUrls
})
export class CarausalComponent {
  items = [
    { title: 'Item 1', description: 'Description 1', imageUrl: './assets/farmer-cara0.jpg' },
    { title: 'Item 2', description: 'Description 2', imageUrl: './assets/farmer-cara1.jpg' },
    { title: 'Item 3', description: 'Description 3', imageUrl: './assets/farmer-cara2.jpg' }
  ];
}
