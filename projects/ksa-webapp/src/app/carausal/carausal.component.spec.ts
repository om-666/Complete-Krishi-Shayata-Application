import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarausalComponent } from './carausal.component';

describe('CarausalComponent', () => {
  let component: CarausalComponent;
  let fixture: ComponentFixture<CarausalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarausalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarausalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
