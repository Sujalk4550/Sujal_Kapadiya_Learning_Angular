import { Component } from '@angular/core';
import {Motorcycle} from "../../Shared/models/motorcycle";
import {MotorcycleListItemComponent} from "../motorcycle-list-item/motorcycle-list-item.component";
import {NgClass, NgForOf} from "@angular/common";
import {MotorcycleService} from "../Services/motorcycle.service";

@Component({
  selector: 'app-motorcyle-list',
  standalone: true,
  imports: [
    MotorcycleListItemComponent,
    NgClass,
    NgForOf
  ],
  templateUrl: './motorcyle-list.component.html',
  styleUrl: './motorcyle-list.component.css'
})
export class MotorcyleListComponent {
 motorcycleList: Motorcycle[]=[]

  constructor(private motorcycleService: MotorcycleService) {
  }

}
