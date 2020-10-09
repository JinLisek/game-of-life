import React from "react";

class VisualTile extends React.Component {
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
    newTile.isFilled = !newTile.isFilled;
    this.setState({ tile: newTile });
  };

  getTileColor = () => {
    return this.state.tile.isFilled ? "bg-dark" : "bg-light";
  };
}

export default VisualTile;
