import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeIntroComponent} from './welcome-intro/welcome-intro.component';
import {AboutExperienceComponent} from './about-experience/about-experience.component';


const routes: Routes = [
{ path: '', component: WelcomeIntroComponent  },
{ path: 'about', component: AboutExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
