import {Component, Input} from '@angular/core';
import {Motorcycle} from "../models/motorcycle";

@Component({
  selector: 'app-motorcycle-list-item',
  standalone: true,
  imports: [],
  templateUrl: './motorcycle-list-item.component.html',
  styleUrl: './motorcycle-list-item.component.css'
})
export class MotorcycleListItemComponent {
  @Input() motorcycle ?: Motorcycle;
}
