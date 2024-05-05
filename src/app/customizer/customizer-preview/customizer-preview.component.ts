import { Component, Input } from '@angular/core';
import { CustomizerCategories } from '../../shared/models/customizer.model';
import { CustomizerService } from '../../shared/services/customizer/customizer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customizer-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customizer-preview.component.html',
  styleUrl: './customizer-preview.component.scss',
})
export class CustomizerPreviewComponent {
  constructor(public customizerService: CustomizerService) {}
}
