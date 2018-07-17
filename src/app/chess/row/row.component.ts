import { Component, Input } from '@angular/core';
import { Row } from '../chess.util';

@Component({
  selector: 'chess-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent {

  @Input()
  index: number;

  @Input()
  row: Row;
}
