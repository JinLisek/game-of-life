import cloneDeep from "lodash.clonedeep";

export const cloneGrid = (grid) =>
  grid.map((row) => {
    return row.map((cell) => {
      return cloneDeep(cell);
    });
  });
