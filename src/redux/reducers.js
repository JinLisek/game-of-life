class Cell {
  constructor(x, y) {
    this.isAlive = false;
    this.x = x;
    this.y = y;
  }
}

const initialGrid = Array.from({ length: 50 }, (v, y) => Array.from({ length: 50 }, (w, x) => new Cell(x, y)));

export function gridReducer(state = initialGrid, action) {
  switch (action.type) {
    case "grid/updateGrid":
      return action.updatedGrid;
    default:
      return state;
  }
}

const initialGameData = {
  state: "STOPPED",
};

export function gameReducer(state = initialGameData, action) {
  switch (action.type) {
    case "game/startGame":
      return { ...state, state: "RUNNING" };
    case "game/stopGame":
      return { ...state, state: "STOPPED" };
    default:
      return state;
  }
}
