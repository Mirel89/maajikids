import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacantesSection } from './vacantes-section';

describe('VacantesSection', () => {
  let component: VacantesSection;
  let fixture: ComponentFixture<VacantesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacantesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacantesSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
