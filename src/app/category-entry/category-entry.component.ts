import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CATEGORY_COUNT, HintValues} from "../shared/enums";
import {Category} from "../shared/category";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
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

  public categoryHintsFormArray = new FormArray([]);
  public categoryFormGroup = new FormGroup({
    'name': this.nameFormControl,
    'clues': this.categoryHintsFormArray
  });

  constructor() {}

  ngOnInit() {
    this.setHintForm();

    this.categoryList.push(new Category('The Dinosaurs', [
      new Clue(200, 'ras at nibh nec tortor sollicitudin rhoncus ac vel quam.'),
      new Clue(400, 'Ut tristique justo vitae accumsan volutpat.'),
      new Clue(600, 'Suspendisse dignissim metus ut velit faucibus porttitor.'),
      new Clue(800, 'Pellentesque sit amet sem et sapien laoreet aliquam vitae ut ante.'),
      new Clue(1000, 'Cras rhoncus magna a varius vulputate.')
    ]));
  }

  public setHintForm() {
    this.HINT_VALUES.forEach(hint => {
      this.categoryHintsFormArray.push(this.generateHintAnswerFormGroup(hint))
    });
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
}
