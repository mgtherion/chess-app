export enum Team {
  black = 'b',
  white = 'w'
}

export enum Status {
  none = 'none',
  highlighted = 'highlighted',
  selected = 'selected',
  vulnerable = 'vulnerable'
}

export enum Content {
  empty = 'empty',
  bPawn = 'b-pawn',
  wPawn = 'w-pawn',
  bKnight = 'b-knight',
  wKnight = 'w-knight'
}

export interface Cell {
  status: Status,
  content: Content
}

export type Row = Cell[];

export type Board = Row[];

export type Coords = number[];

export function generateEmptyBoard(): Board {
  return new Array(10)
      .fill(null).map(
        () => new Array(10)
          .fill(null).map(
            () => {
              return {
                content: 'empty',
                status: 'none',
                color: 'none'
              };
            }
          )
      ) as Board;
}

export function fillBoard(board: Board): Board {
  board[8][0].content = Content.wPawn;
  board[8][1].content = Content.wPawn;
  board[8][2].content = Content.wPawn;
  board[8][3].content = Content.wPawn;
  board[8][4].content = Content.wPawn;
  board[8][5].content = Content.wPawn;
  board[8][6].content = Content.wPawn;
  board[8][7].content = Content.wPawn;
  board[8][8].content = Content.wPawn;
  board[8][9].content = Content.wPawn;

  board[1][0].content = Content.bPawn;
  board[1][1].content = Content.bPawn;
  board[1][2].content = Content.bPawn;
  board[1][3].content = Content.bPawn;
  board[1][4].content = Content.bPawn;
  board[1][5].content = Content.bPawn;
  board[1][6].content = Content.bPawn;
  board[1][7].content = Content.bPawn;
  board[1][8].content = Content.bPawn;
  board[1][9].content = Content.bPawn;

  board[1][0].content = Content.bPawn;
  board[5][5].content = Content.wPawn;
  board[6][5].content = Content.wPawn;
  board[5][4].content = Content.bPawn;

  board[9][0].content = Content.wKnight;
  board[9][1].content = Content.wKnight;
  board[9][2].content = Content.wKnight;
  board[9][3].content = Content.wKnight;
  board[9][4].content = Content.wKnight;
  board[9][5].content = Content.wKnight;
  board[9][6].content = Content.wKnight;
  board[9][7].content = Content.wKnight;
  board[9][8].content = Content.wKnight;
  board[9][9].content = Content.wKnight;

  board[0][0].content = Content.bKnight;
  board[0][1].content = Content.bKnight;
  board[0][2].content = Content.bKnight;
  board[0][3].content = Content.bKnight;
  board[0][4].content = Content.bKnight;
  board[0][5].content = Content.bKnight;
  board[0][6].content = Content.bKnight;
  board[0][7].content = Content.bKnight;
  board[0][8].content = Content.bKnight;
  board[0][9].content = Content.bKnight;

  return board;
}

export function generateBoard(): Board {
  return fillBoard(generateEmptyBoard());
}

export function contain(actions: Coords[], row: number, col: number): boolean {
  for (let i = 0; i < actions.length; i++) {
    let [_row, _col] = actions[i];
    if (row === _row && col === _col) {
      return true;
    }
  }
  return false;
}