import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrekinderComponent } from './prekinder.component';

describe('PrekinderComponent', () => {
  let component: PrekinderComponent;
  let fixture: ComponentFixture<PrekinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrekinderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrekinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
