import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeCloud } from './welcome-cloud';

describe('WelcomeCloud', () => {
  let component: WelcomeCloud;
  let fixture: ComponentFixture<WelcomeCloud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeCloud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeCloud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
