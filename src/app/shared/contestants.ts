import {Contestant} from './contestant';


export class Contestants {
  private _contestantMap: Map<string, Contestant>;

  constructor() {
    this._contestantMap = new Map();
  }

  public add(contestant: Contestant) {
    const id = contestant.name.replace(/[\W_]+/g,'-');
    this._contestantMap.set(id, contestant);
  }

  public getList(): Array<Contestant> {
    return this._contestantMap.values();
  }
}
