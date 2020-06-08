import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-experience',
  templateUrl: './about-experience.component.html',
  styleUrls: ['./about-experience.component.scss']
})
export class AboutExperienceComponent implements OnInit {
  content: string;
  constructor() { }

  ngOnInit() {
    this.content = 'Hello everyone! My name is Pallab Borah. '
   + 'Currently, I am working as a front-end developer in Kongsberg Digital India. ' 
   + 'Prior to joining Kongsberg, I worked in the Social Development Sector for a year as a fellow in Teach For India. ' 
   + 'In addition to these, I also have sales & marketing Internship experience with OYO. ' 
   + 'As far my educational qualification is concerned I have completed my BTech in CSE from Tezpur Central University. '
   + 'I love being a techie but at the same time I am quite fascinated by the principles of Design. '
    + 'P.S.  I am a chai lover and a storyteller. '
 + ' So, If you are up for a conversation over a cup of tea, please contact me at any one the social media handles attached with the photo';
  }

}
