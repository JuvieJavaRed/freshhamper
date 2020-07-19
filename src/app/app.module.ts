import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AdminordersComponent } from './components/adminorders/adminorders.component';
import { AdmincustomersComponent } from './components/admincustomers/admincustomers.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CustomerdashComponent } from './components/customerdash/customerdash.component';
import { AdminmailComponent } from './components/adminmail/adminmail.component';
import { AdminmessagesComponent } from './components/adminmessages/adminmessages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AdminordersComponent,
    AdmincustomersComponent,
    LoginComponent,
    RegisterComponent,
    CustomerdashComponent,
    AdminmailComponent,
    AdminmessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
