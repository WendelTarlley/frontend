import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutes } from './login.routing';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    LoginRoutes,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule

  ],
  declarations: [LoginComponent

  ]
})
export class LoginModule { }
