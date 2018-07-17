
export function getHandlerByName(name: string) {
  function handlers(row, col) {
    return {
      'w-pawn': getPawnActions,
      'b-pawn': getPawnActions,
      'w-knight': getKnightActions,
      'b-knight': getKnightActions
    }[name](name, row, col);
  }
  return handlers;
}

export function getPawnActions(name: string, row: number, col: number) {
  let delta = name.charAt(0) === 'w'? -1: 1;
  let results = {moves: [], attacks: []};

  delta += row;
  if (delta >= 0 && delta <= 9) {
    results.moves.push([delta, col]);
  } else {
    //completely blocked by border
    return results;
  }

  if (col - 1 >= 0) {
    results.attacks.push([delta, col-1]);
  }
  if (col + 1 <= 9) {
    results.attacks.push([delta, col+1]);
  }

  return results;
}

export function getKnightActions(name: string, row: number, col: number) {
  let results = {moves: [], attacks: []};

  function checkBorder(dr, dc) {
    if (row + dr >= 0 &&
        row + dr <= 9 &&
        col + dc >= 0 &&
        col + dc <= 9) {
          results.moves.push([row+dr, col+dc]);
          results.attacks.push([row+dr, col+dc]);
    }
  }

  [[-2, 1],[-1, 2],[1, 2],[2, 1],[2, -1],[1, -2],[-1, -2],[-2, -1]
    ].map((delta) => {
      let [dr, dc] = delta;
      checkBorder(dr, dc);
  });

  return results;
}

