import { Pipe, PipeTransform } from '@angular/core';
import {Motorcycle} from "../../Shared/models/motorcycle";

@Pipe({
  name: 'bikeType',
  standalone: true
})
export class BikeTypePipe implements PipeTransform {

transform( motorcycle : Motorcycle):String {
  return `${motorcycle.colour} ${motorcycle.type}`;
}
}
