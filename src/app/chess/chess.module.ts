import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { RowComponent } from './row/row.component';
import { CellComponent } from './cell/cell.component';
import { ChessRoutingModule } from './chess-routing.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    ChessRoutingModule
  ],
  declarations: [
    BoardComponent,
    RowComponent,
    CellComponent,
    MenuComponent
  ],
  providers: [

  ]
})
export class ChessModule { }
