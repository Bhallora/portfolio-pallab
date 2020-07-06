import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { WelcomeIntroComponent } from './welcome-intro/welcome-intro.component';
import { AboutExperienceComponent } from './about-experience/about-experience.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { RealSkillPageComponent } from './real-skill-page/real-skill-page.component';
import { TechSkillPageComponent } from './tech-skill-page/tech-skill-page.component';
import { SkillCytographComponent } from './skill-cytograph/skill-cytograph.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ContactPageComponent,
    HeaderTitleComponent,
    WelcomeIntroComponent,
    AboutExperienceComponent,
    RealSkillPageComponent,
    TechSkillPageComponent,
    SkillCytographComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
