import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdduserComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //  PrimeNG  Modules
    ButtonModule,
    TableModule,
    CalendarModule,
    SliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
