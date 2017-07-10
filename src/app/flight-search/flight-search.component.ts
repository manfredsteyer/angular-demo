import { Component } from '@angular/core';
import { Flight } from '../entities/flight';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  //providers: [FlightService]
})
export class FlightSearchComponent {

  from: string;
  to: string;

  selectedFlight: Flight;

  // any: number, booleans, string, objects

  basket: object = {
    "3": true,
    "4": false,
    "5": true
  };

  //private http: Http;

  constructor(private flightService: FlightService) {
    //this.http = http;
    console.debug('Liebesgrüße aus dem Konstruktor!');
  }

  // flights: Array<Flight> = [];

  get flights(): Array<Flight> {
    return this.flightService.flights;
  }

  search(): void {

    this.flightService.find(this.from, this.to);

  }

  select(f: Flight) {
    this.selectedFlight = f;
  }
}
