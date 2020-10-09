import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import Container from "react-bootstrap/Container";
import VisualTile from "./VisualTile";

function GameGrid(props) {
  return (
    <Container style={{ width: 600, height: "auto" }}>
      <ResponsiveEmbed>
        <Table bordered size="sm">
          <tbody>
            {props.grid.map((row) => (
              <tr key={"row: " + row[0].y}>
                {row.map((tile) => (
                  <VisualTile tile={tile} key={"x: " + tile.x + ", y: " + tile.y} />
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
