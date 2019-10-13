export public class Contestant {
  private _name: string;
  private _score: number;

  constructor(name: string) {
    this._name = name;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    this._score = value;
  }

  public addToScore(value: number) {
    this._score += value;
  }
}
