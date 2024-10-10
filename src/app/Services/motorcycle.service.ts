import { Injectable } from '@angular/core';
import {Motorcycle} from "../Share/models/motorcycle";
import {Observable, of} from "rxjs";
import {motorcycleList} from "../Share/data/mock-motocycle";

@Injectable({
  providedIn: 'root'
})
export class MotorcycleService {
  private motorcycle : Motorcycle[] = motorcycleList;

  constructor() { }
  getMotorcycle():Observable<Motorcycle[]>{
    return of (motorcycleList);
  }
}
