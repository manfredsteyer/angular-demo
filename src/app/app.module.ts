import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from "@angular/router";
import { APP_ROUTES } from "app/app.routes";
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightService } from './flight-search/flight.service';
import { FlightCardComponent } from './flight-search/flight-card.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FlightSearchComponent,
    FlightCardComponent
  ],
  providers: [
    FlightService
    // { provide: FlightService, useClass: FlightService }
    // FlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
