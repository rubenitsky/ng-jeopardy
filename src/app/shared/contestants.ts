import {Contestant} from './contestant';


export class Contestants {
  private _contestantMap: Map<string, Contestant> = new Map();

  constructor() {
  }

  public add(contestant: Contestant) {
    const id = contestant.name.replace(/[\W_]+/g,'-');
    this._contestantMap.set(id, contestant);
  }

  public getList(): Array<Contestant> {
    return Array.from(this._contestantMap.values());
  }
}
