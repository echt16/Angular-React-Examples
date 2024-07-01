import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { CommonModule } from '@angular/common';
import { Items } from './items';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PipesComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meeting6';
  items = Items
}
