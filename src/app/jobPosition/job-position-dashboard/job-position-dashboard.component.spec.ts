import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPositionDashboardComponent } from './job-position-dashboard.component';

describe('JobPositionDashboardComponent', () => {
  let component: JobPositionDashboardComponent;
  let fixture: ComponentFixture<JobPositionDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobPositionDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPositionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
