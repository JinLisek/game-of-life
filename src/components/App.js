import React from "react";
import GameGrid from "./GameGrid";
import Container from "react-bootstrap/Container";
import StartButton from "./StartButton";
import StopButton from "./StopButton";
import ClearButton from "./ClearButton";

function App() {
  return (
    <Container>
      <GameGrid />
      <StartButton />
      <StopButton />
      <ClearButton />
    </Container>
  );
}

export default App;
