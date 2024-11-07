import { Injectable } from '@angular/core';
import {Motorcycle} from "../../Shared/models/motorcycle";
import {motorcycleList} from "../../Shared/data/mock-motorcycle";
import {catchError, Observable, of, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MotorcycleService {
  private apiUrl = 'api/motorcycle';
  private  motors: Motorcycle[] = motorcycleList;

  constructor(private http: HttpClient) { }
  getMyMotorcycle(): Observable<Motorcycle[]>{
    return this.http.get<Motorcycle[]>(this.apiUrl).pipe(catchError(this.handleError));
  }
  addMotorcycle(newMotorcycle:Motorcycle) : Observable<Motorcycle>{
    newMotorcycle.id = this.generateNewId();
    return this.http.post<Motorcycle>(this.apiUrl,newMotorcycle).pipe(catchError(this.handleError));
  }

  //Update an Existing user
  updateMotorcycle(updatedMotorcycle: Motorcycle): Observable<Motorcycle | undefined> {
    const url = `${this.apiUrl}/${updatedMotorcycle.id}`;
    return this.http.put<Motorcycle>(url,updatedMotorcycle).pipe(catchError(this.handleError));
  }


  getMotorcycleById(motorcycleId: string): Observable<Motorcycle> {
    return this.http.get<Motorcycle>(`${this.apiUrl}/${motorcycleId}`).pipe(catchError(this.handleError));
  }

  generateNewId():number {
    return this.motors.length >0 ? Math.max(...this.motors.map(user => user.id)) +1 : 1;
  }

  private handleError(error: HttpErrorResponse){
    console.error('API error:',error);
    return throwError(() => new Error('Server error , please try again'));
  }
}

