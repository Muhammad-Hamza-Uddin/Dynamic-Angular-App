import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactinfo } from './contactinfo';

describe('Contactinfo', () => {
  let component: Contactinfo;
  let fixture: ComponentFixture<Contactinfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contactinfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contactinfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
