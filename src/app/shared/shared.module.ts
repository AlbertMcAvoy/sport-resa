import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './view/dumbs/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {RouterLink, RouterOutlet} from "@angular/router";
import { MatListModule } from '@angular/material/list';
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    RouterLink,
    MatListModule,
    RouterOutlet,
    FlexLayoutModule
  ],
  exports: [NavigationComponent]
})
export class SharedModule { }
