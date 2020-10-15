import Cell from "../logic/Cell";

const createGrid = () => {
  return Array.from({ length: 10 }, (v, y) => Array.from({ length: 10 }, (w, x) => new Cell(x, y)));
};

export function gridReducer(state = createGrid(), action) {
  switch (action.type) {
    case "grid/updateGrid":
      return action.updatedGrid;
    case "grid/clearGrid":
      return createGrid();
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
