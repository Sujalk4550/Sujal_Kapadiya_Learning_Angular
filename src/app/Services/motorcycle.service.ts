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
    return of (this.motors);
  }
  addMotorcycle(newMotorcycle:Motorcycle) : Observable<Motorcycle>{
    this.motors.push(newMotorcycle)
    return of(newMotorcycle);
  }

  //Update an Existing user
  updateMotorcycle(updatedMotorcycle: Motorcycle): Observable<Motorcycle | undefined> {
    const index = this.motors.findIndex(user => user.id === updatedMotorcycle.id);
    if (index > -1) {
      this.motors[index] = updatedMotorcycle;
      return of(updatedMotorcycle);
    }
    return of(undefined);
  }
  //Delete: Remove a user by ID

  getMotorcycleById(motorcycleId: number): Observable<Motorcycle | undefined> {
    return of(this.motors.find(motorcycle => motorcycle.id === motorcycleId));
  }

  generateNewId() {
    return this.motors.length >0 ? Math.max(...this.motors.map(user => user.id)) +1 : 1;
  }
}

