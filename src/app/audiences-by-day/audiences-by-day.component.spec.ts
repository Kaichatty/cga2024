import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiencesByDayComponent } from './audiences-by-day.component';

describe('AudiencesByDayComponent', () => {
  let component: AudiencesByDayComponent;
  let fixture: ComponentFixture<AudiencesByDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiencesByDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiencesByDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
