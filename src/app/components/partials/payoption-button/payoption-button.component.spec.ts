import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoptionButtonComponent } from './payoption-button.component';

describe('PayoptionButtonComponent', () => {
  let component: PayoptionButtonComponent;
  let fixture: ComponentFixture<PayoptionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayoptionButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayoptionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
