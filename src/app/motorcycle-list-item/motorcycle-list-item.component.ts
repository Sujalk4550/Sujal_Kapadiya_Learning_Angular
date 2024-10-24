import {Component, Input} from '@angular/core';
import {Motorcycle} from "../../Shared/models/motorcycle";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-motorcycle-list-item',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './motorcycle-list-item.component.html',
  styleUrl: './motorcycle-list-item.component.css'
})
export class MotorcycleListItemComponent {
  @Input() motorcycle ?: Motorcycle;
}
