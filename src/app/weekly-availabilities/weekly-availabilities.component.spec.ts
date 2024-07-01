import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyAvailabilitiesComponent } from './weekly-availabilities.component';

describe('WeeklyAvailabilitiesComponent', () => {
  let component: WeeklyAvailabilitiesComponent;
  let fixture: ComponentFixture<WeeklyAvailabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyAvailabilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyAvailabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
