import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealSkillPageComponent } from './real-skill-page.component';

describe('RealSkillPageComponent', () => {
  let component: RealSkillPageComponent;
  let fixture: ComponentFixture<RealSkillPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealSkillPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealSkillPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
