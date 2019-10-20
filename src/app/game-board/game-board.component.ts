import { Component, OnInit } from '@angular/core';
import {Contestant} from "../shared/contestant";
import {Category} from "../shared/category";
import {Clue} from "../shared/clue";

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  private contestant1 = new Contestant('Scott');
  private contestant2 = new Contestant('Jim');
  private contestant3 = new Contestant('Susan');

  private dinosaur = new Category('The Dinosaurs', [
    new Clue(200, ''),
    new Clue(400, ''),
    new Clue(600, ''),
    new Clue(800, ''),
    new Clue(1000, '')
  ]);

  private women = new Category('Notable Women', [
    new Clue(200, ''),
    new Clue(400, ''),
    new Clue(600, ''),
    new Clue(800, ''),
    new Clue(1000, '')
  ]);

  private oxford = new Category('Oxford English Dictionary', [
    new Clue(200, ''),
    new Clue(400, ''),
    new Clue(600, ''),
    new Clue(800, ''),
    new Clue(1000, '')
  ]);

  private instrument = new Category('Name That Instrument', [
    new Clue(200, ''),
    new Clue(400, ''),
    new Clue(600, ''),
    new Clue(800, ''),
    new Clue(1000, '')
  ]);

  private belgium = new Category('Belgium', [
    new Clue(200, ''),
    new Clue(400, ''),
    new Clue(600, ''),
    new Clue(800, ''),
    new Clue(1000, '')
  ]);

  private composers = new Category('Composers By Country', [
    new Clue(200, ''),
    new Clue(400, ''),
    new Clue(600, ''),
    new Clue(800, ''),
    new Clue(1000, '')
  ]);

  public categories: Array<Category> = [
    this.dinosaur, this.women, this.oxford, this.instrument, this.belgium, this.composers
  ];

  public contestants: Array<Contestant> = [
    this.contestant1,
    this.contestant2,
    this.contestant3
  ];

  constructor() { }

  ngOnInit() {
    this.contestant1.addToScore(140000);
    this.contestant2.addToScore(30000);
    this.contestant3.addToScore(80000);
    console.log(this.dinosaur.clues);
  }

}
