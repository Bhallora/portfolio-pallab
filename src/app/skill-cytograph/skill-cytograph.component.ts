import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import * as cytoscape from 'cytoscape';
import { ElementsDefinition, EdgeDefinition, NodeDefinition } from 'cytoscape';
import { STYLE, LAYOUT } from './skill-cytograph-default';
import dagre from 'cytoscape-dagre';

cytoscape.use(dagre);

@Component({
  selector: 'app-skill-cytograph',
  templateUrl: './skill-cytograph.component.html',
  styleUrls: ['./skill-cytograph.component.scss']
})

export class SkillCytographComponent implements OnInit, OnDestroy {
  // @ViewChild('calculatorgraph', { static: true }) graph: ElementRef;
  private cy: cytoscape.Core;
  // cyElements: ElementsDefinition = { nodes: [], edges: [] };
  constructor() { }

  ngOnInit() {
    const elements = this.getElements();
    this.initCytoscape(elements);
  }

  private initCytoscape(elements) {
    this.cy = cytoscape({
      container: document.getElementById('cy'),
      elements,
      style: STYLE,
      layout: LAYOUT,
    });
     this.cy.on('mouseover', (event) => {
  if(event.cy.container()) {
    event.cy.container().style.cursor = 'pointer';
  }
}

/* this.cy.on('mouseout', (event) => {
  if(event.cy.container()) {
    event.cy.container().style.cursor = 'default';
  }
} */
  }

  private getElements() {
    let nodes: NodeDefinition[] = [];
    let edges: EdgeDefinition[] = [];
    nodes = [
    { data: { id: 'EMPATHY', score: 'EMPATHY: 93%' } },
    { data: { id: 'CREATIVITY', score: 'CREATIVITY: 91%'} },
    { data: { id: 'STORYTELLING', score: 'STORYTELLING: 85%' } },
    { data: { id: 'RESILIENCE', score: 'RESILIENCE: 86%' } },
    { data: { id: 'DESIGN-THINKING', score: 'D-THINKING: 86%'} },
    { data: { id: 'TEAM-PLAYER',  score: 'TEAM-PLAYER: 92%'} },
    { data: { id: 'REAL-SKILLS', score: 'AVERAGE: 88.9%'}}
    ];
    edges = [
      { data: { source: 'REAL-SKILLS', target: 'EMPATHY' } },
      { data: { source: 'REAL-SKILLS', target: 'CREATIVITY' } },
      { data: { source: 'REAL-SKILLS', target: 'STORYTELLING' } },
      { data: { source: 'REAL-SKILLS', target: 'RESILIENCE' } },
      { data: { source: 'REAL-SKILLS', target: 'TEAM-PLAYER' } },
      { data: { source: 'REAL-SKILLS', target: 'DESIGN-THINKING' } }, 
    ];
    const elements: ElementsDefinition = { nodes, edges };
    return elements;
  }
  ngOnDestroy(): void {
    this.cy.destroy();
  }
}
