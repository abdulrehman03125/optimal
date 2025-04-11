import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerealComponent } from './officereal.component';

describe('OfficerealComponent', () => {
  let component: OfficerealComponent;
  let fixture: ComponentFixture<OfficerealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficerealComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficerealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
