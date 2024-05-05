import {
  Component,
  DestroyRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
  input,
  signal,
} from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import {
  CustomizerCategories,
  CustomizerStyles,
} from '../../shared/models/customizer.model';
import { CommonModule } from '@angular/common';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxColorsModule } from 'ngx-colors';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CustomizerService } from '../../shared/services/customizer/customizer.service';

@Component({
  selector: 'app-customizer-styling-panel',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule,
    NgxColorsModule,
  ],
  templateUrl: './customizer-styling-panel.component.html',
  styleUrl: './customizer-styling-panel.component.scss',
})
export class CustomizerStylingPanelComponent implements OnChanges {
  @Input() categories: CustomizerCategories[] = [];
  styleFormControl = new FormGroup({});

  constructor(private customizerService: CustomizerService, private destroyRef: DestroyRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['categories'] && changes['categories'].currentValue) {
      const categories: CustomizerCategories[] =
        changes['categories'].currentValue;

      if (categories.length) {
        this.initializeForm(changes['categories'].currentValue);

        this.styleFormControl.valueChanges
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe(() => {
            this.styleFormToCustomizerCategories(this.categories);
          });
      }
    }
  }

  private initializeForm(categories: CustomizerCategories[]): void {
    categories.forEach(category => {
      const categoryGroup = new FormGroup({});
      category.items.forEach(item => {
        categoryGroup.addControl(item.name, new FormControl(item.value, Validators.required));
      });
      this.styleFormControl.addControl(category.category, categoryGroup);
    });
  }

  private styleFormToCustomizerCategories(categories: CustomizerCategories[]): void {
    let updatedCategories = [...categories];

    updatedCategories.forEach((category) => {
      const categoryForm = this.styleFormControl.get(
        category.category
      ) as unknown as FormGroup;
      if (categoryForm) {
        category.items.forEach((item) => {
          const itemControl = categoryForm.get(item.name);
          if (itemControl) {
            item.value = itemControl.value;
          }
        });
      }
    });
    this.customizerService.categories.set(updatedCategories);
  }
}
