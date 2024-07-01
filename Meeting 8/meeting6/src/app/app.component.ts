import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Items } from './items';
import { Item } from './item';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { LogService } from './log.service';
import { DataComponent } from './data/data.component';
import { NgForm } from '@angular/forms';
import { Phone } from './phone';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, DataComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [DataService, LogService]
})
export class AppComponent {
  title = 'meeting6';
  // items = Items;
  // selectedItem?:Item;
  // onSelect(item:Item):void{
  //   this.selectedItem = item;
  // }

  // name: string = '';
  // items:string[] = [];

  // constructor(private dataService: DataService) { }


  // addItem(name: string) {
  //   this.dataService.addData(name);
  // }

  // ngOnInit(){
  //   this.items = this.dataService.getData();
  // }

  phone: Phone = new Phone("", 0, "Huawei");
  phones: Phone[] = [];
  companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", " A l c a t e l "];
  // addPhone() {
  //   this.phones.push(new Phone(this.phone.title, this.phone.price, this.phone.company));
  // }

  constructor(private formBuilder: FormBuilder) {

  }

  myForm: FormGroup = this.formBuilder.group({
    "allo": ["Tom", [Validators.required]],
    "ali": ["", [Validators.required, Validators.email]],
    "phones": this.formBuilder.array([
      ["+38", Validators.required]
    ])
  });

  // myForm: FormGroup = new FormGroup({
  //   allo: new FormControl(),
  //   ali: new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[0-9]+$/)]),
  //   phones: new FormArray([new FormControl('+38', [Validators.required, Validators.pattern('/+38[0-9]{3}/')])])
  // });

  getFormsControls(): FormArray {
    return this.myForm.controls['phones'] as FormArray;
  }

  addPhone() {
    (<FormArray>this.myForm.controls['phones']).push(new FormControl('+38', [Validators.required, Validators.pattern('/+38[0-9]{3}/')]));
  }
}
