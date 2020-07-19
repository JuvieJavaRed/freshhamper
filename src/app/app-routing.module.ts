import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {CustomerdashComponent} from './components/customerdash/customerdash.component';
import {AdmincustomersComponent} from './components/admincustomers/admincustomers.component';
import {AdminordersComponent} from './components/adminorders/adminorders.component';
import {AdminmailComponent} from './components/adminmail/adminmail.component';
import {AdminmessagesComponent} from './components/adminmessages/adminmessages.component';


const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'customdash',
    component:CustomerdashComponent
  },
  {
    path:'admincustomers',
    component:AdmincustomersComponent
  },
  {
    path:'adminorders',
    component:AdminordersComponent
  },
  {
    path:'adminmail',
    component:AdminmailComponent
  },
  {
    path:'adminmessages',
    component:AdminmessagesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
