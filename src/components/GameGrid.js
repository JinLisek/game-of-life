import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import Container from "react-bootstrap/Container";
import VisualTile from "./VisualTile";

function GameGrid(props) {
  props.grid[5][10].isFilled = true;
  return (
    <Container style={{ width: 600, height: "auto" }}>
      <ResponsiveEmbed>
        <Table bordered size="sm">
          <tbody>
            {props.grid.map((row) => (
              <tr>
                {row.map((tile) => (
                  <VisualTile tile={tile} />
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </ResponsiveEmbed>
    </Container>
  );
}

const mapState = (state) => {
  const { grid } = state;
  return { grid };
};

export default connect(mapState)(GameGrid);
