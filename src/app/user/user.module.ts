import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./view/dumbs/public/register/register.component";
import { LoginComponent } from "./view/dumbs/public/login/login.component";
import { MatCardModule } from "@angular/material/card";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { PublicComponent } from './view/smart/public/public.component';
import { PrivateComponent } from './view/smart/private/private.component';
import { authGuard } from "../shared/application/auth.guard";
import { AdminComponent } from './view/dumbs/private/admin/admin.component';
import { CoachComponent } from './view/dumbs/private/coach/coach.component';
import { UserComponent } from './view/dumbs/private/user/user.component';

const userRoutes: Routes = [
  { path: `account`, component: PrivateComponent, canActivate: [authGuard] },
  { path: `**`, component: PublicComponent }
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PublicComponent,
    PrivateComponent,
    AdminComponent,
    CoachComponent,
    UserComponent
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
