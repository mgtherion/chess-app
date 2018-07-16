import { Component, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';

@Component({
  selector: 'chess-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  rows: any[];
  constructor(logic: LogicService) {
    this.rows = logic.getBoard();
  }

  ngOnInit() {
  }

}
