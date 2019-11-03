import { Component, OnInit } from '@angular/core';
import {CATEGORY_COUNT, HintValues} from "../shared/enums";
import {Category} from "../shared/category";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-category-entry',
  templateUrl: './category-entry.component.html',
  styleUrls: ['./category-entry.component.scss']
})
export class CategoryEntryComponent implements OnInit {

  public CATEGORY_COUNT = CATEGORY_COUNT;
  public HINT_VALUES = Object.keys(HintValues).filter(val => !isNaN(val));

  public categoryList: Array<Category> = [];


  public nameFormControl = new FormControl('', [Validators.required]);
  public levelFormControl = new FormControl('', []);
  public hintFormControl = new FormControl('', [ Validators.required ]);
  public answerFormControl = new FormControl('', [Validators.required ]);

  public hintAnswerFormGroup = new FormGroup({
    'level': this.levelFormControl,
    'hint': this.hintFormControl,
    'answer': this.answerFormControl
  });

  public categoryHintsFormArray = new FormArray([]);
  public categoryFormGroup = new FormGroup({
    'name': this.nameFormControl,
    'hints': this.categoryHintsFormArray
  });

  constructor() { }

  ngOnInit() {
    this.setHintForm();
  }

  public setHintForm() {
    this.HINT_VALUES.forEach(hint => {
      this.categoryHintsFormArray.push(this.generateHintAnswerFormGroup(hint))
    })
  }

  private generateHintAnswerFormGroup(level: string): FormGroup {
    return new FormGroup({
      'level': new FormControl(level),
      'hint': new FormControl('', [Validators.required]),
      'answer': new FormControl('', [Validators.required])
    });
  }

  public addCategory(categoryFormGroup: FormGroup): void {
    console.log(categoryFormGroup.value);
    if (categoryFormGroup.valid) {
      const formValue = categoryFormGroup.value;
      this.getClueListFromHints(formValue.hints);
      this.categoryList.push(new Category(formValue.name, formValue.hints))

    }
  }

  private getClueListFromHints() {

  }
}
