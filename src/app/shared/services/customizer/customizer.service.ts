import { Injectable, signal } from '@angular/core';
import { CustomizerCategories, CustomizerStyles } from '../../models/customizer.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomizerService {
  categories = signal<CustomizerCategories[]>([]);

  constructor(private http: HttpClient) { }

  getStyleCategories() {
    return this.http
      .get<CustomizerCategories[]>(`assets/customizer-styles.json`)
      .pipe(tap(categories => this.categories.set(categories)));
  }
}
