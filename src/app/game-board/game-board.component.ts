import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  public categories = [
    {
      label: 'The Dinosaurs',
      clues: [
        { score: 200, clue: '', contestant: '' },
        { score: 400, clue: '', contestant: '' },
        { score: 600, clue: '', contestant: '' },
        { score: 800, clue: '', contestant: '' },
        { score: 1000, clue: '', contestant: '' },
      ]
    },
    {
      label: 'Notable Women',
      clues: [
        { score: 200, clue: '', contestant: '' },
        { score: 400, clue: '', contestant: '' },
        { score: 600, clue: '', contestant: '' },
        { score: 800, clue: '', contestant: '' },
        { score: 1000, clue: '', contestant: '' },
      ]
    },
    {
      label: 'Oxford English Dictionary',
      clues: [
        { score: 200, clue: '', contestant: '' },
        { score: 400, clue: '', contestant: '' },
        { score: 600, clue: '', contestant: '' },
        { score: 800, clue: '', contestant: '' },
        { score: 1000, clue: '', contestant: '' },
      ]
    },
    {
      label: 'Name That Instrument',
      clues: [
        { score: 200, clue: '', contestant: '' },
        { score: 400, clue: '', contestant: '' },
        { score: 600, clue: '', contestant: '' },
        { score: 800, clue: '', contestant: '' },
        { score: 1000, clue: '', contestant: '' },
      ]
    },
    {
      label: 'Belgium',
      clues: [
        { score: 200, clue: '', contestant: '' },
        { score: 400, clue: '', contestant: '' },
        { score: 600, clue: '', contestant: '' },
        { score: 800, clue: '', contestant: '' },
        { score: 1000, clue: '', contestant: '' },
      ]
    },
    {
      label: 'Composers By Country',
      clues: [
        { score: 200, clue: '', contestant: '' },
        { score: 400, clue: '', contestant: '' },
        { score: 600, clue: '', contestant: '' },
        { score: 800, clue: '', contestant: '' },
        { score: 1000, clue: '', contestant: '' },
      ]
    }
  ];

  public contestants = [
    {
      name: 'Scott',
      score: 0
    },
    {
      name: 'Jim',
      score: 0
    },
    {
      name: 'Susan',
      score: 0
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
