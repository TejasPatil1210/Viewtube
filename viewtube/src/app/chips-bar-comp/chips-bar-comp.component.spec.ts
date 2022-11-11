import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsBarCompComponent } from './chips-bar-comp.component';

describe('ChipsBarCompComponent', () => {
  let component: ChipsBarCompComponent;
  let fixture: ComponentFixture<ChipsBarCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipsBarCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipsBarCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
