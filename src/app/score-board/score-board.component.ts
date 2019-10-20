import {Component, Input, OnInit} from '@angular/core';
import {Contestant} from "../shared/contestant";

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent implements OnInit {

  @Input('contestants') contestants: Array<Contestant>;

  constructor() { }

  ngOnInit() {
  }

}
