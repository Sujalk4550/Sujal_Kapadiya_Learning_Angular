import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgFor, NgIf} from "@angular/common";
import {Motorcycle} from "./models/motorcycle";
import {MotorcyleListComponent} from "./motorcyle-list/motorcyle-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, MotorcyleListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  motorcyle1: Motorcycle ={brand:"Harley - Davidson",name:"Street Glide",colour:"Red",type:"Touring",petrol:true};
  motorcyle2:  Motorcycle ={brand:"Yamaha",name:"YZF-R1",colour:"Blue",type:"Sportbike",petrol:true};
  motorcyle3:  Motorcycle ={brand:"BMW",name:"R1250 GS",colour:"White",type:"Adventure",petrol:false};
  motorcyle4 :Motorcycle ={brand:"Ducati",name:"Scrambler Icon",colour:"Yellow",type:"Scrambler",petrol:true};
  motorcyle5: Motorcycle ={brand:"Honda",name:"Gold Wing",colour:"Back",type:"Touring",petrol:false};
  motorcyle6 :Motorcycle ={brand:"Kawasaki",name:"Ninja ZX-10R",colour:"Green",type:"Sportsbike",petrol:true};

  motorcycleList :  Motorcycle[]=[this.motorcyle1,this.motorcyle2,this.motorcyle3,this.motorcyle4,this.motorcyle5,this.motorcyle6]

}
