
export enum Status {
  none = 'none',
  highlighted = 'highlighted',
  selected = 'selected',
  vulnerable = 'vulnerable'
}

export enum Content {
  empty = 'empty',
  bPawn = 'b-pawn',
  wPawn = 'w-pawn'
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
  board[1][0].content = Content.bPawn;
  board[7][1].content = Content.wPawn;
  board[8][1].content = Content.wPawn;
  board[7][0].content = Content.bPawn;

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