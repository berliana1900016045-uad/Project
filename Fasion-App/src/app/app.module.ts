import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CoverComponent } from './auth/cover/cover.component';
import { CovercorauselComponent } from './auth/covercorausel/covercorausel.component';
import { MaterialDesign } from './Material/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BoostrapMaterial } from './Material/Boostrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CoverComponent,
    CovercorauselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesign,
    NgbModule,
    BoostrapMaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
