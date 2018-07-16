import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chess-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input()
  index: number;

  @Input()
  data: any;

  constructor() { }

  public content;
  ngOnInit() {
    this.content = this.data.content;
  }

}
