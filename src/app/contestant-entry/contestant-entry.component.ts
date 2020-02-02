import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {CONTESTANT_LIMIT} from "../shared/enums";


@Component({
  selector: 'app-contestant-entry',
  templateUrl: './contestant-entry.component.html',
  styleUrls: ['./contestant-entry.component.scss']
})
export class ContestantEntryComponent implements OnInit {

  public CONTESTANT_LIMIT = CONTESTANT_LIMIT;
  public contestantArray = new FormArray([]);
  public contestantFormGroup: FormGroup = new FormGroup({
    contestants: this.contestantArray
  });


  constructor() { }

  ngOnInit() {
    this.insertNewContestantFG();
    this.insertNewContestantFG();
    this.insertNewContestantFG();
  }

  public insertNewContestantFG(): void {
    this.contestantArray.push(
      new FormControl('', [Validators.required])
    );
  }

  public addContestants(contestantFormGroup: FormGroup): void {
    if (contestantFormGroup.valid) {
      const formValue = contestantFormGroup.value;
    }
  }

  public removeContestant(indx: number): void {
    this.contestantArray.removeAt(indx);
  }

  public clearContestantNameValue(indx: number): void {
    this.contestantArray.at(indx).setValue('');
  }

  public finished(): void {
    console.log(this.contestantFormGroup);
  }

}
