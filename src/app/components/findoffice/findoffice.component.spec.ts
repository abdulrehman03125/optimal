import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindofficeComponent } from './findoffice.component';

describe('FindofficeComponent', () => {
  let component: FindofficeComponent;
  let fixture: ComponentFixture<FindofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindofficeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
