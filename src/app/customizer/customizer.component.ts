import { Component, OnInit } from '@angular/core';
import { CustomizerStylingPanelComponent } from './customizer-styling-panel/customizer-styling-panel.component';
import { CustomizerService } from '../shared/services/customizer/customizer.service';
import { CommonModule } from '@angular/common';
import { CustomizerCategories } from '../shared/models/customizer.model';
import { CustomizerPreviewComponent } from './customizer-preview/customizer-preview.component';

@Component({
  selector: 'app-customizer',
  standalone: true,
  imports: [
    CommonModule,
    CustomizerStylingPanelComponent,
    CustomizerPreviewComponent,
  ],
  templateUrl: './customizer.component.html',
  styleUrl: './customizer.component.scss',
})
export class CustomizerComponent implements OnInit {
  categories: CustomizerCategories[] = [];

  constructor(public customizerService: CustomizerService) {}

  ngOnInit(): void {
    this.customizerService
      .getStyleCategories()
      .subscribe(categories => (this.categories = categories));
  }
}
