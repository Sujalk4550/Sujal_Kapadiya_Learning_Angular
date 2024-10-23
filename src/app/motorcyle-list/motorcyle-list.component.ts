import { Component } from '@angular/core';
import {Motorcycle} from "../../Shared/models/motorcycle";
import {MotorcycleListItemComponent} from "../motorcycle-list-item/motorcycle-list-item.component";
import {NgClass, NgForOf} from "@angular/common";

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
  motorcyle1: Motorcycle ={brand:"Harley - Davidson",name:"Street Glide",colour:"Red",type:"Touring",petrol:true};
  motorcyle2:  Motorcycle ={brand:"Yamaha",name:"YZF-R1",colour:"Blue",type:"Sportbike",petrol:true};
  motorcyle3:  Motorcycle ={brand:"BMW",name:"R1250 GS",colour:"White",type:"Adventure",petrol:false};
  motorcyle4 :Motorcycle ={brand:"Ducati",name:"Scrambler Icon",colour:"Yellow",type:"Scrambler",petrol:true};

  motorcycleList :  Motorcycle[]=[this.motorcyle1,this.motorcyle2,this.motorcyle3,this.motorcyle4]

}
