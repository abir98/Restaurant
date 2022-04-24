import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { OwnersigninComponent } from './ownersignin/ownersignin.component';
import { RestaurantownerComponent } from './restaurantowner/restaurantowner.component';

const routes: Routes = [
  {path:"",component: MainComponent},
  {path:"home",component: MainComponent},
  {path:"contact",component: ContactComponent},
  {path:"login",component: LoginComponent},
  {path:"loginres",component: OwnersigninComponent},
  {path:"signupres",component: RestaurantownerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
