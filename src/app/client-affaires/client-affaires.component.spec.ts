import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAffairesComponent } from './client-affaires.component';

describe('ClientAffairesComponent', () => {
  let component: ClientAffairesComponent;
  let fixture: ComponentFixture<ClientAffairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAffairesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAffairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
