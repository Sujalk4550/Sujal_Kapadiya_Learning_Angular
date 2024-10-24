import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {MotorcycleListComponent} from "./app/motorcyle-list/motorcycle-list.component";
import {ModifyMotorComponent} from "./app/modify-motor/modify-motor.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";



const routes: Routes = [
  {path:'', redirectTo: '/motorcycle', pathMatch: 'full'}, //default route
  { path: 'motorcycle', component: MotorcycleListComponent},
  {path:'modify-motorcycle', component:ModifyMotorComponent},
  {path: '**', component:PageNotFoundComponent}

];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
