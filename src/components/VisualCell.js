import React from "react";
import { connect } from "react-redux";

class VisualCell extends React.Component {
  render = () => {
    return <td onClick={this.onClick} className={this.getTileColor()}></td>;
  };

  onClick = () => {
    let newGrid = [...this.props.grid];
    let cell = newGrid[this.props.cellPos.y][this.props.cellPos.x];
    cell.isAlive = !cell.isAlive;
    this.props.updateGrid(newGrid);
  };

  getTileColor = () => {
    return this.props.grid[this.props.cellPos.y][this.props.cellPos.x].isAlive ? "bg-dark" : "bg-light";
  };
}

const mapStateToProps = ({ game, grid }) => {
  return { gameState: game.state, grid };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateGrid: (updatedGrid) => dispatch({ type: "grid/updateGrid", updatedGrid: updatedGrid }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VisualCell);
