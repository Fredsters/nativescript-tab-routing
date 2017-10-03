import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-horses',
    templateUrl: './horses/horses.component.html'
})
export class HorsesComponent {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
}