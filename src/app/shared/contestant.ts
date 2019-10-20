export class Contestant {
  private _name: string;
  private _score: number = 0;
  private _position: number = 0;

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

  get position(): number {
    return this._position;
  }

  set position(value: number) {
    this._position = value;
  }

  public addToScore(value: number) {
    this._score += value;
  }
}
