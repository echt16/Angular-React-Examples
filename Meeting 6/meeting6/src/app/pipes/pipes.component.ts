import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})

export class PipesComponent {
  str = 'ALLO';
  num = 0.54;
  money = 13;

  dateObject: Date = new Date(1678, 1, 20);
  dateString = "2020-02-20T00:00:00.000Z";
  dateNumber = 1582156800000;
}
