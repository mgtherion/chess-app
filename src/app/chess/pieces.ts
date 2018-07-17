


export function getPawnActions(item: string, coords: number[]): any {
  let delta = item.charAt(0) === 'w'? -1: 1;
  let results = {moves: [], attacks: []};

  let moves = [];
  delta += coords[0];
  if (delta >= 0 && delta <= 9) {
    results.moves.push([delta, coords[1]]);
  } else {
    return results;
  }

  let attacks = [];
  if (coords[1] - 1 >= 0) {
    results.attacks.push([delta, coords[1]-1]);
  }
  if (coords[1] + 1 <= 9) {
    results.attacks.push([delta, coords[1]+1]);
  }

  return results;
}

