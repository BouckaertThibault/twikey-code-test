import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizerStylingPanelComponent } from './customizer-styling-panel.component';

describe('CustomizerStylingPanelComponent', () => {
  let component: CustomizerStylingPanelComponent;
  let fixture: ComponentFixture<CustomizerStylingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizerStylingPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomizerStylingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
