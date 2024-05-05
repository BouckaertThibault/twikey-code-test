import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizerPreviewComponent } from './customizer-preview.component';

describe('CustomizerPreviewComponent', () => {
  let component: CustomizerPreviewComponent;
  let fixture: ComponentFixture<CustomizerPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizerPreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomizerPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
