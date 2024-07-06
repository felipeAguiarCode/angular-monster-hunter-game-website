import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainTitleComponent } from './sections/main-title/main-title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, MainTitleComponent],
})
export class AppComponent {
  title = 'monster-hunter-game-website';
}
