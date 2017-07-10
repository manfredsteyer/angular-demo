import { Routes } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { AboutComponent } from "app/about/about.component";
import { FlightSearchComponent } from './flight-search/flight-search.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'prefix'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'flight-search',
        component: FlightSearchComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
]
