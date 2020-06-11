import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeIntroComponent} from './welcome-intro/welcome-intro.component';
import {AboutExperienceComponent} from './about-experience/about-experience.component';
import {RealSkillPageComponent} from './real-skill-page/real-skill-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { TechSkillPageComponent } from './tech-skill-page/tech-skill-page.component';


const routes: Routes = [
{ path: '', component: WelcomeIntroComponent  },
{ path: 'about', component: AboutExperienceComponent},
{ path: 'real-skill', component: RealSkillPageComponent},
{ path: 'tech-skill', component: TechSkillPageComponent},
{ path: 'contact', component: ContactPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
