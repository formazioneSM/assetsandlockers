import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalTimerComponent } from './rental-timer.component';

describe('RentalTimerComponent', () => {
  let component: RentalTimerComponent;
  let fixture: ComponentFixture<RentalTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
