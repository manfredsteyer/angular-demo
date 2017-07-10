import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  clickMe() {

    console.debug('Aua!');

  }
}
