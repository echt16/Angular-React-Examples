import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Items } from './items';
import { Item } from './item';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [DataService]
})
export class AppComponent {
  // title = 'meeting6';
  // items = Items;
  // selectedItem?:Item;
  // onSelect(item:Item):void{
  //   this.selectedItem = item;
  // }

  items: string[] = [];
  name: string = '';

  constructor(private dataService: DataService) { }

  addItem(name: string) {
    this.dataService.addData(name);
  }
}
