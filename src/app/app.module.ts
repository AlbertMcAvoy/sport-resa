import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './DataService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {UserModule} from "./user/user.module";
import {HomeComponent} from "./view/home/home.component";
import {LocalStorageService} from "./shared/application/local-storage.service";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {ThemeModule} from "./theme/theme.module";
import {GymModule} from "./gym/gym.module";
import {SessionModule} from "./session/session.module";

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService, {dataEncapsulation: false}),
    BrowserAnimationsModule,
    SharedModule,
    UserModule,
    GymModule,
    ThemeModule,
    SessionModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
