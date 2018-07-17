import { Component, OnInit } from '@angular/core';
import { generateBoard, Cell, Board, Status, Content } from '../chess.util';

@Component({
  selector: 'chess-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() {}

  selected: number[] = [];

  board: Board;
  ngOnInit(): void {
    this.board = generateBoard();
  }

  onClick(row: number, col:number): void {
    //missclick
    if (this.getCell(row, col).content === Content.empty &&
      this.selected.length === 0) {
      return;
    }

    //deselect previous
    if (this.selected.length) {
      this.deselect();

      //second click cancels selection
      if (this.selected[0] === row &&
          this.selected[1] === col) {
        this.selected = [];
        return;
      }
    }

    //select new
    this.select(row, col);

    //show moves
    this.showMoves();
  }

  deselect(): void {
    let [row, col] = this.selected;
    let cell = this.getCell(row, col);
    cell.status = Status.none;
    this.board[row][col] = cell;
  }

  select(row: number, col: number): void {
    let cell = this.getCell(row, col);
    cell.status = Status.selected;
    this.board[row][col] = cell;
    this.selected = [row, col];
  }

  showMoves() {

  }

  getCell(row: number, col: number): Cell {
    return Object.assign({}, this.board[row][col]);
  }

}
