import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Extranet } from './extranet';

describe('Extranet', () => {
  let component: Extranet;
  let fixture: ComponentFixture<Extranet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Extranet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Extranet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
