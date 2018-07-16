import { Injectable } from '@angular/core';
import { generateEmptyBoard } from './chess.util';

@Injectable()
export class LogicService {

  public board;
  constructor() {
    this.board = generateEmptyBoard();
  }

  getBoard() {
    return this.board;
  }

}
