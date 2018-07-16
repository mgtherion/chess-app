import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { RowComponent } from './row/row.component';
import { CellComponent } from './cell/cell.component';
import { ChessRoutingModule } from './chess-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChessRoutingModule
  ],
  declarations: [
    BoardComponent,
    RowComponent,
    CellComponent
  ]
})
export class ChessModule { }
