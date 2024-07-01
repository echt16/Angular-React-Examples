import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'data-comp',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})

export class DataComponent {
    newItem: string = '';
    items: string[] = [];
    constructor(private dataService: DataService) { }

    addItem(newItem: string) {
        console.log(newItem);
        this.dataService.addData(newItem);
        console.log(newItem);
    }

    ngOnInit() {
        this.items =
            this.dataService.getData();
    }
}