import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeByIdComponent } from './employee-by-id.component';

describe('EmployeeByIdComponent', () => {
  let component: EmployeeByIdComponent;
  let fixture: ComponentFixture<EmployeeByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
