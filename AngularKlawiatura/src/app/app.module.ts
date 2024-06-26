import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KlawiaturaRowComponent } from './klawiatura-row/klawiatura-row.component';
import { KlawiaturaComponent } from './klawiatura/klawiatura.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormularzComponent } from './formularz/formularz.component';
import { MousesComponent } from './mouses/mouses.component';

@NgModule({
  declarations: [
    AppComponent,
    KlawiaturaRowComponent,
    KlawiaturaComponent,
    FormularzComponent,
    MousesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
