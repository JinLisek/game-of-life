import React from "react";

function VisualTile(props) {
  return <td class={props.tile.isFilled ? "bg-dark" : "bg-light"}></td>;
}

export default VisualTile;
