import React from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";

function StartButton(props) {
  return <Button onClick={props.startGame}>Start</Button>;
}

const mapStateToProps = ({ game }) => {
  return { gameState: game.state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => dispatch({ type: "game/startGame" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartButton);
