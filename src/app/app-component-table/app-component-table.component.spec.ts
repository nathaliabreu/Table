import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponentTableComponent } from './app-component-table.component';

describe('AppComponentTableComponent', () => {
  let component: AppComponentTableComponent;
  let fixture: ComponentFixture<AppComponentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponentTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
