export const LAYOUT = {
  name: 'dagre',
  rankDir: 'BT',
  spacingFactor: 1.7,
  padding: 80
};
export const STYLE = [{
  selector: 'node',
  style: {
    height: 150,
    width: 150,
    label: 'data(id)',
    color: 'rgb(100, 205, 247)',
    'background-fit': 'cover',
    'border-color': 'rgb(100, 205, 247)',
    'border-width': 5,
    'border-opacity': 0.5,
    'text-margin-y': -10,
    'font-size': 40,
    'font-family': '"Amatic SC", cursive',
    'font-weight': 700,
    'cursor': 'pointer'
  }
},
{
  selector: 'edge',
  style: {
    'curve-style': 'bezier',
    width: 3,
    'target-arrow-shape': 'triangle',
    'line-color': 'rgb(100, 205, 247)',
    'target-arrow-color': 'rgb(100, 205, 247)'
  }
},
{
  selector: '#EMPATHY',
  style: {
    'background-image': '../../assets/empathy.png',
  }
},
{
  selector: '#CREATIVITY',
  style: {
    'background-image': '../../assets/creativity.png'
  }
},
{
  selector: '#REAL-SKILLS',
  style: {
    'background-image': '../../assets/real-skills.png',
    'text-margin-y': 220,
    'font-size': 55,
    'font-family': '"Amatic SC", cursive',
    'font-weight': 700
  }
},
{
  selector: '#STORYTELLING',
  style: {
    'background-image': '../../assets/stories.jpg'
  }
},
{
  selector: '#RESILIENCE',
  style: {
    'background-image': '../../assets/resilience.jpeg'
  }
},
{
  selector: '#TEAM-PLAYER',
  style: {
    'background-image': '../../assets/team-player.jpg'
  }
},
{
  selector: '#DESIGN-THINKING',
  style: {
    'background-image': '../../assets/D-thinking.png'
  }
},
{
  selector: ':selected',
  style: {
    color: 'white',
    'background-image': null,
    content: 'data(score)',
    'text-margin-y': 85,
    'background-color': 'black',
    'font-size': 15,
    'font-family': 'Roboto, sans-serif'
  }
}
];
