import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {MotorcycleListComponent} from "./app/motorcyle-list/motorcycle-list.component";

const routes: Routes = [
  {path:'', redirectTo: '/motorcycle', pathMatch: 'full'}, //default route
  { path: 'motorcycle', component: MotorcycleListComponent},

];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
