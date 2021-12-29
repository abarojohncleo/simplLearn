import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { IntroComponent } from './Components/intro/intro.component';
import { CardsComponent } from './Components/cards/cards.component';
import { FooterComponent } from './Components/footer/footer.component';
import {AboutComponent } from './Components/about/about.component';

import { AppRoutingModule } from './app-routing.module';
import { ExperienceComponent } from './Components/experience/experience.component';
import { SkillsetsComponent } from './Components/skillsets/skillsets.component'; // CLI imports AppRoutingModule

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    CardsComponent,
    FooterComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsetsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule // CLI adds AppRoutingModule to the AppModule's imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
