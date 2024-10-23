import { Injectable } from '@angular/core';
import {Motorcycle} from "../../Shared/models/motorcycle";
import {motorcycleList} from "../../Shared/data/mock-motorcycle";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MotorcycleService {
  private  motors: Motorcycle[] = motorcycleList;

  constructor() { }
  getMyMotorcycle(): Observable<Motorcycle[]>{
    return of (motorcycleList);
  }
  addMotorcycle(newMotorcycle:Motorcycle) : Observable<Motorcycle[]>{
    this.motors.push(newMotorcycle)
    return of(this.motors);
  }

  //Update an Existing user
  updateMotorcycle(updatedMotorcycle: Motorcycle): Observable<Motorcycle[]> {
    const index = this.motors.findIndex(user => user.id === updatedMotorcycle.id);
    if (index !== -1) {
      this.motors[index] = updatedMotorcycle;
    }
    return of(this.motors);
  }
  //Delete: Remove a user by ID
  deleteMotorcycle(motorcycleId: number): Observable<Motorcycle[]> {
    this.motors = this.motors.filter(user => user.id !== motorcycleId);
    return of(this.motors);
  }
  getMotorcycleById(motorcycleId: number): Observable<Motorcycle | undefined> {
    const motorcycle = this.motors.find(motorcycle => motorcycle.id === motorcycleId);
    return of(motorcycle);
  }
}

