import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPositionCreateComponent } from './job-position-create.component';

describe('JobPositionCreateComponent', () => {
  let component: JobPositionCreateComponent;
  let fixture: ComponentFixture<JobPositionCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobPositionCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPositionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
