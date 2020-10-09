import React from "react";
import Table from "react-bootstrap/Table";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import Container from "react-bootstrap/Container";
import VisualTile from "./Tile";

class Tile {
  constructor() {
    this.isFilled = false;
  }
}

class GameGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grid: Array.from({ length: 100 }, (v, i) => Array.from({ length: 100 }, (y, j) => new Tile())) };
    this.state.grid[5][10].isFilled = true;
  }

  render() {
    return (
      <Container style={{ width: 600, height: "auto" }}>
        <ResponsiveEmbed>
          <Table bordered size="sm">
            <tbody>
              {this.state.grid.map((row) => (
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
}

export default GameGrid;
