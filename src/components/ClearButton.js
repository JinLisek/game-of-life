import React from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";

function ClearButton(props) {
  return <Button onClick={props.clearGrid}>Clear</Button>;
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearGrid: () => dispatch({ type: "grid/clearGrid" }),
  };
};

export default connect(null, mapDispatchToProps)(ClearButton);
