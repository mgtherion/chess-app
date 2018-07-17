import { Component, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';

@Component({
  selector: 'chess-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  board: any[];
  constructor(logic: LogicService) {
    this.board = logic.getBoard();
  }

  ngOnInit() {
  }

  onClick(col, row) {
    console.log('TEMP', col, row);
  }

}
