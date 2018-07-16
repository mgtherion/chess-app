import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chess-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input()
  index: number;

  @Input()
  row: any[];

  constructor() {
  }

  ngOnInit() {
  }

}
