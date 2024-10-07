import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentByIdComponent } from './department-by-id.component';

describe('DepartmentByIdComponent', () => {
  let component: DepartmentByIdComponent;
  let fixture: ComponentFixture<DepartmentByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
