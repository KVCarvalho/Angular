import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiratributosComponent } from './diratributos.component';

describe('DiratributosComponent', () => {
  let component: DiratributosComponent;
  let fixture: ComponentFixture<DiratributosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiratributosComponent]
    });
    fixture = TestBed.createComponent(DiratributosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
