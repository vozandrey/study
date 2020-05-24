import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegComponent } from './reg/reg.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { CheckFormService } from './check-form.service';
import { AuthService } from './auth.service';
import { HttpModule } from '@angular/http';

import { IsLoggedIn } from './isLogged.guard';

const appRoute: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reg', component: RegComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [IsLoggedIn] }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegComponent,
    AuthComponent,
    DashboardComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpModule
  ],
  providers: [
    CheckFormService,
    AuthService,
    IsLoggedIn
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
