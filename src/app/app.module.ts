import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Angular Material
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

//
import { FlexLayoutModule } from '@angular/flex-layout';
import { Interceptor } from './Interceptor';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [
    provideAnimationsAsync(),
    Interceptor,{provide: HTTP_INTERCEPTORS,useClass: Interceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
