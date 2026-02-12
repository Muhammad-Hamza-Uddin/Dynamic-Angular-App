import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewdeals } from './viewdeals';

describe('Viewdeals', () => {
  let component: Viewdeals;
  let fixture: ComponentFixture<Viewdeals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Viewdeals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewdeals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
