import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import * as application from "application";
import { AndroidApplication, AndroidActivityBackPressedEventData } from "application";
import { isAndroid } from "platform";
import { Location } from '@angular/common';
import { PageRoute, RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'my-home',
  templateUrl: './home/home.component.html'
})
export class HomeComponent implements OnInit {
  public selectedIndex: number = 0;

  constructor(private router: Router, private routerExtensions: RouterExtensions, private location: Location) {
  }

  ngOnInit() {
    if (isAndroid) {
      application.android.on(AndroidApplication.activityBackPressedEvent, (data: AndroidActivityBackPressedEventData) => {
        // if (this.router.isActive("/home", false)) {
        //find a good solution to identify the active component
        //navigation with tabs does not work for now
        // if (this.router.url.match(/\/home\/.*mate\/\d.*/)) {
        data.cancel = true; // prevents default back button behavior
        this.navBack();
        // }
      }, this);
    }
  }
  navBack() {
    this.location.back();
    // this.routerExtensions.back();
    // this.routerExtensions.backToPreviousPage();
  }

  navigateToDogs() {
    this.router.navigate([
      '/home',
      { outlets: { dogoutlet: ['dogs'] } }
    ]);
  }
  navigateToCats() {
    this.router.navigate([
      '/home',
      { outlets: { catoutlet: ['cats'] } }
    ]);
  }
  navigateToHorse() {
    this.router.navigate([
      '/home',
      { outlets: { catoutlet: ['horses'] } }
    ]);
  }

  tabViewIndexChange(index: any) {
    switch (index.value) {
      case 0:
        this.navigateToDogs();
        break;
      case 1:
        this.navigateToCats();
        break;
      case 2:
        this.navigateToHorse();
        break;
    }
  }
}
