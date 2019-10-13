import {Clue} from './clue';


export class Category {
  private _label: string;
  private _clues: Map<number, Clue>;

  constructor(label: string, clues?: Array<Clue>) {
    this._label = label;
    this._clues = new Map();

    if (!!clues && clues.length > 0) {
      this.addClues(clues);
    }
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

  public addClues(clues: Array<Clue>) {
    clues.forEach(clue => this.addClue(clue));
  }
}
