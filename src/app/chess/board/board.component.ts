import { Component, OnInit } from '@angular/core';
import { generateEmptyBoard } from '../chess.util';

@Component({
  selector: 'chess-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() {}

  board: any[];
  ngOnInit() {
    this.board = generateEmptyBoard();
  }

  onClick(col, row) {
    console.log('TEMP', col, row);
  }

}
