import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-hint-card',
  templateUrl: './hint-card.component.html',
  styleUrls: ['./hint-card.component.scss']
})
export class HintCardComponent implements OnInit {

  @Input() show: boolean;
  @Input() hint: string;

  constructor() { }

  ngOnInit() {
  }

}
