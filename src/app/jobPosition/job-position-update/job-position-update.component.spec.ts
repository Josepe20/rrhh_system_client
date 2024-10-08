import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPositionUpdateComponent } from './job-position-update.component';

describe('JobPositionUpdateComponent', () => {
  let component: JobPositionUpdateComponent;
  let fixture: ComponentFixture<JobPositionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobPositionUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPositionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
