import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameBoardComponent} from './game-board/game-board.component';
import {HintCardComponent} from "./hint-card/hint-card.component";


const routes: Routes = [
  { path: 'hint', component: HintCardComponent},
  { path: '', component: GameBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
