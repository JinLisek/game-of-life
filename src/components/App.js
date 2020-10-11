import React from "react";
import GameGrid from "./GameGrid";
import Container from "react-bootstrap/Container";
import StartButton from "./StartButton";
import StopButton from "./StopButton";

function App() {
  return (
    <Container>
      <GameGrid />
      <StartButton />
      <StopButton />
    </Container>
  );
}

export default App;
