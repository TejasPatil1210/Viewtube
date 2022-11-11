import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioLivestreamCompComponent } from './studio-livestream-comp.component';

describe('StudioLivestreamCompComponent', () => {
  let component: StudioLivestreamCompComponent;
  let fixture: ComponentFixture<StudioLivestreamCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudioLivestreamCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudioLivestreamCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
