import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffaireAudiencesComponent } from './affaire-audiences.component';

describe('AffaireAudiencesComponent', () => {
  let component: AffaireAudiencesComponent;
  let fixture: ComponentFixture<AffaireAudiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffaireAudiencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffaireAudiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
