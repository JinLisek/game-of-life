import React from "react";
import GameGrid from "./GameGrid";
import Container from "react-bootstrap/Container";
import StartButton from "./StartButton";

function App() {
  return (
    <Container>
      <GameGrid />
      <StartButton />
    </Container>
  );
}

export default App;
