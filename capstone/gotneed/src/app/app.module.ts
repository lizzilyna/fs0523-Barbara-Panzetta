import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegisterComponent } from './register/register.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { GirlFormComponent } from './girl-form/girl-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { DataService } from './services/data.service';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AlbumpageComponent } from './albumpage/albumpage.component';
import { GotComponent } from './got/got.component';
import { NeedComponent } from './need/need.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { SearchformComponent } from './searchform/searchform.component';


@NgModule({
  declarations: [
    AppComponent,
    GirlFormComponent,
    HomeComponent,
    RegisterComponent,
    ToolbarComponent,
    AlbumpageComponent,
    GotComponent,
    NeedComponent,
    SearchComponent,
    LoginComponent,
    DashboardComponent,
    SearchformComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    CommonModule,
    MatSidenavModule, 
    MatListModule,
    MatTableModule,
    
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }