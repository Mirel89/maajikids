import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaVisitaPage } from './reserva-visita-page';

describe('ReservaVisitaPage', () => {
  let component: ReservaVisitaPage;
  let fixture: ComponentFixture<ReservaVisitaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaVisitaPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaVisitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
