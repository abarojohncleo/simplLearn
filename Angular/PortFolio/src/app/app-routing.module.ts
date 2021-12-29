import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import {IntroComponent} from './Components/intro/intro.component';
import {NavbarComponent} from './Components/navbar/navbar.component';
import {CardsComponent} from './Components/cards/cards.component';
import { AboutComponent } from './Components/about/about.component';

const routes: Routes = [
  {path: 'home', component: IntroComponent},
  {path: 'about', component: AboutComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }