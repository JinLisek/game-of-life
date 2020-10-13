import React from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";

function StopButton(props) {
  return <Button onClick={props.stopGame}>Stop</Button>;
}

const mapDispatchToProps = (dispatch) => {
  return {
    stopGame: () => dispatch({ type: "game/stopGame" }),
  };
};

export default connect(null, mapDispatchToProps)(StopButton);
