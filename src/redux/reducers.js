class Tile {
  constructor(x, y) {
    this.isAlive = false;
    this.x = x;
    this.y = y;
  }
}

const initialState = {
  grid: Array.from({ length: 50 }, (v, y) => Array.from({ length: 50 }, (w, x) => new Tile(x, y))),
};

export function gridReducer(state = initialState, action) {
  switch (action.type) {
    case "grid/updateGrid":
      return { ...state, grid: action.updatedGrid };
    default:
      return state;
  }
}
