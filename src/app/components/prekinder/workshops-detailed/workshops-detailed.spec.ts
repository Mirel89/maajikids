import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkshopsDetailedComponent } from './workshops-detailed.component';

describe('WorkshopsDetailedComponent', () => {
  let component: WorkshopsDetailedComponent;
  let fixture: ComponentFixture<WorkshopsDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopsDetailedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkshopsDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
