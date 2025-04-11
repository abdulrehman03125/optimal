import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogimageComponent } from './logimage.component';

describe('LogimageComponent', () => {
  let component: LogimageComponent;
  let fixture: ComponentFixture<LogimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogimageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
