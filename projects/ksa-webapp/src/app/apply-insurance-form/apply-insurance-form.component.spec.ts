import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyInsuranceFormComponent } from './apply-insurance-form.component';

describe('ApplyInsuranceFormComponent', () => {
  let component: ApplyInsuranceFormComponent;
  let fixture: ComponentFixture<ApplyInsuranceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplyInsuranceFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplyInsuranceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
