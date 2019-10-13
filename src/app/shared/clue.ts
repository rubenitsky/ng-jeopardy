import {Contestant} from './contestant';

export class Clue {
  private readonly _score: number;
  private _clue: string;
  private _answeredCorrectly: Contestant;

  constructor(score) {
    this._score = score;
  }


  get score(): number {
    return this._score;
  }

  get clue(): string {
    return this._clue;
  }

  set clue(value: string) {
    this._clue = value;
  }

  get answeredCorrectly(): Contestant {
    return this._answeredCorrectly;
  }

  set answeredCorrectly(value: Contestant) {
    this._answeredCorrectly = value;
  }
}