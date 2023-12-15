import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpageComponent } from './spage.component';

describe('SpageComponent', () => {
  let component: SpageComponent;
  let fixture: ComponentFixture<SpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpageComponent]
    });
    fixture = TestBed.createComponent(SpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
