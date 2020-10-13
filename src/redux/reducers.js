import Cell from "../logic/Cell";

const initialGrid = Array.from({ length: 50 }, (v, y) => Array.from({ length: 50 }, (w, x) => new Cell(x, y)));

export function gridReducer(state = initialGrid, action) {
  switch (action.type) {
    case "grid/updateGrid":
      return action.updatedGrid;
    case "grid/clearGrid":
      let clearedGrid = [...initialGrid];

      for (let y = 0; y < clearedGrid.length; ++y) {
        for (let x = 0; x < clearedGrid[y].length; ++x) {
          clearedGrid[x][y].isAlive = false;
        }
      }
      return clearedGrid;
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
