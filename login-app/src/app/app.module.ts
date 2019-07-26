import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginService } from 'src/app/login.service';

// @ngModule is called decorator.It provides metadata about your application
@NgModule({

  // declarations holds all the components entry
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  // imports holds other modules we are to consume
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // providers are the services
  providers: [LoginService],
  // bootstrap holds the root component , entry point
  // contains the class-name
  bootstrap: [AppComponent]
})
export class AppModule { }
