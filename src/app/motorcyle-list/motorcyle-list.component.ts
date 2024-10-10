import { Component } from '@angular/core';
import {Motorcycle} from "../Share/models/motorcycle";
import {MotorcycleListItemComponent} from "../motorcycle-list-item/motorcycle-list-item.component";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {MotorcycleService} from "../Services/motorcycle.service";

@Component({
  selector: 'app-motorcyle-list',
  standalone: true,
  imports: [
    MotorcycleListItemComponent,
    NgClass,
    NgForOf,
    NgIf
  ],
  templateUrl: './motorcyle-list.component.html',
  styleUrl: './motorcyle-list.component.css'
})
export class MotorcycleListComponent {

  motorcycleList :  Motorcycle[]=[]
  //

  constructor(private myMotorcycleService: MotorcycleService) {
  }

}
