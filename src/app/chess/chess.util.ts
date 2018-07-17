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
                status: 'none'
              };
            }
          )
      ) as Board;
}

export function fillBoard(board: Board): Board {

  for (let i = 0; i < 10; i++) {
    board[8][i].content = Content.wPawn;
    board[1][i].content = Content.bPawn;
    board[9][i].content = Content.wKnight;
    board[0][i].content = Content.bKnight;
  }

  board[1][0].content = Content.bPawn;
  board[5][5].content = Content.wPawn;
  board[6][5].content = Content.wPawn;
  board[5][4].content = Content.bPawn;

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

export function saveData(board: Board, team: Team): void {
  localStorage.setItem('chessData',
    JSON.stringify({board: board, team: team}));
}

export function resetData(): Board {
  localStorage.setItem('chessData', '');
  return fillBoard(generateEmptyBoard());
}

export function loadData() {
  let data = localStorage.getItem('chessData');
  return data.length? JSON.parse(data): '';
}
