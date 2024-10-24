import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgFor, NgIf} from "@angular/common";
import {Motorcycle} from "../Shared/models/motorcycle";
import {MotorcycleListComponent} from "./motorcyle-list/motorcycle-list.component";
import {MotorcycleService} from "./Services/motorcycle.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, MotorcycleListComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
title = 'Motorcycle';

constructor(private motorcycleService: MotorcycleService) {
}
}
