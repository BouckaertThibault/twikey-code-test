import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomizerComponent } from './customizer/customizer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomizerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'twikey-code-test';
}
