import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponenttableComponent } from './app-componenttable.component';

describe('AppComponenttableComponent', () => {
  let component: AppComponenttableComponent;
  let fixture: ComponentFixture<AppComponenttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponenttableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponenttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
