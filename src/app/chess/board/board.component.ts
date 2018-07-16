import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chess-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  rows: any[];
  constructor() {
    this.rows = [[],[],[],[],[],[],[],[],[],[]];
  }

  ngOnInit() {
  }

}
