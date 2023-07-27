import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionComponent } from './view/smart/session/session.component';
import { DetailComponent } from './view/dumb/detail/detail.component';
import {RouterModule, Routes} from "@angular/router";
import {sessionGymResolve, sessionResolve, sessionsResolve} from "./application/session.resolver";
import {ListComponent} from "./view/dumb/list/list.component";
import {MatButtonModule} from "@angular/material/button";

const sessionRoutes: Routes = [
  { path: `list`, component: SessionComponent, resolve: {sessions: sessionsResolve} },
  { path: `gym/:id`, component: SessionComponent, resolve: {session: sessionResolve} },
  { path: `detail/:id`, component: SessionComponent, resolve: {session: sessionGymResolve} },
  { path: `**`, redirectTo: '/'}
]

@NgModule({
  declarations: [
    SessionComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(sessionRoutes),
    MatButtonModule
  ]
})
export class SessionModule { }
