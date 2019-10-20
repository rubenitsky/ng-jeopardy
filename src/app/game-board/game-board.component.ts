import { Component, OnInit } from '@angular/core';
import {Contestant} from "../shared/contestant";
import {Category} from "../shared/category";
import {Clue} from "../shared/clue";
import {Contestants} from "../shared/contestants";

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
    new Clue(200, 'ras at nibh nec tortor sollicitudin rhoncus ac vel quam.'),
    new Clue(400, 'Ut tristique justo vitae accumsan volutpat.'),
    new Clue(600, 'Suspendisse dignissim metus ut velit faucibus porttitor.'),
    new Clue(800, 'Pellentesque sit amet sem et sapien laoreet aliquam vitae ut ante.'),
    new Clue(1000, 'Cras rhoncus magna a varius vulputate.')
  ]);

  private women = new Category('Notable Women', [
    new Clue(200, 'Ut at dolor elementum orci elementum euismod.'),
    new Clue(400, 'In bibendum ex et nibh tincidunt blandit.'),
    new Clue(600, 'Suspendisse a nisi non diam scelerisque tempus vitae ut felis.'),
    new Clue(800, 'Morbi sit amet ex et augue interdum rutrum.'),
    new Clue(1000, 'Praesent lacinia arcu quis urna semper cursus.')
  ]);

  private oxford = new Category('Oxford English Dictionary', [
    new Clue(200, 'Morbi venenatis nibh vel scelerisque fringilla.'),
    new Clue(400, 'Proin commodo metus et urna blandit venenatis.'),
    new Clue(600, 'Aliquam at metus nec mi feugiat fringilla ut at felis.'),
    new Clue(800, 'Vestibulum nec ipsum maximus, venenatis nulla non, feugiat urna.'),
    new Clue(1000, 'Phasellus cursus est non ullamcorper luctus.')
  ]);

  private instrument = new Category('Name That Instrument', [
    new Clue(200, 'Sed tristique magna vitae lacus lobortis, vitae tincidunt lorem placerat.'),
    new Clue(400, 'Integer vitae lacus non sem tincidunt molestie vel id massa.'),
    new Clue(600, 'Nulla vel leo sed mauris viverra blandit.'),
    new Clue(800, 'Nulla pretium leo vitae posuere mollis.'),
    new Clue(1000, 'Donec vel dui a nunc suscipit mollis sit amet eu est.')
  ]);

  private belgium = new Category('Belgium', [
    new Clue(200, 'Morbi laoreet diam id nulla tincidunt, congue scelerisque ipsum laoreet.'),
    new Clue(400, 'In fringilla nisi ut consectetur sagittis.'),
    new Clue(600, 'Vestibulum interdum mi sed tempor porta.'),
    new Clue(800, 'In gravida orci lobortis risus semper lobortis.'),
    new Clue(1000, 'Duis ac tortor nec ipsum pretium lobortis.')
  ]);

  private composers = new Category('Composers By Country', [
    new Clue(200, 'Cras ac nisi id nulla tempor eleifend.'),
    new Clue(400, 'Praesent tincidunt enim non viverra ultrices.'),
    new Clue(600, 'Nullam semper neque vitae est rutrum sodales.'),
    new Clue(800, 'Duis sollicitudin sapien pulvinar ex luctus tincidunt.'),
    new Clue(1000, 'Vivamus sit amet mi sit amet mauris faucibus viverra vitae eu velit.')
  ]);

  public categories: Array<Category> = [
    this.dinosaur, this.women, this.oxford, this.instrument, this.belgium, this.composers
  ];

  public contestants: Contestants = new Contestants();
  public contestantsList: Array<Contestant>;

  public selectedClue: Clue;

  constructor() { }

  ngOnInit() {
    this.composers.markClueAsComplete(400);
    this.instrument.markClueAsComplete(600);

    this.contestant1.addToScore(140000);
    this.contestant2.addToScore(-30000);
    this.contestant3.addToScore(80000);

    this.contestants.add(this.contestant1);
    this.contestants.add(this.contestant2);
    this.contestants.add(this.contestant3);

    this.contestantsList = this.contestants.getList();
    this.contestants.updatePositions();
  }

  public showHint(clue: Clue) {
    this.selectedClue = clue;
    console.log('selected clue: ', this.selectedClue);
  }

}
