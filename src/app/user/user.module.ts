import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./view/dumbs/register/register.component";
import { LoginComponent } from "./view/dumbs/login/login.component";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { PublicComponent } from './view/smart/public/public.component';
import {LocalStorageService} from "../shared/application/local-storage.service";

const userRoutes: Routes = [
  { path: `**`, component: PublicComponent }
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PublicComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [RouterModule]
})
export class UserModule { }
