import React from "react";

class VisualCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tile: props.tile,
    };
  }

  render = () => {
    return <td onClick={this.onClick} className={this.getTileColor()}></td>;
  };

  onClick = () => {
    let newTile = this.state.tile;
    newTile.isAlive = !newTile.isAlive;
    this.setState({ tile: newTile });
  };

  getTileColor = () => {
    return this.state.tile.isAlive ? "bg-dark" : "bg-light";
  };
}

export default VisualCell;
