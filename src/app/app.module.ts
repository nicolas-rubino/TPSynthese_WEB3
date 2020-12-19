import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './application/navbar/navbar.component';
import { FooterComponent } from './application/footer/footer.component';
import { HomeComponent } from './application/home/home.component';
import { FormulaireComponent } from './application/formulaire/formulaire.component';
import { CrudComponent } from './application/crud/crud.component';
import { ContactComponent } from './application/contact/contact.component';
import { Error404Component } from './application/error404/error404.component';
import { UpdateFormComponent } from './application/update-form/update-form.component';
import { ShowFormComponent } from './application/show-form/show-form.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';
import { CommonModule } from '@angular/common';
import { FunComponent } from './application/fun/fun.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FormulaireComponent,
    CrudComponent,
    ContactComponent,
    Error404Component,
    UpdateFormComponent,
    ShowFormComponent,
    TutorielsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
