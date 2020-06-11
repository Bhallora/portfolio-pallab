import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSkillPageComponent } from './tech-skill-page.component';

describe('TechSkillPageComponent', () => {
  let component: TechSkillPageComponent;
  let fixture: ComponentFixture<TechSkillPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechSkillPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechSkillPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
