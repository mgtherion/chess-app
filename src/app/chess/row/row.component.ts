import { Component, OnInit } from '@angular/core';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'chess-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  cells: string[];
  constructor(boardComponent: BoardComponent) {
    this.cells = ['', '', '', '', '', '', '', '', '', '']
  }

  ngOnInit() {
  }

}
