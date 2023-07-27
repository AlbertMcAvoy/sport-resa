import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { GymComponent } from './view/smart/gym/gym.component';
import {gymResolve, gymsResolve} from "./application/gym.resolver";
import { ListComponent } from './view/dumb/list/list.component';
import {MatButtonModule} from "@angular/material/button";
import { DetailComponent } from './view/dumb/detail/detail.component';

const gymRoutes: Routes = [
  { path: `list`, component: GymComponent, resolve: {gyms: gymsResolve} },
  { path: `detail/:id`, component: GymComponent, resolve: {gym: gymResolve} },

]

@NgModule({
  declarations: [
    GymComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(gymRoutes),
    MatButtonModule,
  ]
})
export class GymModule { }
