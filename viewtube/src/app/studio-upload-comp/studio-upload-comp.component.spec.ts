import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioUploadCompComponent } from './studio-upload-comp.component';

describe('StudioUploadCompComponent', () => {
  let component: StudioUploadCompComponent;
  let fixture: ComponentFixture<StudioUploadCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudioUploadCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudioUploadCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
