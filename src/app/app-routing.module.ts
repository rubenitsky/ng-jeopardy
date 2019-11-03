import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameBoardComponent} from './game-board/game-board.component';
import {HintCardComponent} from "./hint-card/hint-card.component";
import {CoverComponent} from "./cover/cover.component";
import {ContestantEntryComponent} from "./contestant-entry/contestant-entry.component";
import {CategoryEntryComponent} from "./category-entry/category-entry.component";


const routes: Routes = [
  { path: 'hint', component: HintCardComponent},
  { path: 'cover', component: CoverComponent},
  { path: 'category', component: CategoryEntryComponent},
  { path: 'contestants', component: ContestantEntryComponent},
  { path: '', component: GameBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
