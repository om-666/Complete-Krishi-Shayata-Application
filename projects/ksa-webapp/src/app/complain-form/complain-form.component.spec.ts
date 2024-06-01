import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainFormComponent } from './complain-form.component';

describe('ComplainFormComponent', () => {
  let component: ComplainFormComponent;
  let fixture: ComponentFixture<ComplainFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComplainFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
