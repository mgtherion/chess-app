
export enum Status {
  none = 'none',
  highlighted = 'highlighted',
  selected = 'selected'
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

export function generateEmptyBoard(): Board {
  return new Array(10)
      .fill(null).map(
        () => new Array(10)
          .fill(null).map(
            () => { return {content: 'empty', status: 'none'}; }
          )
      ) as Board;
}

export function fillBoard(board: Board): Board {
  board[1][0].content = Content.bPawn;
  board[8][1].content = Content.wPawn;
  return board;
}

export function generateBoard(): Board {
  return fillBoard(generateEmptyBoard());
}