import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { GirlFormComponent } from './girl-form/girl-form.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GotComponent } from './got/got.component';
import { NeedComponent } from './need/need.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'girl-form', component: GirlFormComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
    {path: 'got', component: GotComponent},
    {path: 'need', component: NeedComponent},
    {path: 'search', component: SearchComponent},
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




  
