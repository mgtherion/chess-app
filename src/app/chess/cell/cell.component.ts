import { Component, OnInit, Input } from '@angular/core';
import { RowComponent } from '../row/row.component';
import { BoardComponent } from '../board/board.component';
import { Cell, Status, Content } from '../chess.util';

@Component({
  selector: 'chess-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
  host: {
    '(click)': 'onClick()'
  }
})
export class CellComponent implements OnInit {

  @Input()
  index: number;

  @Input()
  data: Cell;

  constructor(
    public rowComponent: RowComponent,
    public boardComponent: BoardComponent) {}

  public content: Content;
  public status: Status;
  ngOnInit(): void {
    this.content = this.data.content;
    this.status = this.data.status;
  }

  onClick(): void {
    this.boardComponent.onClick(
      this.rowComponent.index,
      this.index
     );
  }

}
