import { Injectable } from '@angular/core';
import {Motorcycle} from "../Share/models/motorcycle";
import {Observable, of} from "rxjs";
import {motorcycleList} from "../Share/data/mock-motocycle";

@Injectable({
  providedIn: 'root'
})
export class MotorcycleService {
  private motorcycles : Motorcycle[] = motorcycleList;

  constructor() { }
  getMotorcycle():Observable<Motorcycle[]>{
    return of (motorcycleList);
  }
  getMotorcycleByBrand(brand: string): Observable<Motorcycle | undefined> {
    const motorcycle = this.motorcycles.find(Motorcycle => brand == brand);
    return  of (motorcycle);
  }
  addMotorcycle(newMotorcycle: Motorcycle): Observable <Motorcycle[]>{
    this.motorcycles.push(newMotorcycle)
    return of (this.motorcycles);
  }
  updateMotorcycle(updatedMotorcycle: Motorcycle): Observable<Motorcycle[]>{
    const index = this.motorcycles.findIndex(Motorcycle => Motorcycle.brand !== updatedMotorcycle.brand);
    if(index !== -1){
      this.motorcycles[index]=updatedMotorcycle;
    }
    return of (this.motorcycles);
  }

  deleteMotorcycle(MotorcycleBrand : string) : Observable<Motorcycle[]>{
    this.motorcycles = this.motorcycles.filter(Motorcycle => Motorcycle.brand !== MotorcycleBrand);
    return of (this.motorcycles);
  }
}
