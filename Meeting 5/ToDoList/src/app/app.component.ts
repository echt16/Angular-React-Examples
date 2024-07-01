import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoItemsComponent } from './to-do-items/to-do-items.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToDoItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Allo';
  getTitle(): string{
    return this.title;
  }
}
