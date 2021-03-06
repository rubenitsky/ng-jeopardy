import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { ClueGridComponent } from './clue-grid/clue-grid.component';
import { HintCardComponent } from './hint-card/hint-card.component';
import { CoverComponent } from './cover/cover.component';
import { ContestantEntryComponent } from './contestant-entry/contestant-entry.component';
import { CategoryEntryComponent } from './category-entry/category-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    ScoreBoardComponent,
    ClueGridComponent,
    HintCardComponent,
    CoverComponent,
    ContestantEntryComponent,
    CategoryEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
