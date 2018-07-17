import { Component, OnInit } from '@angular/core';
import { getHandlerByName } from '../pieces';
import { generateBoard, contain,
  Cell, Board, Status, Content, Coords, Team } from '../chess.util';


@Component({
  selector: 'chess-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  selectedPiece: string = '';
  selectedCoords: number[] = [];

  //possible actions
  moves: Coords[] = [];
  attacks: Coords[] = [];

  board: Board;
  currentTurn: Team;
  ngOnInit(): void {
    this.board = generateBoard();
    this.currentTurn = Team.white;
  }

  onClick(row: number, col:number): void {
    let clickedCell = this.getCell(row, col);
    //no pieces was selected and empty space clicked -> missclick
    if (clickedCell.content === Content.empty &&
      !this.selectedPiece.length) {
      return;
    }

    //piece already selected -> possible attack or move
    if (this.selectedPiece.length &&
      contain(this.attacks.concat(this.moves), row, col)) {
        clickedCell.content = this.selectedPiece as Content;
        clickedCell.status = Status.none;
        this.board[row][col] = clickedCell;
        this.clearOriginCell();
        this.hideActions();
        this.toggleTurn();
        return;
    }

    //not action but piece was selected -> deselect all
    if (this.selectedPiece.length) {
      this.hideActions();
      return;
    }

    //wrong turn handling
    if (clickedCell.content !== Content.empty &&
      clickedCell.content.charAt(0) !== this.currentTurn) {
      return;
    }

    //only one case left -> new piece select and highlight its actions
    this.selectPiece(row, col);
    this.getActions(row, col);
  }

  selectPiece(row: number, col: number): void {
    let cell = this.markCell(row, col, Status.selected);
    this.selectedCoords = [row, col];
    this.selectedPiece = cell.content;
  }

  //get actions from piece handlers and highlight all actions
  getActions(row: number, col: number): void {

    let actions = getHandlerByName(this.selectedPiece)(row, col);
    this.showMoves(actions.moves);
    this.showAttacks(actions.attacks);
  }

  showMoves(moves: Coords[]): void {
    this.moves = [];
    moves.map((moveCoord: Coords) => {
      let [row, col] = moveCoord;
      let target = this.getCell(row, col);
      if (target.content == 'empty') {
        this.moves.push([row, col]);
        this.markCell(row, col, Status.highlighted);
      }
    });
  }

  showAttacks(attacks: Coords[]): void {
    this.attacks = [];
    attacks.map((attackCoord: Coords) => {
      let [row, col] = attackCoord;
      let target = this.getCell(row, col);

      if (target.content !== 'empty' &&
        //different charAt(0) means opponent piece
        target.content.charAt(0) !== this.selectedPiece.charAt(0)) {
        this.attacks.push([row, col]);
        this.markCell(row, col, Status.vulnerable);
      }
    });
  }

  hideActions(): void {
    //de-highlight all cells with actions
    this.moves
        .concat(this.attacks)
        .map((actionCoord: Coords) => {
          let [row, col] = actionCoord;
          this.markCell(row, col, Status.none);
        });
    //de-highlight selected cell
    if (this.selectedCoords.length){
      let [row, col] = this.selectedCoords;
      this.markCell(row, col, Status.none);
    }
    //reset variables
    this.selectedPiece = '';
    this.selectedCoords = [];
    this.moves = [];
    this.attacks = [];
  }

  getCell(row: number, col: number): Cell {
    //angular only will notice deep change if cell is a new object
    return Object.assign({}, this.board[row][col]);
  }

  markCell(row: number, col: number, status: Status): Cell {
    let target = this.getCell(row, col);
    target.status = status;
    this.board[row][col] = target;
    return target;
  }

  clearOriginCell(): void {
    let [row, col] = this.selectedCoords;
    let target = this.getCell(row, col);
    target.status = Status.none;
    target.content = Content.empty;
    this.board[row][col] = target;
  }

  toggleTurn(): void {
    this.currentTurn =
      this.currentTurn == Team.white?
        Team.black: Team.white;
  }
}
