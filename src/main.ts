import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {MotorcycleListComponent} from "./app/motorcyle-list/motorcycle-list.component";
import {ModifyMotorComponent} from "./app/modify-motor/modify-motor.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/Services/in-memory-data.service";



const routes: Routes = [
  {path:'', redirectTo: '/motorcycle', pathMatch: 'full'}, //default route
  { path: 'motorcycle', component: MotorcycleListComponent},
  {path : 'motorcycle/:id',
  loadComponent:() =>
  import('./app/motorcyle-list/motorcycle-list.component').then(m => m.MotorcycleListComponent)},
  {path:'modify-motorcycle', loadComponent:() =>
  import('./app/modify-motor/modify-motor.component').then(m => m.ModifyMotorComponent)},
  {path: '**',loadComponent:() =>
  import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)},
];
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Ensure that HTTP interceptors are properly configured
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1 })) // Import providers dynamically
  ],
}).catch((err) => console.error(err));
