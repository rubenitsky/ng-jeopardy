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


  public nameFormControl = new FormControl('', [Validators.required]);
  public levelFormControl = new FormControl('', []);
  public hintFormControl = new FormControl('', [ Validators.required ]);
  public answerFormControl = new FormControl('', [Validators.required ]);

  public hintAnswerFormGroup = new FormGroup({
    'score': this.levelFormControl,
    'clue': this.hintFormControl,
    'answer': this.answerFormControl
  });

  public categoryListArray = new FormArray([]);
  public categoryListFormGroup = new FormGroup({
    categories: this.categoryListArray
  });

  public categoryHintsFormArray = new FormArray([]);

  constructor() {}

  ngOnInit() {
    this.generateNewCategoryFormGroup();

    this.categoryList.push(new Category('The Dinosaurs', [
      new Clue(200, 'ras at nibh nec tortor sollicitudin rhoncus ac vel quam.'),
      new Clue(400, 'Ut tristique justo vitae accumsan volutpat.'),
      new Clue(600, 'Suspendisse dignissim metus ut velit faucibus porttitor.'),
      new Clue(800, 'Pellentesque sit amet sem et sapien laoreet aliquam vitae ut ante.'),
      new Clue(1000, 'Cras rhoncus magna a varius vulputate.')
    ]));
  }

  public generateNewCategoryFormGroup(): void {
    this.categoryListArray.push(
      new FormGroup({
        'name': this.nameFormControl,
        'clues': this.generateClueAnswerFormArray()
      })
    );
    console.log(this.categoryListFormGroup);
    console.log('List Array: ', this.categoryListArray);
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

  public getFormGroupControl(categoryItem: AbstractControl, controlName: string): FormControl {
    console.log(controlName, categoryItem, categoryItem.get(controlName));
    return categoryItem.get(controlName) as FormControl;
  }

  public getCategoryCluesControlList(categoryItem: AbstractControl): FormArray {
    console.log('Category Clue List: ', categoryItem, categoryItem.get('clues') as FormArray);
    return categoryItem.get('clues') as FormArray;
  }

  public getClueScore(clue: AbstractControl): number {
    return clue.get('score').value;
  }
}
