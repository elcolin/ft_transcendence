import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSnapComponent } from './face-snap.component';

describe('FaceSnapComponent', () => {
  let component: FaceSnapComponent;
  let fixture: ComponentFixture<FaceSnapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaceSnapComponent]
    });
    fixture = TestBed.createComponent(FaceSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
