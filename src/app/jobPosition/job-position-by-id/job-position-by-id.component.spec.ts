import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPositionByIdComponent } from './job-position-by-id.component';

describe('JobPositionByIdComponent', () => {
  let component: JobPositionByIdComponent;
  let fixture: ComponentFixture<JobPositionByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobPositionByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPositionByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
