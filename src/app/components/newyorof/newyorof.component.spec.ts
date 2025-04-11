import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewyorofComponent } from './newyorof.component';

describe('NewyorofComponent', () => {
  let component: NewyorofComponent;
  let fixture: ComponentFixture<NewyorofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewyorofComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewyorofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
