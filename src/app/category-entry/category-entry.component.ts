import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CATEGORY_COUNT, HintValues} from "../shared/enums";
import {Category} from "../shared/category";
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Clue} from "../shared/clue";

@Component({
  selector: 'app-category-entry',
  templateUrl: './category-entry.component.html',
  styleUrls: ['./category-entry.component.scss']
})
export class CategoryEntryComponent implements OnInit {

  @Output() addNewCategory = new EventEmitter<Category>();
  public CATEGORY_COUNT = CATEGORY_COUNT;
  public HINT_VALUES = Object.keys(HintValues).filter(val => (typeof HintValues[val] !== 'number'));

  public categoryList: Array<Category> = [];
  public categoryListArray = new FormArray([]);
  public categoryListFormGroup = new FormGroup({
    categories: this.categoryListArray
  });

  public categoryHintsFormArray = new FormArray([]);

  constructor() {}

  ngOnInit() {
    this.generateNewCategoryFormGroup();
  }

  public generateNewCategoryFormGroup(): void {
    this.categoryListArray.push(
      new FormGroup({
        'name': new FormControl('', [Validators.required]),
        'clues': this.generateClueAnswerFormArray()
      })
    );
  }

  public generateClueAnswerFormArray(): FormArray {
    const tempClueAnswerFormArray = new FormArray([]);

    this.HINT_VALUES.forEach(hint => {
      tempClueAnswerFormArray.push(this.generateHintAnswerFormGroup(hint))
    });

    return tempClueAnswerFormArray;
  }

  private generateHintAnswerFormGroup(level: string): FormGroup {
    return new FormGroup({
      'score': new FormControl(level),
      'clue': new FormControl('', [Validators.required]),
      'answer': new FormControl('', [Validators.required])
    });
  }

  public addCategory(categoryFormGroup: FormGroup): void {
    if (categoryFormGroup.valid) {
      const formValue = categoryFormGroup.value;
      const listOfClues = this.getClueListFromHints(formValue.clues);
      this.categoryList.push(new Category(formValue.name, listOfClues));
      this.addNewCategory.emit(categoryFormGroup.value);
    }
  }

  private getClueListFromHints(clues) {
    const result = [];
    clues.forEach(clue => result.push( new Clue(clue.score, clue.clue, clue.answer) ));
    return result;
  }

  public getCategoryCluesControlList(categoryItem: AbstractControl): FormArray {
    return categoryItem.get('clues') as FormArray;
  }

  public getClueScore(clue: AbstractControl): number {
    return clue.get('score').value;
  }
}
