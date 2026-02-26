import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgeLevelsComponent } from './age-levels.component';  // ← Con "Component"

describe('AgeLevelsComponent', () => {  // ← Con "Component"
  let component: AgeLevelsComponent;  // ← Con "Component"
  let fixture: ComponentFixture<AgeLevelsComponent>;  // ← Con "Component"

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgeLevelsComponent]  // ← Con "Component"
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeLevelsComponent);  // ← Con "Component"
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
