import { SET_START_TILE, SET_END_TILE, SELECT_TILE_TYPE } from "./actions";

class Tile {
  constructor() {
    this.isFilled = false;
  }
}

const initialState = {
  grid: Array.from({ length: 100 }, (v, i) => Array.from({ length: 100 }, (y, j) => new Tile())),
};

export function gridReducer(state = initialState, action) {
  switch (action.type) {
    case "grid/updateGrid":
      return { ...state, grid: action.updatedGrid };
    default:
      return state;
  }
}
