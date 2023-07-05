import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import {RouterModule, Routes} from "@angular/router";

const registerRoutes: Routes = [
  { path: `register`, component: RegisterComponent }
]

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(registerRoutes)
  ]
})
export class RegisterModule { }
