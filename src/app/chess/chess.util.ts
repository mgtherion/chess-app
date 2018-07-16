
export function generateEmptyBoard() {
  return new Array(10)
      .fill(null).map(
        () => new Array(10)
          .fill(null).map(
            () => { return {content: 'empty'}; }
          )
      );
}