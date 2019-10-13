import {Clue} from './clue';


export class Category {
  private _label: string;
  private _clues: Map<number, Clue>;

  constructor(label: string) {
    this._label = label;
    this._clues = new Map();
  }


  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  public addClue(newClew: Clue) {
    this._clues.set(newClew.score, newClew);
  }

  public getClue(score: number): Clue {
    return this._clues.get(score);
  }

  public removeClue(score: number) {
    this._clues.delete(score);
  }
}
