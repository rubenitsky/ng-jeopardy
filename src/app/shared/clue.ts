import {Contestant} from './contestant';

export class Clue {
  private readonly _score: number;
  private _clue: string;
  private _answer: string;
  private _answeredCorrectly: Contestant;
  private _isComplete: boolean;

  constructor(score, clue?: string, answer?: string) {
    this._score = score;
    if (clue) {
      this._clue = clue;
    }

    if (answer) {
      this._answer = answer;
    }
  }


  get points(): number {
    return this._score;
  }

  get clue(): string {
    return this._clue;
  }

  set clue(value: string) {
    this._clue = value;
  }

  get answer(): string {
    return this._answer;
  }

  set answer(value: string) {
    this._answer = value;
  }

  get answeredCorrectly(): Contestant {
    return this._answeredCorrectly;
  }

  set answeredCorrectly(value: Contestant) {
    this._answeredCorrectly = value;
  }

  get isComplete(): boolean {
    return this._isComplete;
  }

  set isComplete(value: boolean) {
    this._isComplete = value;
  }
}
