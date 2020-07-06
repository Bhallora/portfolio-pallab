import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCytographComponent } from './skill-cytograph.component';

describe('SkillCytographComponent', () => {
  let component: SkillCytographComponent;
  let fixture: ComponentFixture<SkillCytographComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillCytographComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillCytographComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
