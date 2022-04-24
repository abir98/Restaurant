import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { DrinksComponent } from './drinks/drinks.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AuthInter } from './auth-inter';
import { RestaurantownerComponent } from './restaurantowner/restaurantowner.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogLoginComponent } from './dialog-login/dialog-login.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { OwnersigninComponent } from './ownersignin/ownersignin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    MainComponent,
    SliderComponent,
    AboutComponent,
    MenuComponent,
    DrinksComponent,
    LoginComponent,
    RegistrationComponent,
    ContactComponent,
    RestaurantownerComponent,
    DialogLoginComponent,
    OwnersigninComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatFormFieldModule,
    MatDatepickerModule,
    MatDialogModule,
    MatBottomSheetModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass:AuthInter,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
