import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityfindComponent } from './cityfind.component';

describe('CityfindComponent', () => {
  let component: CityfindComponent;
  let fixture: ComponentFixture<CityfindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityfindComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityfindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
