import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { CatsComponent } from './cats/cats.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { HorsesComponent } from './horses/horses.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/(catoutlet:cats//dogoutlet:dogs//horseoutlet:horses)', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'cats', component: CatsComponent, outlet: 'catoutlet' },
      { path: 'cats/:name', component: CatDetailsComponent, outlet: 'catoutlet' },
      { path: 'dogs', component: DogsComponent, outlet: 'dogoutlet' },
      { path: 'dogs/:id', component: DogDetailsComponent, outlet: 'dogoutlet' },
      { path: 'horses', component: HorsesComponent, outlet: 'horseoutlet' }
    ]
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }