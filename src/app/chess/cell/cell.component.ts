import { Component, OnInit, Input } from '@angular/core';
import { RowComponent } from '../row/row.component';
import { BoardComponent } from '../board/board.component';

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
  data: any;

  constructor(public row: RowComponent, public board: BoardComponent) {}

  public content;
  ngOnInit() {
    this.content = this.data.content;
  }

  onClick() {
    this.board.onClick(this.index, this.row.index);
  }

}
