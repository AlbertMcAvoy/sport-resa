import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeModule} from "./home/home.module";
import {LoginModule} from "./login/login.module";
import {RegisterModule} from "./register/register.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    LoginModule,
    RegisterModule
  ]
})
export class PublicModule { }
