import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCarousel } from './services-carousel';

describe('ServicesCarousel', () => {
  let component: ServicesCarousel;
  let fixture: ComponentFixture<ServicesCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
