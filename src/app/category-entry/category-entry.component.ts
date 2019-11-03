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
  public HINT_VALUES = Object.keys(HintValues);

  public categoryList: Array<Category> = [];


  public nameFormControl = new FormControl('', [Validators.required]);
  public hintFormControl = new FormControl('', [ Validators.required ]);
  public answerFormControl = new FormControl('', [Validators.required ]);

  public categoryHintsFormArray = new FormArray([
    this.hintFormControl,
    this.answerFormControl
  ]);
  public categoryFormGroup = new FormGroup({
    'name': this.nameFormControl,
    'hints': this.categoryHintsFormArray
  });

  constructor() { }

  ngOnInit() {
  }

  public addCategory(categoryFormGroup: FormGroup): void {
    // if (categoryFormGroup.valid) {
    //   const formValue = categoryFormGroup.value;
    //   this.categoryList.push(new Category(formValue.name, formValue.hints))
    //
    // }
  }

}
