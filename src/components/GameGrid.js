import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import Container from "react-bootstrap/Container";
import VisualCell from "./VisualCell";

function isNeighbourAlive(x, y, grid) {
  if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) return false;
  return grid[x][y].isAlive;
}

class GameGrid extends React.Component {
  componentDidMount = () => {
    this.timerId = setInterval(() => {
      if (this.props.gameState === "RUNNING") {
        const oldGrid = this.props.grid;
        let updatedGrid = [...oldGrid];

        for (let y = 0; y < updatedGrid.length; ++y) {
          for (let x = 0; x < updatedGrid[y].length; ++x) {
            let aliveNeighbours = 0;
            if (isNeighbourAlive(x - 1, y - 1, oldGrid)) aliveNeighbours++;
            if (isNeighbourAlive(x, y - 1, oldGrid)) aliveNeighbours++;
            if (isNeighbourAlive(x + 1, y - 1, oldGrid)) aliveNeighbours++;
            if (isNeighbourAlive(x - 1, y, oldGrid)) aliveNeighbours++;
            if (isNeighbourAlive(x + 1, y, oldGrid)) aliveNeighbours++;
            if (isNeighbourAlive(x - 1, y + 1, oldGrid)) aliveNeighbours++;
            if (isNeighbourAlive(x, y + 1, oldGrid)) aliveNeighbours++;
            if (isNeighbourAlive(x + 1, y + 1, oldGrid)) aliveNeighbours++;

            let cell = updatedGrid[x][y];
            if (!cell.isAlive && aliveNeighbours === 3) cell.isAlive = true;
            else if (cell.isAlive && (aliveNeighbours < 2 || aliveNeighbours > 3)) cell.isAlive = false;
          }
        }

        this.props.updateGrid(updatedGrid);
      }
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.timerId);
  };

  render = () => {
    return (
      <Container style={{ width: 600, height: "auto" }}>
        <ResponsiveEmbed>
          <Table bordered size="sm">
            <tbody>
              {this.props.grid.map((row) => (
                <tr key={"row: " + row[0].y}>
                  {row.map((tile) => (
                    <VisualCell cellPos={{ x: tile.x, y: tile.y }} key={"x: " + tile.x + ", y: " + tile.y} />
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </ResponsiveEmbed>
      </Container>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(GameGrid);
